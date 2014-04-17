module.exports = function (req, res) {
    res.json({
        "favorites": {
            "cars": 2,
            "ads": 2,
            "searches": 0
        },
        "email": "",
        "firstName": "",
        "lastName": "",
        "accessType":"SSAANO",
        "firstTimeUser": true
    });
};
