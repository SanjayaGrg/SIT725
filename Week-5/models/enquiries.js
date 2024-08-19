let client = require('../dbConnection');

let enquiryCollection = client.db().collection('Enquiries');

function postEnquiry(enquiry, callback) {
    enquiryCollection.insertOne(enquiry, callback);
}

function getAllEnquiries(callback) {
    enquiryCollection.find({}).toArray(callback);
}

module.exports = { postEnquiry, getAllEnquiries }