const path = require('path');

function main(req, res) {
    res.render('main');
}

function uploadPage(req, res) {
  res.render('upload');
}

module.exports = {
  main,
  uploadPage
};