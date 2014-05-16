/* jshint  loopfunc: true */
var _, uuid, items, get, getById, create, update, destroy;

_ = require('underscore-node');
uuid = require('node-uuid');

module.exports = function (properties) {
    var items, values, i;
    items = [];
    values = [ 'foo', 'bar', 'baz', 'qux', 'quux', 'corge', 'grault', 'garply', 'waldo', 'fred', 'plugh', 'xyzzy', 'thud' ];
    for (i = 0; i < 10; i++) {
        items[i] = {};
        items[i].id = uuid.v1();
        _.each(properties, function (property) {
            items[i][property] = values[Math.floor(Math.random() * values.length)];
        });
    }
    return {

        get: function (req, res) {
            res.json(items);
        },

        getById: function (req, res) {
            var id = req.params.id;
            res.json(_.findWhere(items, { id: id }) || {});
        },

        create: function (req, res) {
            var item = items[uuid.v1()];
            items.push(item);
            res.json(item);
        },

        update: function (req, res) {
            var id, result;
            id = req.params.id;
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
            id = req.params.id;
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
