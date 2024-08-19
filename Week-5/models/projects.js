let client = require('../dbConnection');

let projectCollection = client.db().collection('Projects');

function postProject(project, callback) {
    projectCollection.insertOne(project, callback);
}

function getAllProjects(callback) {
    projectCollection.find({}).toArray(callback);
}



module.exports = { postProject, getAllProjects }