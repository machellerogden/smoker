module.exports = function (app, routes) {
    app.get('/', routes.index);
    app.get('/example', routes.queryExample);
    app.get('/example/:name', routes.paramsExample);
};
