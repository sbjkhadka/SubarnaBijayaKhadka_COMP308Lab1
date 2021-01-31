module.exports = (app) => {
    // load controller so that you can use the methods according to the routes
    const display = require('../controllers/display.server.controller');

    // handle routing for get request in root
    // When someone tries to access this route with GET, he/she will be redirected to root
    app.get('/last', (req, res) => {
        res.redirect('/');   
    });

    // In case of POST request (When user tries to log in with credentials)
    app.post('/last', (req, res)=>{
        display.displayInfo(req, res);
    });
}