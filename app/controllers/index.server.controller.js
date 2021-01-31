exports.displayInfo = (req, res) => {
    var email = req.body.email;
    var session = req.session;
    session.email = email;
    console.log(`Logged in user: ${session.email}`);

    res.render('display', {
        email: email
    });
};