var React = require('react');
var ReactRouter = require('react-router');
var RootItemTypeContainer = require('../containers/RootItemTypeContainer');

function Home () {
    return (
        <div className="col-sm-12 text-center">
            <div className="jumbotron">
                <h1>Star Wars Reference</h1>
                <p className='lead'>A React app to retrieve data from the Star Wars API</p>
            </div>
            <p>Begin by choosing what type of item you'd like to see more about:</p>
            <RootItemTypeContainer />
        </div>
    )
}

module.exports = Home;
