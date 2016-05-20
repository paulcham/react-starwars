var React = require('react');
var $ = require('jquery');
var FilmItemDetails = require('../components/FilmItemDetails');


var ItemDetailsContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      isLoading: true,
      itemDetails: {},
    }
  },
  componentDidMount: function() {
    this.serverRequest = $.get('http://swapi.co/api/films/1/', function (details) {
      this.setState({
        isLoading: false,
        itemDetails: details
      });
    }.bind(this));
  },
  render: function () {
        return (
            <div className='col-sm-4'>
                <FilmItemDetails
                    isLoading={this.state.isLoading}
                    itemDetails={this.state.itemDetails} />
            </div>
        )
    }
});

module.exports = ItemDetailsContainer;
