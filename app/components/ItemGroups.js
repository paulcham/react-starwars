var React = require('react');
var PropTypes = React.PropTypes;


var ItemGroups = React.createClass({
    render: function () {
        return (
            <ul>
            {this.props.itemGroups.map(function(itemGroup, index) {
                return <li className="list-group-item text-capitalize" key={index}>{itemGroup}</li>;
            })}
            </ul>
        )
    }
});

ItemGroups.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  itemGroups: PropTypes.array.isRequired,
}

module.exports = ItemGroups;
