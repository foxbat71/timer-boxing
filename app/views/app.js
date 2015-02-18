'use strict';

var $ = require('jquery');
var Backbone = require('backbone');

var Timer = require('./../models/timer');
var t = new Timer({duration: 60});

t.start();

Backbone.$ = $;

module.exports = Backbone.View.extend({
  el: $('#app-container')
});
