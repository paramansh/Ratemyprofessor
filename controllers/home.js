/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('home', {
    title: 'Home'
  });
};
exports.about = (req, res) => {
  res.render('about', {
    title: 'About'
  });
};
