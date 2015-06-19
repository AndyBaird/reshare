'use strict';

var $ = require('jquery');
var router = require('../../util/router');
var main = require('../../views/main');
var Share = require("../../models/shares/share-collection");
var NewShareView = require('../../views/shares/new-share');

router.route('shares/new', function () {
  main.show(new NewShareView({
    model: new Share()
  }));
});