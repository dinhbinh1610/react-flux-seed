/*
 * Node's EventEmitter + object-assign
 */
var EventEmitter = require("events").EventEmitter;
var assign = require("object-assign");

/*
 * Require our own modules
 */
var AppDispatcher = require("../dispatcher/app-dispatcher");
var AppConstants = require("../constants/app-constants");

/*
 * Private variables and functions can go here
 */
var _ticks = 10;

/*
 * TickStore
 *  - Watches all events and prints them to the console.
 */
var TickStore = assign({}, EventEmitter.prototype, {

    getRemainingTicks: function () {
        return _ticks;
    },

});

/*
 * Register all event callbacks
 */
AppDispatcher.register(function (action) {
  switch (action.actionType) {
      case AppConstants.TICK_GENERATED:
          if (_ticks > 0) {
            _ticks -= 1;
          }
          break;

      default:
          /*
           * Do nothing
           */
      break;
  }
});

module.exports = TickStore;
