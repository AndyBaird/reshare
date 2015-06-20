'use strict';

var Backbone = require('backbone');
var template = require('../template');
var router = require('../../util/router');
var $ = require('jquery');

// The page-header view is responsible for managing the page-header component
// links, current-user info in the nav-bar, etc
  

module.exports = Backbone.View.extend({
  template: template('shared/page-header'),
  
  // events: {
  //   'click .login-btn': 'hideLogin',
  // },
  
  el: '.page-header',

  initialize: function () {
    this.listenTo(this.model.nav, 'change', this.render);
    this.listenTo(this.model.currentUser, 'change', this.render);
    this.render();
  },

  render: function () {
    this.$el.html(this.template({
      page: this.model.nav.get('page'),
      currentUser: this.model.currentUser.toJSON()  
    }));
  },
  
  // hideLogin: function () {
  //       // if ($('.currentUser')[0].contents() = '' )
  //      $('.login-btn')[0].style.display = "none"; 
  // }
  
  
});