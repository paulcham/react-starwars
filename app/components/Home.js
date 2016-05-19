var React = require('react');
var ReactRouter = require('react-router');
var RootItemTypeContainer = require('../containers/RootItemTypeContainer');
var ItemGroupsContainer = require('../containers/ItemGroupsContainer');
var ItemDetailsContainer = require('../containers/ItemDetailsContainer');

function Home () {
    return (
        <div className="col-sm-12 text-center">
            <div className="jumbotron">
                <h1>Star Wars Reference</h1>
                <p>A React app to retrieve data from the Star Wars API</p>
                <p><a href="https://swapi.co/">https://swapi.co/</a></p>
            </div>
            <RootItemTypeContainer />
            <ItemGroupsContainer />
            <ItemDetailsContainer />
        </div>
    )
}

module.exports = Home;
