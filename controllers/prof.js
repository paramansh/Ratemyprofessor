const Professor = require('../models/Prof');

exports.index = (req, res) => {
  res.render('prof', {
    title: 'Professor'
  });
};

exports.getProf = (req,res) => {
  profname = req.params.profname;
  const prof = new Professor({
    profile: {
      name: profname,
      email: profname + "@iitk.ac.in",
  },
  rating: {
      param1: 1,
      param2: 2,
      param3: 3,
      param4: 4,
  }
  });
  
  prof.save(function(err, Professor){
    if (err)
      console.log(err);
    else
      console.log("Successfully added");
  });
  res.render('prof', {
    title: 'Professor',
    profname: profname
  });
}