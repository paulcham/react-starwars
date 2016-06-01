var React = require('react');
var $ = require('jquery');
var Groups = require('../components/Groups');
var Items = require('../components/Items');
var ItemDetails = require('../components/ItemDetails');

var contentContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      groupsLoading: true,
      itemsLoading: false,
      detailsLoading: false,
      groups: {},
      items: [],
      itemDetails: {},
      selectedGroup:'',
      selectedItem:''
    }
  },
  handleGroupChosen: function(groupUrl) {
    this.setState({
        itemsLoading: true,
        itemDetails: {},
        selectedGroup: groupUrl
    });
    this.serverRequest = $.get(groupUrl, function (items) {
      this.setState({
        itemsLoading: false,
        items: items.results
      });
    }.bind(this));
  },
  handleItemChosen: function(itemUrl) {
    this.setState({
        detailsLoading: true,
        selectedItem: itemUrl
    });
    this.serverRequest = $.get(itemUrl, function (itemDetails) {
      this.setState({
        detailsLoading: false,
        itemDetails: itemDetails
      });
    }.bind(this));
  },
  isGroupActive:function(value){
    return 'btn '+((value===this.state.selectedGroup) ?'active':'default');
  },
  isItemActive:function(value){
    return 'btn '+((value===this.state.selectedItem) ?'active':'default');
  },

  componentDidMount: function() {
    this.serverRequest = $.get('http://swapi.co/api/', function (groups) {
      this.setState({
        groupsLoading: false,
        groups: groups
      });
    }.bind(this));
  },
  render: function () {
        return (
            <section>
                <div className='col-sm-3'>
                    <Groups
                        groupsLoading={this.state.groupsLoading}
                        groups={this.state.groups}
                        onGroupChosen={this.handleGroupChosen}
                        isGroupActive={this.isGroupActive} />
                </div>
                <div className='col-sm-3'>
                    <Items
                        itemsLoading={this.state.itemsLoading}
                        items={this.state.items}
                        onItemChosen={this.handleItemChosen}
                        isItemActive={this.isItemActive} />
                </div>
                <div className='col-sm-6'>
                    <ItemDetails
                        detailsLoading={this.state.detailsLoading}
                        itemDetails={this.state.itemDetails} />
                </div>
            </section>

        )
    }
});

module.exports = contentContainer;
