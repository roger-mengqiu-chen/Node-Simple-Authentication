exports.getWelcome = (req, res, next) => {
  res.render('welcome', {
    pageTitle: 'Welcome',
    path: '/'
  });
}