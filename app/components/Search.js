var React = require('react');
var Router = require('react-router');

var Query = require('./Search/Query');
var Results = require('./Search/Results');

// Here we created the home component
var Main = React.createClass({

    render: function(){
        return(
            <div className="main-container">
                <Query/>
                <Results />
            </div>
        )
    }
});

// Exporting the component effectively means we can deploy the component in any other file. 
module.exports = Main;