var React = require('react');
var PropTypes = React.PropTypes;


var ItemDetails = React.createClass({
    render: function () {
        itemDetails = this.props.itemDetails;
        return (
            <div>
                <h1>Details</h1>
                {this.props.detailsLoading === true
                ? <p>LOADING</p>
                : <ul>

                    {Object.keys(itemDetails).map(function(key) {
                        return <li
                            className="list-group-item text-capitalize"
                            key={key}>{key}: {itemDetails[key]}</li>
                    }.bind(this))}

                </ul>}
            </div>
        )
    }
});

ItemDetails.propTypes = {
  detailsLoading: PropTypes.bool.isRequired,
  itemDetails: PropTypes.object.isRequired,
}

module.exports = ItemDetails;
