const Professor = require('../models/Prof');

exports.index = (req, res) => {
  res.render('prof', {
    title: 'Professor'
  });
};

exports.getProf = (req,res) => {
  profname = req.params.profname;
  const prof = new Professor({
    age: 25,
    name: profname,
    nationality: 'India'
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