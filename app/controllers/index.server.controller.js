exports.displayInfo = (req, res) => {
  var email = req.body.email;
  var password = req.body.password;
  var session = req.session;
  session.email = email;
  session.password = password;

  if (session.email && session.password) {
    res.redirect("/feedback");
  } else {
    // When someone tries to log in with incomplete credentials (Either email or password or both missing)
    res.render("index", {
      pageName: "Login",
      emailError: session.email ? null : "Please input email",
      passwordError: session.password ? null : "Please input password",
      storedEmail: session.email,
      storedPassword: session.password,
      imageURL: session.imageURL
    });
  }
};
