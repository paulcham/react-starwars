var React = require('react');
var $ = require('jquery');
var RootItemTypes = require('../components/RootItemTypes');
var swapiHelpers = require('../utils/swapiHelpers');


var RootItemTypeContainer = React.createClass({
  getInitialState: function () {
    return {
      isLoading: true,
      rootItemTypes: {},
    }
  },
  componentDidMount: function() {
    this.serverRequest = $.get('http://swapi.co/api/', function (types) {
      this.setState({
        isLoading: false,
        rootItemTypes: Object.keys(types)
      });
    }.bind(this));
  },
  render: function () {
        return (
            <div className='col-sm-6 col-sm-offset-3'>
                <RootItemTypes
                    isLoading={this.state.isLoading}
                    rootItemTypes={this.state.rootItemTypes} />
            </div>
        )
    }
});

module.exports = RootItemTypeContainer;
