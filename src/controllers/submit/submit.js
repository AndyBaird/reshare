'use strict';

var $ = require('jquery');
var router = require('../../util/router');
var main = require('../../views/main');
var SubmitCollection = require("../../models/submit/submit-collection")
var SubmitView = require('../../views/submit/submit');

router.route('submit', function () {
  main.show(new SubmitView({
    model: new SubmitCollection()
  }));
});