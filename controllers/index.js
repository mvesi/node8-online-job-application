var Applicant = require('../models/applicant.js');


 indexController = {
	index: function(req, res) {
		res.render('index');
	},
    applicant: function(req, res) {
        // var applicantData = req.body;
        // var skills = applicantData.skills.split(',').map(function(skill){
        //     return skill.trim();
        // });

        // var applicant = new Applicant({
        //     name: applicantData.name,
        //     skills: skills,
        // });

        // applicant.save(function(err, results){
        //     console.log(results);
        //     // res.render('success');
        // });

        Applicant.find({}, function(err, documents){

          // 2) Call the render method and forward
          //    the list of cats on to jade
            res.render('applicant', {
            applicants: documents
          });

        });
        

    },
    success: function(req, res) {
        var applicantData = req.body;
        var skills = applicantData.skills.split(',').map(function(skill){
            return skill.trim();
        });

        var applicant = new Applicant({
            name: applicantData.name,
            skills: skills,
        });

        applicant.save(function(err, results){
            console.log(results);
            // res.render('success');
        });

        res.render('success');
    },
    applicantDelete: function(req, res){
        Applicant.findByIdAndRemove(req.params.applicantId, function(err, results){
        res.redirect('/applicant');
      });
    }
};

module.exports = indexController;