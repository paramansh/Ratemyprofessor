const Professor = require('../models/Prof');

exports.index = (req, res) => {
  res.render('prof', {
    title: 'Professor'
  });
};

exports.getProf = (req,res) => {
  profid = req.params.profid; // actually the email 
  console.log("ccc");
  console.log(profid);
  Professor.findOne({id: profid}, (err, prof) => {
    if (err){console.log("Invalid Professor ID");}
    else{
      console.log(prof);
      // console.log(prof.courses);
      res.render('prof', {
        title: 'Professor',
        profile: prof.profile,
        comments: prof.comments 
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

exports.getRateProf = (req,res) => {
  profid = req.params.profid; // actually the email id
  const unknownUser = !(req.user);
  console.log(unknownUser);
  Professor.findOne({id: profid}, (err, prof) => {
    if (err){console.log("Invalid Professor ID");}
    else{
      console.log("rate");
      res.render('profrate', {
        title: 'Professor',
        profile: prof.profile,
        unknownUser,
      });
    }
  });
}

exports.postRateProf = (req,res) => {
  profid = req.params.profid; // actually the email id
  // req.assert('param1', 'param cannot be blank').len(4);
  Professor.findOne({id: profid}, (err, prof) => {
    if (err){console.log("Invalid Professor ID");}
    else{
      console.log(req.body);
      numRatings = prof.rating.numRatings;
      prof.rating.numRatings += 1;

      console.log(prof.rating.param1 * numRatings + req.body.param1);
      prof.rating.param1 = (prof.rating.param1 * numRatings + Number(req.body.param1))/(numRatings+1);
      prof.rating.param2 = (prof.rating.param2 * numRatings + Number(req.body.param2))/(numRatings+1);
      prof.rating.param3 = (prof.rating.param3 * numRatings + Number(req.body.param3))/(numRatings+1);
      prof.rating.param4 = (prof.rating.param4 * numRatings + Number(req.body.param4))/(numRatings+1);
      // prof.rating.param1 = 0;
      // prof.rating.param2 = 0;
      // prof.rating.param3 = 0;
      // prof.rating.param4 = 0;
      // prof.rating.numRatings = 0;
      prof.comments.push("rated by another");
      console.log(prof);
      prof.save(function (err, updatedProf) {
        if (err) console.log(err);
        else console.log("update successful");
      });
      res.render('profrate', {
        title: 'Professor',
        profile: prof.profile,
      });
    }
  });
}