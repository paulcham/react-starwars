var React = require('react');
var PropTypes = React.PropTypes;
var Spinner = require('react-spinkit');

var Groups = React.createClass({
    render: function () {
        groups = this.props.groups;
        return (
            <div>
                <h1>Groups</h1>
                {this.props.groupsLoading === true
                ? <Spinner spinnerName='three-bounce' noFadeIn />
                : <ul>
                    {Object.keys(groups).map(function(key) {
                        return <li
                            className={this.props.isGroupActive(groups[key]) + " list-group-item text-capitalize"}
                            key={key}
                            onClick={this.props.onGroupChosen.bind( null, groups[key] )}>{key}</li>
                    }.bind(this))}
                </ul>}
            </div>
        )
    }
});

Groups.propTypes = {
  groupsLoading: PropTypes.bool.isRequired,
  groups: PropTypes.object.isRequired,
  onGroupChosen: PropTypes.func.isRequired,
  isGroupActive: PropTypes.func.isRequired,
}

module.exports = Groups;
