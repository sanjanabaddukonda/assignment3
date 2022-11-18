var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', {
    title: "Home"
  });
});

/* GET home page. */
router.get('/index', function(req, res, next) {
  res.render('index', {
    title: "Home"
  });
});

router.get('/todolist', function(req, res, next) {
  res.render('todolist', { 
    title: 'todolist'
  });
});

module.exports = router;
