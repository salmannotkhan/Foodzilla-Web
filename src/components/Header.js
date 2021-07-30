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
					<div className="row">
						<label htmlFor="veg">
							<input id="veg" type="radio" name="isVeg" value="true" />
							Veg
						</label>
						<label htmlFor="non-veg">
							<input id="non-veg" type="radio" name="isVeg" value="false" />
							Non-Veg
						</label>
					</div>
				</form>
			</header>
		);
	}
}
