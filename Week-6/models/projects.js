let client = require('../dbConnection');
const { ObjectId } = require('mongodb')

let projectCollection = client.db().collection('Projects');

function postProject(project, callback) {
    projectCollection.insertOne(project, callback);
}

function getAllProjects(callback) {
    projectCollection.find({}).toArray(callback);
}

function updateProject(projectId, updatedProject, callback) {
    projectCollection.updateOne(
        { _id: new ObjectId(projectId) },
        { $set: updatedProject },
        callback
    );
}

function deleteProject(projectId, callback) {
    projectCollection.deleteOne(
        { _id: new ObjectId(projectId) },
        callback
    );
}


module.exports = { postProject, getAllProjects, updateProject, deleteProject }