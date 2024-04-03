import Image from "./Image";
import "./App.css";

function App() {
	return (
		<>
			<h3>Front End Technologies</h3>
			<div className="container">
				<Image
					src="src\assets\html_logo.png"
					alt="html logo"
					width={150}
					height={150}
				/>
				<Image
					src="src\assets\css_logo.png"
					alt="css logo"
					width={150}
					height={150}
				/>
				<Image
					src="src\assets\js_logo.png"
					alt="js logo"
					width={150}
					height={150}
				/>
				<Image
					src="src\assets\react_logo.png"
					alt="react logo"
					width={150}
					height={150}
				/>
			</div>
		</>
	);
}

export default App;
