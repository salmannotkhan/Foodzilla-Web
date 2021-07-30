import { Component } from "react";
import { Link } from "react-router-dom";
import { Img } from "react-image";
import "../styles/Content.scss";
// eslint-disable-next-line import/no-unresolved
import loader1 from "url:../assets/images/loader1.gif";

export default class Content extends Component {
	render() {
		return (
			<section>
				<div className="filters">
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
				</div>
				{this.props.recipes.map((recipe) => (
					<Link to={`/recipe/${recipe.id}`} className="recipe" key={recipe.id}>
						<Img
							src={recipe.image}
							alt={recipe.name}
							loader={<img src={loader1} alt={recipe.name} />}
						/>
						<div className="details">
							<div className="title">{recipe.name}</div>
							<div className={"veg " + (!recipe.is_veg ? "non-veg" : "")}></div>
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
