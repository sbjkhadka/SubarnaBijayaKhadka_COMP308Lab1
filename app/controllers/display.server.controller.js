exports.displayInfo = (req, res) => {
var comments = req.body.yourcomments;
var session = req.session;
session.comments = comments;

var email = req.body.studentemail;
session.email = email;

var topic = req.body.favtopic;
session.topic = topic;

var assignment = req.body.favassignment;
session.assignment = assignment;
console.log(`Comment: ${session.comments}`);

        res.render('last', {
        comments: comments, 
        email: email,
        topic: topic,
        assignment: assignment
    });
 
    
};