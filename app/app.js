'use strict';

var $ = require('jquery');
//var AppView = require('./views/app');
var TimerView = require('./views/timer');
var TimerModel = require('./models/timer');

$(function() {
  //new AppView();
  var $appEl = $('#app-container');
  var timer = new TimerView({
    model: new TimerModel({duration: 60})
  });
  
  $appEl.append(timer.el);
  timer.render();
});
