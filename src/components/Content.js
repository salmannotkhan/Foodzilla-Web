import React from "react";
import "../styles/Content.scss";

export default class Content extends React.Component {
	render() {
		return (
			<section>
				{this.props.recipes.map((recipe) => (
					<div className="recipe" key={recipe.id}>
						<img src={recipe.image} height="100px" width="100px" />
						{recipe.name}
						<div
							className={
								"veg-indicator " +
								(recipe.is_veg ? "veg" : "non-veg")
							}
						></div>
					</div>
				))}
				<div className="page-nav">
					<button>Previous</button>
					<button onClick={this.props.nextPage}>Next</button>
				</div>
			</section>
		);
	}
}
