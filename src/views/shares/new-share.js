'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
var template = require('../template');
var formToObj = require('form-to-obj');

module.exports = Backbone.View.extend({
  template: template('shares/new-share'),
  
  className: 'submit-container',
  
  events: {
  'click .btn-submit': 'submitShare'
  },

  
  initialize: function () {
    this.listenTo(this.model, 'change', this.render);
    this.render();
  },

  render: function () {
    this.$el.html(this.template);
  },
  
  submitShare: function (e) {
    e.preventDefault();
    var submit = formToObj(e.target);
    
    this.model.create(submit);
  }
});

