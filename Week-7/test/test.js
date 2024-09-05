const expect = require("chai").expect;
const { response } = require("express");
const request = require("request");

// get project list test cases
describe("Get the project lists from db", () => {
    const url = "http://localhost:3000/api/projects";
    it("Should return status 200 and give the results", (done) => {
        request(url, (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            done();
        })
    })

    it("Should returns an array of projects", (done) => {
        request(url, (error, response, body) => {
            body = JSON.parse(body);
            expect(body.data).to.be.an('array');
            done();
        })
    })
})

// post enquiry by users test cases
describe("Posting the enquiry by users", () => {
    const url = "http://localhost:3000/api/enquire";
    const data = {
        firstName: "Sanjaya",
        lastName: "Gurung",
        email: "abc@gmail.com",
        message: "This is just a test message to test the test cases."
    }
    it("Should return status 200 when submitted successfully", (done) => {
        request.post({
            url,
            json: true,
            body: data
        },
            (error, response, body) => {
                expect(response.statusCode).to.equal(200);
                done();
            })
    })
    it("Should return correct status code in the json format body", (done) => {
        request.post({
            url,
            json: true,
            body: data
        },
            (error, response, body) => {
                expect(body.statusCode).to.equal(200);
                done();
            })
    })
})

// post api of project test cases
describe("Adding the projects through admin", () => {
    const url = "http://localhost:3000/api/project";
    const projectData = {
        title: "Classibazaar",
        image: "sample.png",
        link: "http://google.com",
        description: "A simple e-commerce platform where you can access every products."
    }
    it("Should return status 200 when adding project successfully", (done) => {
        request.post({
            url,
            json: true,
            body: projectData
        },
            (error, response, body) => {
                expect(response.statusCode).to.equal(200);
                done();
            })
    })
    it("Should return correct status code in the json format body on success", (done) => {
        request.post({
            url,
            json: true,
            body: projectData
        },
            (error, response, body) => {
                expect(body.statusCode).to.equal(200);
                done();
            })
    })
})

// update project test cases
describe("Updating the projects through admin", () => {
    const url = "http://localhost:3000/api/project";
    const projectId = "66c2bfb3c20d6c1cd11cef5d"
    const updateProject = {
        title: "E-waste",
        image: "images/image/foocery.png",
        link: "http://google.com",
        description: "Updating the project description. It is going to be deployed a bit later."
    };
    it("Should return status 200 when updating a project", (done) => {
        request.put({
            url: `${url}/${projectId}`,
            json: true,
            body: updateProject
        },
            (error, response, body) => {
                expect(response.statusCode).to.equal(200);
                done();
            })
    })
    it("Should return correct status code value 200 in the body", (done) => {
        request.put({
            url: `${url}/${projectId}`,
            json: true,
            body: updateProject
        },
            (error, response, body) => {
                expect(body.statusCode).to.equal(200);
                done();
            })
    })
    it("Should return the status 500 internal server error for non existing data", (done) => {
        request.put({
            url: `${url}/654t45ggrtgrt`,
            json: true,
            body: updateProject
        },
            (error, response, body) => {
                expect(response.statusCode).to.equal(500);
                done();
            })
    })
})

// delete project test cases
describe("Deleting the projects through admin", () => {
    const url = "http://localhost:3000/api/project";
    const projectId = "66c2bfb3c20d6c1cd11cef5d"
    it("Should return status 200 when deleting a project", (done) => {
        request.delete({
            url: `${url}/${projectId}`,
            json: true
        },
            (error, response, body) => {
                expect(response.statusCode).to.equal(200);
                done();
            })
    })
    it("Should return correct status code value 200 in the body", (done) => {
        request.delete({
            url: `${url}/${projectId}`,
            json: true
        },
            (error, response, body) => {
                expect(body.statusCode).to.equal(200);
                done();
            })
    })
    it("Should return a success message", (done) => {
        request.delete({
            url: `${url}/${projectId}`,
            json: true
        },
            (error, response, body) => {
                expect(body.message).to.equal("Project Deleted Successfully");
                done();
            })
    })
    it("Should return the status 500 internal server error for non existing data", (done) => {
        request.delete({
            url: `${url}/654t45ggrtgrt`,
            json: true,
        },
            (error, response, body) => {
                expect(response.statusCode).to.equal(500);
                done();
            })
    })
})


// get enquiries test cases
describe("Get the enquiry lists from db", () => {
    const url = "http://localhost:3000/api/enquiries";
    it("Should return status 200 and give the enquire results", (done) => {
        request(url, (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            done();
        })
    })

    it("Should returns an array of enquiries", (done) => {
        request(url, (error, response, body) => {
            body = JSON.parse(body);
            expect(body.data).to.be.an('array');
            done();
        })
    })
})