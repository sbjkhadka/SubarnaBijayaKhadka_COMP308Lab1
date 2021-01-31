exports.displayInfo = (req, res) => {
var comments = req.body.yourcomments;
var session = req.session;
session.comments = comments;

var email = req.body.studentemail;
session.email = email;
console.log(`Comment: ${session.comments}`);

        res.render('last', {
        comments: comments, 
        email: email
    });
 
    
};