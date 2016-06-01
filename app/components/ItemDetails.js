var React = require('react');
var PropTypes = React.PropTypes;
var Spinner = require('react-spinkit');


var ItemDetails = React.createClass({
    render: function () {
        itemDetails = this.props.itemDetails;
        return (
            <div>
                <h1>Details</h1>
                {this.props.detailsLoading === true
                ? <Spinner spinnerName='three-bounce' noFadeIn />
                : <ul className="text-left">

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
