exports.index = function (req, res) {
    res.render('index', { title: 'Smoker' });
};

exports.queryExample = require('./queryExample');
exports.paramsExample = require('./paramsExample');
exports.userSummary = require('./userSummary');
exports.logging = require('./logging');
