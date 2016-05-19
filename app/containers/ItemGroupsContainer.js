var React = require('react');
var $ = require('jquery');
var ItemGroups = require('../components/ItemGroups');
var swapiHelpers = require('../utils/swapiHelpers');


var ItemGroupsContainer = React.createClass({
  getInitialState: function () {
    return {
      isLoading: true,
      itemGroups: [],
    }
  },
  componentDidMount: function() {
    this.serverRequest = $.get('http://swapi.co/api/', function (types) {
      this.setState({
        isLoading: false,
        itemGroups: Object.keys(types)
      });
    }.bind(this));
  },
  render: function () {
        return (
            <div className='col-sm-4'>
                <ItemGroups
                    isLoading={this.state.isLoading}
                    itemGroups={this.state.itemGroups} />
            </div>
        )
    }
});

module.exports = ItemGroupsContainer;
