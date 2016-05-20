var React = require('react');
var PropTypes = React.PropTypes;


var RootItemTypes = React.createClass({
    render: function () {
        rootItemTypes = (this.props.rootItemTypes);
        return (
            <div>
                <h1>Types</h1>
                {this.props.isLoading === true
                ? <p>LOADING</p>
                : <ul>
                    {Object.keys(rootItemTypes).map(function(key) {
                        return <li
                            className="list-group-item text-capitalize"
                            key={key}
                            href={rootItemTypes[key]}
                            onClick={this.props.onTypeChosen}>{key}</li>
                    }.bind(this))}
                </ul>}
            </div>
        )
    }
});

RootItemTypes.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  rootItemTypes: PropTypes.object.isRequired,
  onTypeChosen: PropTypes.func.isRequired,
}

module.exports = RootItemTypes;
