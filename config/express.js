const express = require('express');
const config = require('./config');
const morgan = require('morgan');
const compress = require('compression');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');


module.exports = () => {
    // Create a new express application instance
    const app = express();

    // Use NODE_ENV variable to activate morgan logger or compress middleware
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    } else if (process.env.NODE_ENV === 'development') {
        app.use(compress());
    }

    // Use body parser and method override middle ware functions
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(methodOverride());

    // Configure session middleware
    app.use(session({
        saveUninitialized: true, 
        resave: true, 
        secret: config.sessionSecret
    }));


    // Set view engine and view folder
    app.set('views', './app/views');
    app.set('view engine', 'ejs');
    app.engine('html', require('ejs').renderFile);

    // Configure static file serving __dirname + '/../app'
    app.use(express.static('./public'))
    

    // Load index routing file
    require('../app/routes/index.server.routes.js')(app);
    require('../app/routes/display.server.routes.js')(app);

    // Return the instance of application
    return app;


};