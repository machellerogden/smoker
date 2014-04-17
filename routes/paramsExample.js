module.exports = function (req, res) {
    // reference `req.params` for URL embedded params
    res.json({
        name: req.params.name
    });
};
