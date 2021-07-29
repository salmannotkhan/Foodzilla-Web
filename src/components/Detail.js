import React from "react";
import { withRouter } from "react-router";

class Detail extends React.Component {
	state = {
		data: {},
		loading: true,
	};
	async componentDidMount() {
		const id = this.props.match.params.id;
		const response = await fetch(`https://foodzilla.vercel.app/recipe/${id}`);
		const data = await response.json();
		this.setState({ data: data, loading: false });
	}
	render() {
		const { data, loading } = this.state;
		return (
			<div>
				{loading ? (
					"Loading"
				) : (
					<>
						<h2>{data.name}</h2>
						<ul>
							Ingredients:
							{data.ingredients.map((ingredient, idx) => (
								<li key={idx}>{ingredient}</li>
							))}
						</ul>
					</>
				)}
			</div>
		);
	}
}

export default withRouter(Detail);
