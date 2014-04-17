module.exports = function (app, routes) {
    app.get('/', routes.index);
    app.get('/example', function (req, res) {
        // reference `req.query` for query string params
        res.json({
            foo: req.query.foo || 'baz',
            bar: req.query.bar || 'qux'
        });
    });
    app.get('/example/:name', function (req, res) {
        // reference `req.params` for URL embedded params
        res.json({
            name: req.params.name
        });
    });
};
