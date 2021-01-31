const express = require('express');

module.exports = () => {
    const app = express();

    // Set view engine and view folder
    app.set('views', './app/views');
    app.set('view engine', 'ejs');
    app.engine('html', require('ejs').renderFile);

    // Configure static file serving
    app.use(express.static('./public'))

    // Load index routing file
    require('../app/routes/index.server.routes.js')(app);

    // Return the instance of application
    return app;


};