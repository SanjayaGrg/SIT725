let express = require('express');
let app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb://localhost:27017";
const uri = "mongodb+srv://sanjaygurun155:PycKuH15bxaVyZVD@cluster0.u66wn0h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
let port = process.env.port || 3000;
let projectCollection;
let enquiryCollection;

app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});


async function runDBConnection() {
    try {
        await client.connect();
        projectCollection = client.db().collection('Projects');
        enquiryCollection = client.db().collection('Enquiries');
        console.log("Connected to MongoDB");
    } catch (ex) {
        console.error(ex);
    }
}

app.get('/', function (req, res) {
    res.render('index.html');
});

//post projects
app.post('/api/project', (req, res) => {
    let project = req.body;
    postProjects(project, (err, result) => {
        if (!err) {
            res.json({ statusCode: 201, data: result, message: 'Project Submitted Successfully' });
        } else {
            res.status(500).json({ statusCode: 500, message: "Internal Server Error" });
        }
    });
});
//get projects
app.get('/api/projects', (req, res) => {
    getProjects((err, result) => {
        if (!err) {
            res.json({ statusCode: 200, data: result, message: 'Get all projects successful' });
        } else {
            res.status(500).json({ statusCode: 500, message: "Internal Server Error" });
        }
    });
});

//post enquiries
app.post('/api/enquire', (req, res) => {
    let enquiry = req.body;
    postEnquiry(enquiry, (err, result) => {
        if (!err) {
            res.json({ statusCode: 201, data: result, message: 'Enquiry Submitted Successfully' });
        } else {
            res.status(500).json({ statusCode: 500, message: "Internal Server Error" });
        }
    });
});

//get Enquiries
app.get('/api/enquiries', (req, res) => {
    getEnquiries((err, result) => {
        if (!err) {
            res.json({ statusCode: 200, data: result, message: 'Get all enquiries successful' });
        } else {
            res.status(500).json({ statusCode: 500, message: "Internal Server Error" });
        }
    });
});

function postProjects(project, callback) {
    projectCollection.insertOne(project, callback);
}

function getProjects(callback) {
    projectCollection.find({}).toArray(callback);
}

function postEnquiry(enquiry, callback) {
    enquiryCollection.insertOne(enquiry, callback);
}

function getEnquiries(callback) {
    enquiryCollection.find({}).toArray(callback);
}

app.listen(port, () => {
    console.log('express server started');
    runDBConnection();
});