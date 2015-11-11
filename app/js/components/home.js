/*
 * Require all third party libraries
 *
 * 1. `react` is required for `React.createClass`
 */
var React = require("react");

/*
 * Require any local code we need, like stores, utils etc.
 */
var TickStore = require("../stores/tick-store");
var HomeActionCreators = require("../action-creators/home-action-creators");

/*
 * "Private" variables and functions can go here
 */
var _countDownTicker;

var Home = React.createClass({

    /*
     * Called once when the component is mounted
     */
    componentDidMount: function () {
        _countDownTicker = setInterval(this._onTick, 1000);
    },

    /*
     * Called once when the component is unmounted
     */
    componentWillUnmount: function () {
        if (_countDownTicker) {
            clearInterval(_countDownTicker);
        }
    },

    /*
     * Called once before componentDidMount to set the initial component state.
     */
    getInitialState: function () {
        return {
            ticksRemaining: TickStore.getRemainingTicks()
        };
    },

    /*
     * Called every time the state changes
     */
    render: function () {
        var displayText = "Action Triggered";

        if (this.state.ticksRemaining > 0) {
            displayText = this.state.ticksRemaining;
        }

        return (
            <div className="text-container">
                <span className="display-text">
                    {displayText}
                </span>
            </div>
        );
    },

    /*
     * Private functions
     */
    _onTick: function () {
        HomeActionCreators.timerTick();

        this.setState({
            ticksRemaining: TickStore.getRemainingTicks()
        });
    },

});

module.exports = Home;
