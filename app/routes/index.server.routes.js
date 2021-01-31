module.exports = (app) => {
    // load controller so that you can use the methods according to the routes
    const index = require('../controllers/index.server.controller');

    // handle routing for get request in root
    app.get('/', (req, res) => {
        // display login page
        res.render('index', {});
    });

    // In case of POST request (When user tries to log in with credentials)
    app.post('/', (req, res)=>{
        index.displayInfo(req, res);
    });
}