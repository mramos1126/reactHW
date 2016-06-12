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
						<h1 className="panel-title"><strong><i className="fa fa-newspaper-o" aria-hidden="true"></i>  Query</strong></h1>
					</div>
					<div className="panel-body">


						<form>
							<div className="form-group">
								<h4 className=""><strong>Topic</strong></h4>
								<input type="text" className="form-control " id="search_topic" />

								<h4 className=""><strong>Start Year</strong></h4>
								<input type="text" className="form-control " id="search_start" />

								<h4 className=""><strong>End Year</strong></h4>
								<input type="text" className="form-control " id="search_end" />

							</div>

							
							<div className="pull-right">
								<button type="submit" className="btn btn-danger"><h4>Submit</h4></button>
							</div>
						</form>

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
