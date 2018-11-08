const Professor = require('../models/Prof');

exports.index = (req, res) => {
  res.render('prof', {
    title: 'Professor'
  });
};

exports.getProf = (req,res) => {
  profid = req.params.profid; // actually the email id

  Professor.findOne({id: profid}, (err, prof) => {
    if (err){console.log("Invalid Professor ID");}
    else{
      console.log(prof);
      // console.log(prof.courses);
      res.render('prof', {
        title: 'Professor',
        profile: prof.profile,
        // comments: prof.comments 
      });
    }
  });
  // console.log(profname+ " why") 
  // const prof = new Professor({
  //   id: profname,
  //   profile: {
  //     name: profname,
  //     email: profname + "@iitk.ac",
  // },
  // rating: {
  //     param1: 1,
  //     param2: 2,
  //     param3: 3,
  //     param4: 4,
  // }
  // });
  
  // prof.save(function(err, Professor){
  //   if (err)
  //     console.log(err);
  //   else
  //     console.log("Successfully added");
  // });
  // res.render('prof', {
  //   title: 'Professor',
  //   profname: profname
  // });
}