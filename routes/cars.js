var _, cars, get, getById, create, update, destroy;

_ = require('underscore-node');

cars = [
    { listingId: 0, make: 'Tesla', model: 'Model S' },
    { listingId: 1, make: 'Ford', model: 'F150' },
    { listingId: 2, make: 'Ford', model: 'Edge' },
    { listingId: 3, make: 'Hyundai', model: 'Sonata' },
    { listingId: 4, make: 'Honda', model: 'Civic' },
    { listingId: 5, make: 'Kia', model: 'Sorento' },
    { listingId: 6, make: 'Geo', model: 'Metro' },
    { listingId: 7, make: 'Lamborghini', model: 'Gallardo' }
];

module.exports = {

    get: function (req, res) {
        res.json(cars);
    },

    getById: function (req, res) {
        res.json(_.findWhere(cars, { listingId: req.params.listingId }));
    },

    create: function (req, res) {
        var car = {
            listingId: cars.length,
            make: req.body.make,
            model: req.body.model
        };
        cars.push(car);
        res.json(car);
    },

    update: function (req, res) {
        var id, result;
        id = parseInt(req.params.listingId, 10);
        _.each(cars, function (car, index, list) {
            if (car.listingId === id) {
                list[index] = {
                    listingId: listingId,
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
            if (car.listingId === id) {
                match = index;
            }
        });
        cars.splice(match, 1);
        res.json(cars);
    }
};
