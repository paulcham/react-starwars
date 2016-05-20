var React = require('react');
var PropTypes = React.PropTypes;


var ItemGroups = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Groups</h1>
                {this.props.isLoading === true
                ? <p>LOADING</p>
                : <ul>
                    {this.props.itemGroups.map(function(itemGroup, index) {
                        return <li className="list-group-item text-capitalize" key={index}>{itemGroup.title}</li>;
                    })}
                </ul>}
            </div>
        )
    }
});

ItemGroups.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  itemGroups: PropTypes.array.isRequired,
}

module.exports = ItemGroups;
