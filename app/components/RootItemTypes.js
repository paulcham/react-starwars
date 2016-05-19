var React = require('react');
var PropTypes = React.PropTypes;


var RootItemTypes = React.createClass({
    render: function () {
        return (
            <ul>
            {this.props.rootItemTypes.map(function(rootItem, index) {
                return <li className="list-group-item text-capitalize" key={index}>{rootItem}</li>;
            })}
            </ul>
        )
    }
});

RootItemTypes.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  rootItemTypes: PropTypes.array.isRequired,
}

module.exports = RootItemTypes;
