import { Component } from "react";
import "../styles/Header.scss";

export default class Header extends Component {
	render() {
		return (
			<header>
				<form>
					<input
						id="search"
						type="text"
						name="search"
						placeholder="Search Recipe"
					/>
				</form>
			</header>
		);
	}
}
