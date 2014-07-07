
module.exports = function (app, routes) {
    var restful = require('./lib/restful')(app);
    app.get('/', routes.index);

    /**
     * EXAMPLES
     */

    // Create RESTful route ("animal") with single property ("type"), random values will be assigned.
    restful.create('animal', 'type');

    // Create RESTful route ("car") with multiple properties ("make", "model", "year"), random values will be assigned.
    restful.create('car', [ 'make', 'model', 'year' ]);

    // Create RESTful route ("person") with multiple properties and corresponding sets of possible values.
    restful.create('person', { firstName: [ 'Bob', 'Sue', 'John', 'Sally' ], lastName: [ 'Smith', 'Jones', 'Brown', 'White' ] });

};
