const Professor = require('../models/Prof');

exports.index = (req, res) => {
  // Professor
  //   .find()
  //   .max('rating.numRatings')
  //   .limit(3)
  //   .exec(function (err, member) {
  //     console.log(member);
  //   })

  Professor
    .find()
    .exec(function (err, members) {
      // console.log(members);
      function is_valid_rate(member) {
        return member.rating.numRatings > 3;
      }
      members = members.filter(is_valid_rate);
      // console.log(members);
      prof1 = members[0];
      prof2 = members[0];
      prof3 = members[0];
      prof4 = members[0];
      for (i=0; i < members.length; i++)
      {
        // console.log(members[i].rating.param1);
        // console.log(prof1.rating.param1);
        if (prof1.rating.param1 < members[i].rating.param1)
         {
           prof1 = members[i];
         }
        if (prof2.rating.param2 < members[i].rating.param2)
         {
           prof2 = members[i];
         }
        if (prof3.rating.param3 < members[i].rating.param3)
         {
           prof3 = members[i];
         }
        if (prof4.rating.param4 < members[i].rating.param4)
         {
           prof4 = members[i];
         }
      }
      res.render('stats', {
        title: 'Statistics',
        prof1: prof1,
        prof2: prof2,
        prof3: prof3
      });
      // console.log(prof1);
      // console.log(prof2);
      // console.log(prof3);
      // console.log(prof4);
    })

  
};