import { Component } from "react";
import "../styles/Header.scss";

export default class Header extends Component {
	state = { query: "" };

	render() {
		return (
			<header>
				<form
					method="POST"
					onSubmit={(e) => {
						e.preventDefault();
						this.props.updateParams("query", this.state.query);
					}}
				>
					<input
						id="search"
						type="text"
						name="search"
						placeholder="Search Recipe"
						value={this.state.query}
						onChange={(e) => this.setState({ query: e.target.value })}
					/>
				</form>
			</header>
		);
	}
}
