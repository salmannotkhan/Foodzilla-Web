import { Component } from "react";
import { withRouter } from "react-router";
import { Img } from "react-image";
import "../styles/Detail.scss";
// eslint-disable-next-line import/no-unresolved
import loader1 from "url:../assets/images/loader1.gif";

class Detail extends Component {
	state = {
		data: {},
		loading: true,
	};
	async componentDidMount() {
		const id = this.props.match.params.id;
		const response = await fetch(`https://foodzilla.vercel.app/recipe/${id}`);
		const data = await response.json();
		this.setState({ data: data, loading: false });
		console.log(data);
	}
	render() {
		const { data, loading } = this.state;
		return (
			<>
				{loading ? (
					"Loading"
				) : (
					<div className="detail">
						<div className="row">
							<Img
								src={data.image}
								alt={data.name}
								loader={<img src={loader1} alt={data.name} />}
							/>
						</div>
						<div className="row">
							<h2>{data.name}</h2>
							<div className="main">{data.main_ingredients}</div>
							<div className="cuisine">{data.cuisine}</div>
							<div className="course">{data.course}</div>
							<div className="taste">{data.taste}</div>
							<div className="level">{data.cooking_level}</div>
							<div className="time">
								Cook time:
								{data.cook_time > 60
									? `${data.cook_time / 60} Hrs`
									: `${data.cook_time} Mins`}
								<br />
								Prep time:
								{data.prep_time > 60
									? `${data.prep_time / 60} Hrs`
									: `${data.prep_time} Min`}
							</div>
						</div>
						<div className="row">
							<ul>
								Ingredients:
								{data.ingredients.map((ingredient, idx) => (
									<li key={idx}>{ingredient}</li>
								))}
							</ul>
						</div>
						<div className="row">
							<ul>
								Steps:
								{data.steps.map((step, idx) => (
									<li key={idx}>{step}</li>
								))}
							</ul>
						</div>
					</div>
				)}
			</>
		);
	}
}

export default withRouter(Detail);
