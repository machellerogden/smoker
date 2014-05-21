
module.exports = function (app) {
    return {
        create: function (namespace, options) {
            var router = require('./router')(options);
            app.get('/' + namespace, router.get);
            app.get('/' + namespace + '/:id', router.getById);
            app.post('/' + namespace, router.create);
            app.put('/' + namespace + '/:id', router.update);
            app['delete']('/' + namespace + '/:id', router.destroy);
        }
    }
};
