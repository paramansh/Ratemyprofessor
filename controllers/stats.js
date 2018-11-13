const Professor = require('../models/Prof');

exports.index = (req, res) => {
  // Professor
  //   .find()
  //   .max('rating.numRatings')
  //   .limit(3)
  //   .exec(function (err, member) {
  //     console.log(member);
  //   })

  // Professor
  //   .find()
  //   .exec(function (err, member) {
  //     console.log(member);
  //   })

  res.render('stats', {
    title: 'Statistics'
  });
};