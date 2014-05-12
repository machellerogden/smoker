var cars, get, getById, create, update, destroy;

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
        res.json(cars[0]);
    },

    create: function (req, res) {
        console.log('req.body: ', req.body);
        var car = {
            id: cars.length,
            make: req.body.make,
            model: req.body.model
        };
        cars.push(car);
        res.json(car);
    },

    update: function (req, res) {
        var id = parseInt(req.params.id, 10);
        cars[id] = {
            id: id,
            make: req.body.make,
            model: req.body.model
        };
        res.json(cars[id]);
    },

    destroy: function (req, res) {
        var id = req.params.id;
        cars.splice(id, id + 1);
        res.json({});
    }
};
