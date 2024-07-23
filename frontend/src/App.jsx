import { useState } from "react";
import NavBar from "./components/NavBar";
import "./App.css";
import AddEmployee from "./components/AddEmployee";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<NavBar />
			<AddEmployee />
		</>
	);
}

export default App;
