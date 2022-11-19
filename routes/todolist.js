let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const { $where } = require('../../server/models/todolist');
const ToDoList = require('../../server/models/todolist');

//connect with book model

let list = require('../../server/models/todolist');


router.get('/',(req,res,next)=>{
  list.find((err,ToDoList)=>{
    if(err)
    {
      return console.error(err);
    }
    else
    {
      //res.render('todolist',{title:'To do List', });
      res.render('todolist',{title:'To-do list', ToDoList: ToDoList})
    }
  });
});

/* add operation */
router.get('/add',(req,res,next)=>{
  res.render('add',{title:'Add Book'})

});

/* post route for processing the add page*/
router.post('/add',(req,res,next)=>{
  let newtask = list({
    "task":req.body.task,
    "priority":req.body.priority,
    "due":req.body.due
  })

  ToDoList.create(newtask,(err,ToDoList)=>{
    if(err)
    {
        console.log(err);
        res.end(err);
    }
    else
    {
        res.redirect('/todolist');
    }
  })

});


router.get('/edit:id',(req,res,next)=>{
  let id = req.params.id;
  list.findById(id,(err,taskToEdit)=>{
    if(err)
    {
        console.log(err);
        res.end(err);
    }
    else
    {
        res.render('edit',{title:'Edit task', list:taskToEdit});
    }

  });

});

/* edit operation */
router.post('/edit:id',(req,res,next)=>{
  let id=req.params.id;
  let updatetask = list({
    "_id": id,
    "task":task,
    "priority":priority,
    "due":due
  });
  list.updateOne({_id:id},updatetask,(err)=>{
    if(err)
    {
        console.log(err);
        res.end(err);
    }
    else
    {
        res.redirect('/todolist');
    }
  });
});

/* delete operation */

router.get('/delete/:id',(req,res,next)=>{
  let id =req.params.id;
  list.deleteOne({_id:id},(err)=>{
    if(err)
    {
        console.log(err);
        res.end(err);
    }
    else
    {
        res.redirect('/todolist');
    }
  });

});

router.get('/delete:id',(req,res,next)=>{

});

module.exports=router;