import { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Content from "./Content";
import Detail from "./Detail";

export default class App extends Component {
	state = { loading: true, recipes: [], params: { last_id: 0 } };

	async fetchRecipes() {
		this.setState({ loading: true });
		const { recipes, params } = this.state;
		const url = new URL("https://foodzilla.vercel.app/recipes");
		Object.entries(params).forEach(([key, value]) => {
			url.searchParams.append(key, value);
		});
		const response = await fetch(url);
		const data = await response.json();
		const last_id = data[data.length - 1].id;
		this.setState({
			loading: false,
			recipes: recipes.concat(data),
			params: { ...params, last_id: last_id },
		});
	}

	componentDidMount() {
		this.fetchRecipes();
	}

	render() {
		return (
			<Router>
				<Header />
				<Switch>
					<Route exact path="/">
						<Content
							recipes={this.state.recipes}
							nextPage={() => this.fetchRecipes()}
							loading={this.state.loading}
						/>
					</Route>
					<Route path="/recipe/:id">
						<Detail />
					</Route>
				</Switch>
			</Router>
		);
	}
}
