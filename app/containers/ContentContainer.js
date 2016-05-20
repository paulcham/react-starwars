var React = require('react');
var $ = require('jquery');
var Groups = require('../components/Groups');
var ItemGroups = require('../components/ItemGroups');
var ItemDetails = require('../components/ItemDetails');


var contentContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      groupsLoading: false,
      itemsLoading: true,
      detailsLoading: false,
      groups: {},
      itemGroups: [],
      itemDetails: {},
    }
  },
  handleTypeChosen: function(typeUrl) {
    this.setState({
        itemsLoading: true
    });
    this.serverRequest = $.get(typeUrl, function (groups) {
      this.setState({
        itemsLoading: false,
        itemGroups: groups.results
      });
    }.bind(this));
  },
  componentDidMount: function() {
    this.serverRequest = $.get('http://swapi.co/api/', function (types) {
      this.setState({
        groupsLoading: false,
        groups: types
      });
    }.bind(this));
  },
  render: function () {
        return (
            <section>
                <div className='col-sm-4'>
                    <Groups
                        groupsLoading={this.state.groupsLoading}
                        groups={this.state.groups}
                        onTypeChosen={this.handleTypeChosen} />
                </div>
                <div className='col-sm-4'>
                    <ItemGroups
                        itemsLoading={this.state.groupsLoading}
                        itemGroups={this.state.itemGroups} />
                </div>
                <div className='col-sm-4'>
                    <ItemDetails
                        detailsLoading={this.state.detailsLoading}
                        itemDetails={this.state.itemDetails} />
                </div>
            </section>

        )
    }
});

module.exports = contentContainer;
