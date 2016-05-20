var React = require('react');
var ReactRouter = require('react-router');
var ContentContainer = require('../containers/ContentContainer');


function Home () {
    return (
        <div className="col-sm-12 text-center">
            <div className="jumbotron">
                <h1>SWAPI Reference</h1>
                <p>A React app to retrieve data from the Star Wars API</p>
                <p><a href="https://swapi.co/">https://swapi.co/</a></p>
            </div>
            <ContentContainer />
        </div>
    )
}

module.exports = Home;
