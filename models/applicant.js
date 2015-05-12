var mongoose = require('mongoose');

var applicantSchema = mongoose.Schema({
    name: String,
    skills: [String]
});

var Applicant = mongoose.model('applicant', applicantSchema);

module.exports = Applicant;