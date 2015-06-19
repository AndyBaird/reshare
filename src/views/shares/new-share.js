'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var template = require('../template');
var handleError = require('../../util/handle-error');
var formToObj = require('form-to-obj');

module.exports = Backbone.View.extend({
  template: template('shares/new-share'),
  
  className: 'submit-container',
  
  events: {
  'submit new-share-form': 'submitShare'
  },
  
  initialize: function () {
    this.listenTo(this.model, 'change', this.render);
      this.model.fetch().done(this.render.bind(this)).fail(function () {
      alert('Failed to load!');
      console.error(arguments);
    });
    
  },

  render: function () {
    this.$el.html(this.template);
  },
  
  submitShare: function (e) {
   e.preventDefault();
    var newShare = formToObj(e.target);
    
    this.model.create(newShare, handleError());
  }
});

