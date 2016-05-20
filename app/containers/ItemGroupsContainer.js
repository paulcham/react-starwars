var React = require('react');
var $ = require('jquery');
var ItemGroups = require('../components/ItemGroups');


var ItemGroupsContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      isLoading: true,
      itemGroups: [],
    }
  },
  componentDidMount: function() {
    this.serverRequest = $.get('http://swapi.co/api/films/', function (groups) {
      this.setState({
        isLoading: false,
        itemGroups: groups.results
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
