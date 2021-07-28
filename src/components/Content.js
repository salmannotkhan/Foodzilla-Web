import React from "react";
import "../styles/Content.scss";

export default class Content extends React.Component {
	render() {
		return (
			<section onScroll={console.log}>
				{this.props.recipes.map((recipe) => (
					<a href="/" className="recipe" key={recipe.id}>
						<img src={recipe.image} alt={recipe.name} />
						<div className="details">
							<div className="title">{recipe.name}</div>
							<div
								className={
									"veg-indicator " + (recipe.is_veg ? "veg" : "non-veg")
								}
							></div>
						</div>
					</a>
				))}
				<button onClick={this.props.nextPage}>Load more</button>
			</section>
		);
	}
}
