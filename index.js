var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Home'
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

router.get('/add', function(req, res, next) {
  res.render('add', { 
    title: 'add'
  });
});

module.exports = router;
