import React from "react";
import "../styles/Header.scss";

export default class Header extends React.Component {
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
						<label for="veg">
							<input
								id="veg"
								type="radio"
								name="isVeg"
								value="true"
							/>
							Veg
						</label>
						<label for="non-veg">
							<input
								id="non-veg"
								type="radio"
								name="isVeg"
								value="false"
							/>
							Non-Veg
						</label>
					</div>
				</form>
			</header>
		);
	}
}