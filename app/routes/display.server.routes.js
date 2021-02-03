const session = require("express-session");
const noback = require("./noback");

module.exports = (app) => {
  // load controller so that you can use the methods according to the routes
  const display = require("../controllers/display.server.controller");

  // handle routing for get request in root
  // When someone tries to access this route with GET, he/she will be redirected to root
  app.get("/last", noback, (req, res) => {
    req.session.destroy();
    res.redirect("/");
  });

  // In case of POST request (When user tries to log in with credentials)
  app.post("/last", noback, (req, res) => {
    if (req.session.email && req.session.password) {
      display.displayInfo(req, res);
    } else {
      res.redirect("/");
    }
  });

  app.get("/feedback", noback, (req, res) => {
    if (req.session.email && req.session.password) {
      // When there is a valid session parameters
      res.render("display", {
        email: req.session.email,
        imageURL: req.session.imageURL,
        pageName: 'Feedback'
      });
    } else {
      // when someone directly hits http://localhost:3000/feedback
      res.redirect("/");
    }
  });
};
