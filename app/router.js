module.exports = function (app, routes) {
    app.get('/', routes.index);
    app.get('/cars', routes.cars.get);
    app.get('/cars/:listingId', routes.cars.getById);
    app.post('/cars', routes.cars.create);
    app.put('/cars/:listingId', routes.cars.update);
    app['delete']('/cars/:listingId', routes.cars.destroy);
};
