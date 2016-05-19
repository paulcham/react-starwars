var React = require('react');
var ReactRouter = require('react-router');
var RootItemTypeContainer = require('../containers/RootItemTypeContainer');
var ItemGroupContainer = require('../containers/ItemGroupContainer');
var ItemDetailsContainer = require('../containers/ItemDetailsContainer');

function Home () {
    return (
        <div className="col-sm-12 text-center">
            <div className="jumbotron">
                <h1>Star Wars Reference</h1>
                <p className='lead'>A React app to retrieve data from the Star Wars API</p>
            </div>
            <RootItemTypeContainer />
            <ItemGroupContainer />
            <ItemDetailsContainer />
        </div>
    )
}

module.exports = Home;
