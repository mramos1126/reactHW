var React = require('react');
var Router = require('react-router');



// Here we created the home component
var Main = React.createClass({

	render: function(){
		return(
			<div className="container">
				<div className="row">
					<div className="col-lg-12">

						<div className="panel panel-primary">
							<div className="panel-heading">
								<h1 className="panel-title"><strong><i className="fa fa-list-alt"></i>  Results</strong></h1>
							</div>
							<div className="panel-body">
								<ul className="list-group">
								  <li>WORK</li>
								</ul>					
							</div>
						</div>

					</div>
				</div>

				{this.props.children}
			</div>
		)
	}

});

// Exporting the component effectively means we can deploy the component in any other file. 
module.exports = Main;
