var favicon = require('static-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    path = require('path');

module.exports = function (express, app) {
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'jade');
    app.use(favicon());
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded());
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(app.router);
};
