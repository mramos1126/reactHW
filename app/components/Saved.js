var React = require('react');
var Router = require('react-router');

// Here we created the home component
var Main = React.createClass({

	render: function(){
		return(
			<div className="container">



				{this.props.children}
			</div>
		)
	}

});

// Exporting the component effectively means we can deploy the component in any other file. 
module.exports = Main;
