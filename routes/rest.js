/* jshint  loopfunc: true */
var _, items, get, getById, create, update, destroy;

_ = require('underscore-node');

module.exports = function (properties) {
    var items, values, i;
    items = [];
    values = [ 'foo', 'bar', 'baz', 'qux', 'xyzzy' ];
    for (i = 0; i < 10; i++) {
        items[i] = {};
        items[i].id = (i + 1) * 11 * Math.ceil(Math.random() * 10);
        _.each(properties, function (property) {
            items[i][property] = values[Math.floor(Math.random() * properties.length)];
        });
    }
    return {

        get: function (req, res) {
            res.json(items);
        },

        getById: function (req, res) {
            var id = parseInt(req.params.id, 10);
            res.json(_.findWhere(items, { id: id }));
        },

        create: function (req, res) {
            var item = items[Math.floor(Math.random() * properties.length)];
            items.push(item);
            res.json(item);
        },

        update: function (req, res) {
            var id, result;
            id = parseInt(req.params.id, 10);
            _.each(items, function (item, index, list) {
                if (item.id === id) {
                    list[index].id = id;
                    _.each(properties, function (property) {
                        list[index][property] = req.body[property];
                    });
                    result = list[index];
                }
            });
            res.json(result);
        },

        destroy: function (req, res) {
            var id, match;
            id = parseInt(req.params.id, 10);
            _.each(items, function (item, index, list) {
                if (item.id === id) {
                    match = index;
                }
            });
            items.splice(match, 1);
            res.json(items);
        }
    };
};
