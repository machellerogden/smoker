var restful = require('./restful');

module.exports = function (app, routes) {
    app.get('/', routes.index);
    restful.create(app, 'person', [ 'firstName', 'lastName' ]);
};
