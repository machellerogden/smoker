var _, cars, get, getById, create, update, destroy;

_ = require('underscore-node');

cars = [
    {
        id: 0,
        make: 'Honda',
        model: 'Accord'
    }
];

module.exports = {

    get: function (req, res) {
        res.json(cars);
    },

    getById: function (req, res) {
        res.json(_.findWhere(cars, { id: req.params.id }));
    },

    create: function (req, res) {
        var car = {
            id: cars.length,
            make: req.body.make,
            model: req.body.model
        };
        cars.push(car);
        res.json(car);
    },

    update: function (req, res) {
        var id, result;
        id = parseInt(req.params.id, 10);
        _.each(cars, function (car, index, list) {
            if (car.id === id) {
                list[index] = {
                    id: id,
                    make: req.body.make,
                    model: req.body.model
                };
                result = list[index];
            }
        });
        res.json(result);
    },

    destroy: function (req, res) {
        var id, match;
        id = parseInt(req.params.id, 10);
        _.each(cars, function (car, index, list) {
            if (car.id === id) {
                match = id;
            }
        });
        cars.splice(match, match + 1);
        res.json({});
    }
};
