
module.exports = function (app, routes) {
    var restful = require('./lib/restful')(app);
    app.get('/', routes.index);
    restful.create('person', { firstName: [ 'Bob', 'Sue', 'John', 'Sally' ], lastName: [ 'Smith', 'Jones', 'Brown', 'White' ] });
};
