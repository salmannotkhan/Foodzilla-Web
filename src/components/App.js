import { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Content from "./Content";
import Detail from "./Detail";

export default class App extends Component {
	state = { loading: true, recipes: [], params: { last_id: 0 } };

	updateParams(key, value) {
		const newParams = { ...this.state.params, last_id: 0 };
		newParams[key] = typeof value === "string" ? value : value.join("|");
		this.setState({ params: newParams }, () => {
			this.fetchRecipes();
		});
	}

	async fetchRecipes(reload = true) {
		this.setState({ loading: true });
		const { recipes, params } = this.state;
		const url = new URL("https://foodzilla.vercel.app/recipes");
		Object.entries(params).forEach(([key, value]) => {
			if (value.length > 0) url.searchParams.append(key, value);
		});
		const response = await fetch(url);
		const data = (await response.json()) || [];
		const last_id = data.length === 0 ? 0 : data[data.length - 1].id;

		this.setState({
			loading: false,
			recipes: reload ? data : recipes.concat(data),
			params: { ...params, last_id: last_id },
		});
	}

	componentDidMount() {
		this.fetchRecipes();
	}

	render() {
		return (
			<Router>
				<Header updateParams={(key, value) => this.updateParams(key, value)} />
				<Switch>
					<Route exact path="/">
						<Content
							recipes={this.state.recipes}
							nextPage={() => this.fetchRecipes(false)}
							loading={this.state.loading}
							updateParams={(key, value) => this.updateParams(key, value)}
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
