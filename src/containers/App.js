import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import "./App.css"
import linkedin from "./linkedin.svg";
import github from "./github.svg";

const App = () => {

	const [robots, setRobots] = useState([]);
	const [searchfield, setSearchfield] = useState("");

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => setRobots(users))
	}, [])

	const onSearchChange = (event) => {
		setSearchfield(event.target.value);
	}

	const filterRobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(searchfield.toLowerCase())
	})

	if (robots.length === 0) {
		return (<h1> Loading </h1>)
	} else {

		return (
			<div className="tc">

				<div className="bg-1 pv3">

					<div className="header tc pv1 ph2">
						<div>
							<h1 className="ma0"> 
								<img 
									src="https://robohash.org/55" 
									width="50rem"
									height="50rem"
									alt=""
								/>
								<span> Robots </span>
							</h1>
						</div>
						<SearchBox searchChange={onSearchChange} />
					</div>

					<div className="main mt3 pv3">
						<Scroll>
							<ErrorBoundry>
			    				<CardList robots={ filterRobots } />
							</ErrorBoundry>
						</Scroll>
					</div>

				</div>

				<div className="footer pv3">
					<div className="footer-body">
						<div className="">
							Made with love by Jamal KHALIS.
						</div>

						<div>
							<a href="https://github.com/jamalkhalis">
								<img src={github} alt="" className="mr3" />
							</a>

							<a href="https://www.linkedin.com/in/jamalkhalis/">
								<img src={linkedin} alt="" />
							</a>
						</div>
					</div>
				</div>

			</div>
		)
		
	}
}

export default App;



// constructor() {
// 	super()
// 	this.state = {
// 		robots: [],
// 		searchfield: ''
// 	}
// }

// componentDidMount() {
// 	fetch('https://jsonplaceholder.typicode.com/users')
// 		.then(response => response.json())
// 		.then(users => {this.setState({robots: users})})
// }