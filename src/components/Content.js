import { Component } from "react";
import { Link } from "react-router-dom";
import { Img } from "react-image";
import Multiselect from "multiselect-react-dropdown";
import "../styles/Content.scss";
// eslint-disable-next-line import/no-unresolved
import loader1 from "url:../assets/images/loader1.gif";

export default class Content extends Component {
	render() {
		return (
			<section>
				<div className="filters">
					<div className="filter">
						<label htmlFor="veg">
							<input
								id="veg"
								type="radio"
								name="is_veg"
								value="true"
								onClick={(e) =>
									this.props.updateParams(e.target.name, e.target.value)
								}
							/>
							Veg
						</label>
						<label htmlFor="non-veg">
							<input
								id="non-veg"
								type="radio"
								name="is_veg"
								value="false"
								onClick={(e) =>
									this.props.updateParams(e.target.name, e.target.value)
								}
							/>
							Non-Veg
						</label>
					</div>
					<div className="filter">
						<Multiselect
							placeholder="Select Taste"
							isObject={false}
							options={["Sweet", "Sour", "Spicy"]}
							onSelect={(selectedList) =>
								this.props.updateParams("taste", selectedList)
							}
							onRemove={(selectedList) =>
								this.props.updateParams("taste", selectedList)
							}
						/>
					</div>
					<div className="filter"></div>
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
				<button
					onClick={this.props.nextPage}
					disabled={
						this.props.loading ||
						this.props.recipes.length === 0 ||
						this.props.recipe % 10 !== 0
					}
				>
					{this.props.loading
						? "Loading"
						: this.props.recipes.length > 0 && this.props.recipe % 10 === 0
						? "Load more"
						: "No recipes found"}
				</button>
			</section>
		);
	}
}
