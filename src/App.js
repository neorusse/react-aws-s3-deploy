import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					A CI/CD Pipeline created with Jenkins, and used deploy a React
					Application to AWS S3.
				</p>
				<a
					className="App-link"
					href="https://www.udacity.com/course/cloud-dev-ops-nanodegree--nd9991"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn Cloud DevOps
				</a>
			</header>
		</div>
	);
}

export default App;
