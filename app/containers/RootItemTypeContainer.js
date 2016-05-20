var React = require('react');
var $ = require('jquery');
var RootItemTypes = require('../components/RootItemTypes');


var RootItemTypeContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      isLoading: true,
      rootItemTypes: {},
    }
  },
  handleTypeChosen: function() {
    console.log('clicked');
  },
  componentDidMount: function() {
    this.serverRequest = $.get('http://swapi.co/api/', function (types) {
      this.setState({
        isLoading: false,
        rootItemTypes: types
      });
    }.bind(this));
  },
  render: function () {
        return (
            <div className='col-sm-4'>
                <RootItemTypes
                    isLoading={this.state.isLoading}
                    rootItemTypes={this.state.rootItemTypes}
                    onTypeChosen={this.handleTypeChosen} />
            </div>
        )
    }
});

module.exports = RootItemTypeContainer;
