import React from "react";
import { render } from "react-dom";
import Header from "./components/Header";
import Content from "./components/Content";
import "./styles/index.scss";

const url = "https://foodzilla.vercel.app/";
class App extends React.Component {
	state = { recipes: [], params: { last_id: 0 } };

	nextPage = () => {
		this.setState(
			{
				params: {
					...this.state.params,
					last_id:
						this.state.recipes[this.state.recipes.length - 1].id,
				},
			},
			() => {
				this.fetchRecipes();
			}
		);
	};

	fetchRecipes = () => {
		const requestUrl = new URL(url + "recipes");
		Object.entries(this.state.params).forEach(([key, value]) => {
			requestUrl.searchParams.append(key, value);
		});
		fetch(requestUrl)
			.then((response) => response.json())
			.then((data) => this.setState({ recipes: data }));
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
