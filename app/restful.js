
module.exports = {
    create: function (app, namespace, options) {
        var rest = require('../routes/rest')(options);
        app.get('/' + namespace, rest.get);
        app.get('/' + namespace + '/:id', rest.getById);
        app.post('/' + namespace, rest.create);
        app.put('/' + namespace + '/:id', rest.update);
        app['delete']('/' + namespace + '/:id', rest.destroy);
    }
};
