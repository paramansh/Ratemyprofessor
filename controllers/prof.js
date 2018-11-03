const Professor = require('../models/Prof');

exports.index = (req, res) => {
  res.render('prof', {
    title: 'Professor'
  });
};

exports.getProf = (req,res) => {
  profname = req.params.profname; // actually the email id
  Professor.find({id: profname}, (err, user) => {
    if (err){console.log("Invalid Professor ID");}
    else{
      console.log(user);
      res.render('prof', {
        title: 'Professor',
        profname: profname
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