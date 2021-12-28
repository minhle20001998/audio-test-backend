const exampleRoute = require('./exampleRoute');

function route(app) {
    app.use("/", exampleRoute);
}

module.exports = route;