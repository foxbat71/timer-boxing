'use strict';

var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

Backbone.$ = $;

var TimerView = Backbone.View.extend({
  initialize: function() {
    this.model.on('change:value', function() {
      this.render();
    }, this);
  },
  tagName: 'div',
  id: 'timer',
  events: {
    'click #start-timer' : 'start'
  },
  template: _.template($('#timer-template').html()),
  render: function () {
    this.$el.html(this.template(this.model));

    return this;
  },
  start: function() {
    this.model.start();
  }
});

module.exports = TimerView;
