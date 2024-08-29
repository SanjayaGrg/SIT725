let enquiryCollection = require('../models/enquiries');
let projectCollection = require('../models/projects');

const postEnquiry = (req, res) => {
    let enquiry = req.body;
    enquiryCollection.postEnquiry(enquiry, (err, result) => {
        if (!err) {
            res.json({ statusCode: 200, data: result, message: 'Enquiry Submitted Successfully' });
        } else {
            res.status(500).json({ statusCode: 500, message: "Internal Server Error" });
        }
    });
}

const getAllEnquiries = (req, res) => {
    enquiryCollection.getAllEnquiries((err, result) => {
        if (!err) {
            res.json({ statusCode: 200, data: result, message: 'Get all enquiries successful' });
        } else {
            res.status(500).json({ statusCode: 500, message: "Internal Server Error" });
        }
    });
}

const postProject = (req, res) => {
    let project = req.body;
    projectCollection.postProject(project, (err, result) => {
        if (!err) {
            res.json({ statusCode: 200, data: result, message: 'Project Submitted Successfully' });
        } else {
            res.status(500).json({ statusCode: 500, message: "Internal Server Error" });
        }
    });
}

const getAllProjects = (req, res) => {
    projectCollection.getAllProjects((err, result) => {
        if (!err) {
            res.json({ statusCode: 200, data: result, message: 'Get all projects successful' });
        } else {
            res.status(500).json({ statusCode: 500, message: "Internal Server Error" });
        }
    });
}

const updateProject = (req, res) => {
    let projectId = req.params.id;
    let updatedProject = req.body;
    projectCollection.updateProject(projectId, updatedProject, (err, result) => {
        if (!err) {
            res.json({ statusCode: 200, data: result, message: 'Project Updated Successfully' });
        } else {
            res.status(500).json({ statusCode: 500, message: "Internal Server Error" });
        }
    });
}

const deleteProject = (req, res) => {
    let projectId = req.params.id;
    projectCollection.deleteProject(projectId, (err, result) => {
        if (!err) {
            res.json({ statusCode: 200, message: 'Project Deleted Successfully' });
        } else {
            res.status(500).json({ statusCode: 500, message: "Internal Server Error" });
        }
    });
}

// const deleteProject = (req, res) => {
//     let project = req.body;
//     enquiryCollection.deleteProject(project, (err, result) => {
//         if (!err) {
//             res.json({ statusCode: 200, data: result, message: 'success' });
//         }
//     });
// }

module.exports = { postEnquiry, getAllEnquiries, postProject, getAllProjects, updateProject, deleteProject }