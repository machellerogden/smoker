module.exports = function (app, routes) {
    app.get('/', routes.index);
    app.get('/cars', routes.cars.get);
    app.get('/cars/:id', routes.cars.getById);
    app.post('/cars', routes.cars.create);
    app.put('/cars/:id', routes.cars.update);
    app['delete']('/cars/:id', routes.cars.destroy);
};
