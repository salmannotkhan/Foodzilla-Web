import React from "react";
import { render } from "react-dom";
import Header from "./components/Header";
import "./styles/index.scss";

class App extends React.Component {
	render() {
		return (
			<>
				<Header />
			</>
		);
	}
}

render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
