var React = require('react');
var PropTypes = React.PropTypes;


var FilmItemDetails = React.createClass({
    render: function () {
        itemDetails = this.props.itemDetails;
        return (
            <div>
                <h1>Details</h1>
                {this.props.isLoading === true
                ? <p>LOADING</p>
                : <ul>
                    <li className="list-group-item">Episode {itemDetails.episode_id}: {itemDetails.title}</li>
                    <li className="list-group-item">Released: {itemDetails.release_date}</li>
                    <li className="list-group-item">Director: {itemDetails.director}</li>
                </ul>}
            </div>
        )
    }
});

FilmItemDetails.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  itemDetails: PropTypes.object.isRequired,
}

module.exports = FilmItemDetails;
