'use strict';

var Backbone = require('backbone');
var Submit = require('./submit');

module.exports = Backbone.Collection.extend({
  model: Submit,

  url: '/api/res'
});