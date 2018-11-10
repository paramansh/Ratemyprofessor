const Professor = require('../models/Prof');
const User = require('../models/User');

exports.index = (req, res) => {
  res.render('prof', {
    title: 'Professor'
  });
};

exports.getProf = (req,res) => {
  profid = req.params.profid; // actually the email 
  Professor.findOne({id: profid}, (err, prof) => {
    if (err){console.log("Invalid Professor ID");}
    else{
      // console.log(prof.courses);
      // console.log(prof.rating.toFixed(1))
      if (!req.user) {
        res.render('prof', {
          title: 'Professor',
          profile: prof.profile,
          comments: prof.comments,
          profid: profid,
          ratings: prof.rating,
          has_rated: false,
        });
      }
      else {
        User.findById(req.user.id, (err, user) => {
          if (err) { 
            console.log("AUTH ERROR");
          }
          var pro = user.ratings.filter(function (pro) {
            return pro.id == profid;
          }).pop();
          has_rated = false;
          
          if (pro)
          {
            console.log("Already rated!");
            console.log(pro);
            res.render('prof', {
              title: 'Professor',
              profile: prof.profile,
              comments: prof.comments,
              profid: profid,
              ratings: prof.rating,
              has_rated: true,
              user_ratings: pro,
            });
          }
          else {
            res.render('prof', {
              title: 'Professor',
              profile: prof.profile,
              profid: profid,
              ratings: prof.rating,
              comments: prof.comments,
              has_rated: false, 
            });
          }          
        });
      }
    }
  });
}

exports.getRateProf = (req,res) => {
  profid = req.params.profid; // actually the email id
  const unknownUser = !(req.user);
  console.log(unknownUser);
  Professor.findOne({id: profid}, (err, prof) => {
    if (err){console.log("Invalid Professor ID");}
    else{
      if (!unknownUser) {
        User.findById(req.user.id, (err, user) => {
          if (err) { 
            console.log("AUTH ERROR");
          }
          var pro = user.ratings.filter(function (pro) {
            return pro.id == profid;
          }).pop();
          has_rated = false;
          // if (pro)
          if (pro)
          {
            console.log("Already rated!");
            res.redirect('/professor/' + profid);
          }
          else {
            res.render('profrate', {
              title: 'Professor',
              profile: prof.profile,
              unknownUser,
              });
          }          
        });
      } 
      else {
        res.render('profrate', {
        title: 'Professor',
        profile: prof.profile,
        unknownUser,
        });
      }
    }
  });
}

exports.postRateProf = (req,res) => {
  console.log("heeeeeeeeee")
  profid = req.params.profid; // actually the email id
  // req.assert('param1', 'param cannot be blank').len(4);
  Professor.findOne({id: profid}, (err, prof) => {
    if (err){console.log("Invalid Professor ID");}
    else{
      console.log(req.user);
      if (!req.user) {
        console.log("Should be logged In");
      }
      User.findById(req.user.id, (err, user) => {
        if (err) { 
          // return next(err);
          console.log("AUTH ERROR");
        }
        var pro = user.ratings.filter(function (pro) {
          return pro.id == profid;
        }).pop();
        if (pro)
        {
          console.log("Already in post rated!");
        }

        user.ratings.push({
          id: profid,
          param1: req.body.param1,
          param2: req.body.param2,
          param3: req.body.param3,
          param4: req.body.param4,
        });
        console.log(user);
        user.save((err) => {
          if (err) {
            console.log("insert error");
            return next(err);
          }
          // req.flash('success', { msg: 'Updated User ratings' });
        });
      });

      numRatings = prof.rating.numRatings;
      prof.rating.numRatings += 1;

      prof.rating.param1 = (prof.rating.param1 * numRatings + Number(req.body.param1))/(numRatings+1);
      prof.rating.param2 = (prof.rating.param2 * numRatings + Number(req.body.param2))/(numRatings+1);
      prof.rating.param3 = (prof.rating.param3 * numRatings + Number(req.body.param3))/(numRatings+1);
      prof.rating.param4 = (prof.rating.param4 * numRatings + Number(req.body.param4))/(numRatings+1);
      // prof.rating.param1 = 0;
      // prof.rating.param2 = 0;
      // prof.rating.param3 = 0;
      // prof.rating.param4 = 0;
      // prof.rating.numRatings = 0;
      
      if (req.body.message) {
        prof.comments.push(req.body.message);
      }
      console.log("comment check");
      prof.save(function (err, updatedProf) {
        if (err) console.log(err);
        else console.log(req.body.message);
      });
      res.redirect('/professor/'+profid);
    }
  });
}