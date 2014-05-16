
module.exports = {
    create: function (app, namespace, properties) {
        var rest = require('../routes/rest')(properties);
        app.get('/' + namespace, rest.get);
        app.get('/' + namespace + '/:id', rest.getById);
        app.post('/' + namespace, rest.create);
        app.put('/' + namespace + '/:id', rest.update);
        app['delete']('/' + namespace + '/:id', rest.destroy);
    }
};
