var Project = require('../models/project');


// Create endpoint /api/post for POSTS
exports.postProjects = function(req, res) {
  // Create a new instance of the post model
  var project = new Project();

  // Set the post properties that came from the POST data
  project.title = req.body.title;
  project.url = req.body.url;
  project.description = req.body.description;

  // Save the post and check for errors
  project.save(function(err) {
    if (err)
      res.send(err);
      res.json({ message: 'Post added to the db!', data: project });
  });
};


// Create endpoint /api/portfolio for GET
exports.getProjects = function(req, res) {
  // Use the Beer model to find all post
  Project.find(function(err, project) {
    if (err)
      res.send(err);
      res.json(project);
      console.log(project);
  });
};


// Create endpoint /api/portfolio/:project_id for GET
exports.getProject = function(req, res) {
  console.log(req.params)
  // Use the Beer model to find a specific beer
  Project.findById(req.params.project_id, function(err, data) {
    if (err)
    res.send(err);
    res.json(data);
  });
};


// Create endpoint /api/portfolio/:project_id for PUT
exports.putProject = function(req, res) {
  // Use the Project model to find a specific post
  Project.findById(req.params.project_id, function(err, project) {
    if (err)
      res.send(err);

    // Update the existing beer description
    project.description = req.body.description;

    // Save the beer and check for errors
    project.save(function(err) {
      if (err)
        res.send(err);
        res.json(project);
    });
  });
};


// Create endpoint /api/project/:project_id for DELETE
exports.deleteProject = function(req, res) {
  // Use the Beer model to find a specific beer and remove it
  Project.findByIdAndRemove(req.params.project_id, function(err) {
    if (err)
      res.send(err);
    res.json({ message: 'Project removed from the locker!' });
  });
};
