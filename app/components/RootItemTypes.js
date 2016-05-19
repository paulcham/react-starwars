var React = require('react');

var RootItemTypes = React.createClass({
    render: function () {
        return (
            <div>
                <li className="list-group-item">Planets</li>
                <li className="list-group-item">Spaceships</li>
            </div>
        )
    }
});

module.exports = RootItemTypes;
