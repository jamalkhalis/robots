import React from 'react';

class ErrorBoundry extends React.Component {

	constructor() {
		super();
		this.state = {
			hasError: false,
		}
	}

	componentDidCatch(error, info) {
		this.setState({hasError: true});
	}

	render() {
		if (this.state.hasError) {
			return (
				<div> 
					<h1> Oooops, the page not found </h1>
				</div>
			)
		} 
		return this.props.children;
	}
}

export default ErrorBoundry;