exports.displayInfo = (req, res) => {
  var comments = req.body.yourcomments;
  var session = req.session;
  session.comments = comments;

  var topic = req.body.favtopic;
  session.topic = topic;

  var assignment = req.body.favassignment;
  session.assignment = assignment;
  console.log(`Comment: ${session.comments}`);

  res.render("last", {
    comments: comments,
    email: session.email,
    topic: topic,
    assignment: assignment,
    imageURL: session.imageURL,
    pageName: 'Thanks!'
  });
};
