let express = require('express');
let router = express.Router();

module.exports.displayHomePage = (req, res, next)=> {
    res.render('index', {
      title: "Home"
    });
  }

  module.exports.displayHomePage = (req, res, next)=> {
    res.render('todolist', {
      title: "To-do list"
    });
  }
