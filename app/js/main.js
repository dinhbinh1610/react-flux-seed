var Constants = require("./constants/app-constants");
var Dispatcher = require("./dispatcher/app-dispatcher");

Dispatcher.dispatch({
    actionType: Constants.APP_INITIALIZED
});

/*
 * Initialize React Below
 */
