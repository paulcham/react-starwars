var axios = require('axios');

var helpers = {
  getRootItemTypes: function () {
    axios.get('http://swapi.co/api/')
    .then(function (response) {
      return response.data;
    })
    .catch(function (err) {console.warn('Error in getRootItemTypes: ', err)})
  }
};

module.exports = helpers;
