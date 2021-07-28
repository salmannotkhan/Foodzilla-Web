import React from "react";
import { render } from "react-dom";
import Header from "./components/Header";
import Content from "./components/Content";
import "./styles/index.scss";

const url = "https://foodzilla.vercel.app/";
class App extends React.Component {
	state = { loading: true, recipes: [], params: { last_id: 0 } };

	nextPage = () => {
		const { recipes, params } = this.state;

		this.setState(
			{
				params: {
					...params,
					last_id: recipes[recipes.length - 1].id,
				},
			},
			() => this.fetchRecipes()
		);
	};

	fetchRecipes = () => {
		this.setState({ loading: true });
		const { recipes, params } = this.state;
		fetch(url + "recipes?params=" + JSON.stringify(params))
			.then((response) => response.json())
			.then((data) =>
				this.setState({ loading: false, recipes: recipes.concat(data) })
			);
	};

	componentDidMount() {
		this.fetchRecipes();
	}

	render() {
		return (
			<>
				<Header />
				<Content
					recipes={this.state.recipes}
					nextPage={() => {
						this.nextPage();
					}}
				/>
			</>
		);
	}
}

render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
