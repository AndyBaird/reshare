'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
var template = require('../template');

module.exports = Backbone.View.extend({
  template: template('shares/shares'),
  
  className: 'shares-container',
  
  initialize: function () {
    this.listenTo(this.model, 'change', this.render);
    this.render();
  },

  render: function () {
    this.$el.html(this.template({ 
      user: this.model.toJSON()
    }));
  }
});

