var React = require('react');
var PropTypes = React.PropTypes;
var Spinner = require('react-spinkit');


var Items = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Items</h1>
                {this.props.itemsLoading === true
                ? <Spinner spinnerName='three-bounce' noFadeIn />
                : <ul>
                    {this.props.items.map(function(item, index) {
                        return <li
                                className="list-group-item text-capitalize"
                                className={this.props.isItemActive(item.url) + " list-group-item text-capitalize"}
                                key={index}
                                onClick={this.props.onItemChosen.bind(null,item.url)}>
                                {!!item.name && item.name}
                                {!!item.title && item.title}
                            </li>
                    }.bind(this))}
                </ul>}
            </div>
        )
    }
});

Items.propTypes = {
  itemsLoading: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired,
  onItemChosen: PropTypes.func.isRequired,
}

module.exports = Items;
