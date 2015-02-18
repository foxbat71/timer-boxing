'use strict';

var Backbone = require('backbone');

var intervalId;
var incrementValue = function() {
  var value = this.get('value');

  if (value === this.get('duration')) {
    this.stop();
    this.reset();

    console.log('Timer finished!');
  } else {
    this.set('value', value + 1);
  }
};

var Timer = Backbone.Model.extend({
  defaults: {
    value: 0,                                                           // start time
    duration: 25*60,                                                    // timer duration in seconds
    isFinished: false
  },
  start: function() {
    this.set('isFinished', false);

    intervalId = window.setInterval(incrementValue.bind(this), 1000);   // start timer and let function be called each 1000ms
  },
  reset: function() {
    this.set('value', 0);
  },
  stop: function() {
    window.clearInterval(intervalId);
    this.set('isFinished', true);
  },
  secondsRemaining: function() {
    return this.get('duration') - this.get('value');
  },
  secondsPassed: function() {
    return this.get('value');
  }
});

module.exports = Timer;
