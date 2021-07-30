import React from "react";
import { Link } from "react-router-dom";
import "../styles/Content.scss";

export default class Content extends React.Component {
	render() {
		return (
			<section onScroll={console.log}>
				{this.props.recipes.map((recipe) => (
					<Link to={`/recipe/${recipe.id}`} className="recipe" key={recipe.id}>
						<img src={recipe.image} alt={recipe.name} />
						<div className="details">
							<div className="title">{recipe.name}</div>
							<div
								className={
									"veg-indicator " + (recipe.is_veg ? "veg" : "non-veg")
								}
							></div>
						</div>
					</Link>
				))}
				<button onClick={this.props.nextPage} disabled={this.props.loading}>
					{this.props.loading ? "Loading" : "Load more"}
				</button>
			</section>
		);
	}
}
