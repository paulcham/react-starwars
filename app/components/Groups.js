var React = require('react');
var PropTypes = React.PropTypes;


var Groups = React.createClass({
    render: function () {
        groups = (this.props.groups);
        return (
            <div>
                <h1>Groups</h1>
                {this.props.groupsLoading === true
                ? <p>LOADING</p>
                : <ul>
                    {Object.keys(groups).map(function(key) {
                        return <li
                            className="list-group-item text-capitalize"
                            key={key}
                            rootItemUrl={groups[key]}
                            onClick={this.props.onTypeChosen.bind(null,groups[key])}>{key}</li>
                    }.bind(this))}
                </ul>}
            </div>
        )
    }
});

Groups.propTypes = {
  groupsLoading: PropTypes.bool.isRequired,
  groups: PropTypes.object.isRequired,
  onTypeChosen: PropTypes.func.isRequired,
}

module.exports = Groups;