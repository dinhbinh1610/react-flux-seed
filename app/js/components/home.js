/*
 * Require all third party libraries
 *
 * 1. `react` is required for `React.createClass`
 */
var React = require("react");

var Home = React.createClass({

    componentDidMount: function () {
        /*
         * Do nothing right now...
         * */
    },

    componentWillUnmount: function () {
        /*
         * Do nothing right now...
         * */
    },

    render: function () {
        return (
            <div>
                <span className="hello-react">
                    Hello, React!
                </span>
            </div>
        );
    },

});

module.exports = Home;
