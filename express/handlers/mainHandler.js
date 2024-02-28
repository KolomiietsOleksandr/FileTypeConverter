const path = require('path');

function main(req, res) {
    res.render('main');
}

function uploadPage(req, res) {
  res.render('upload');
}

function errorP(req, res) {
  res.render('errorPage');
}

module.exports = {
  main,
  uploadPage,
  errorP,
};