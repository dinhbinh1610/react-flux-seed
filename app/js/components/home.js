/*
 * Require all third party libraries
 *
 * 1. `react` is required for `React.createClass`
 */
var React = require("react");

/*
 * "Private" variables go here
 */
var _countDownTicker;

var Home = React.createClass({

    componentDidMount: function () {
        _countDownTicker = setInterval(this._onTick, 1000);
    },

    componentWillUnmount: function () {
        if (_countDownTicker) {
            clearInterval(_countDownTicker);
        }
    },

    getInitialState: function () {
        return {
            ticksRemaining: 10
        };
    },

    render: function () {
        var displayText = "Action Triggered!";

        if (this.state.ticksRemaining > 0) {
            displayText = this.state.ticksRemaining + "...";
        }

        return (
            <div>
                <span className="hello-react">
                    {displayText}
                </span>
            </div>
        );
    },

    _onTick: function () {
        if (this.state.ticksRemaining > 0) {
            this.setState({
                ticksRemaining: this.state.ticksRemaining - 1
            });
        }
    },

});

module.exports = Home;
