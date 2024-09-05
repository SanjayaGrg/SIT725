let express = require('express');
let router = express.Router();
let controller = require('../controllers/controller');

router.post('/enquire', function (req, res) {
    controller.postEnquiry(req, res);
});

router.get('/enquiries', (req, res) => {
    controller.getAllEnquiries(req, res);
});

router.post('/project', function (req, res) {
    controller.postProject(req, res);
});

router.get('/projects', (req, res) => {
    controller.getAllProjects(req, res);
});

// router.delete('/', (req, res) => {
//     controller.getAllEnquiries(req, res);
// });

router.put('/project/:id', (req, res) => {
    controller.updateProject(req, res);
});

router.delete('/project/:id', (req, res) => {
    controller.deleteProject(req, res);
});

module.exports = router;