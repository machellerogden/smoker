module.exports = function (app, routes) {
    app.get('/', routes.index);
    app.get('/example', routes.queryExample);
    app.get('/example/:name', routes.paramsExample);
    app.get('/profile/user-summary/', routes.userSummary);
};
