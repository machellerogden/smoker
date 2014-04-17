module.exports = function (req, res) {
    // reference `req.query` for query string params
    res.json({
        foo: req.query.foo || 'baz',
        bar: req.query.bar || 'qux'
    });
};
