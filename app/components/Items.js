var React = require('react');
var PropTypes = React.PropTypes;


var Items = React.createClass({
    render: function () {
        console.log(this.props.items)
        return (
            <div>
                <h1>Items</h1>
                {this.props.itemsLoading === true
                ? <p>LOADING</p>
                : <ul>
                    {this.props.items.map(function(item, index) {
                        return (
                            <li className="list-group-item text-capitalize" key={index}>
                                {!!item.name && item.name}
                                {!!item.title && item.title}
                            </li>
                        )
                    })}
                </ul>}
            </div>
        )
    }
});

Items.propTypes = {
  itemsLoading: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired,
}

module.exports = Items;
