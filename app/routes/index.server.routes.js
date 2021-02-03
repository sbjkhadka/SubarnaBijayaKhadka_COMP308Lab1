const session = require("express-session");
const noback = require("./noback");
const helper = require("./helper");

module.exports = (app) => {
  // load controller so that you can use the methods according to the routes
  const index = require("../controllers/index.server.controller");

  // handle routing for get request in root
  app.get("/", noback, (req, res) => {
    req.session.destroy(); // Destroy existing session everytime user hits the login page
    res.redirect("/login"); // User is redirected to new route to create a new session
  });

  app.get("/login", noback, (req, res) => {
    const session = req.session;
    const imageIndex = Math.floor(Math.random() * 5); // Randomly taking one of the images for the current session
    session.imageURL = helper.getImageURL(imageIndex);
    // display login page
    res.render("index", {
      pageName: "Login",
      emailError: "",
      passwordError: "",
      storedEmail: null,
      storedPassword: null,
      imageURL: session.imageURL,
    });
  });

  // In case of POST request (When user tries to log in with credentials)
  app.post("/login", noback, (req, res) => {
    index.displayInfo(req, res);
  });
};
