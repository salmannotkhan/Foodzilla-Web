import React from "react";
import { render } from "react-dom";

class App extends React.Component {
	render() {
		return <div>Hello World!!!</div>;
	}
}

render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
