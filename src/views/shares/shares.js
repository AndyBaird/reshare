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
      
      this.model.fetch().done(this.render.bind(this)).fail(function () {
      alert('Failed to load!');
      console.error(arguments);
    });
  },

  render: function () {
        console.log(this.model.toJSON());
    this.$el.html(this.template({ 
      share: this.model.toJSON()
    }));
  }
});

