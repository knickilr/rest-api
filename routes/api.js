const express = require('express');
const router = express.Router();
const student = require('../schema/student')



router.get('/students', function(req, res){
    // student.find().then(function(students){
    //     res.send(students)
    // })
    res.send('This is from get')
})

router.post('/students', function(req, res){
    student.create(req.body).then(function(students){
        res.send(students)
    })
    // res.send('this is from post')
})

router.put('/students/:id', function(req, res){
    student.findByIdAndUpdate({_id:req.params.id}, req.body).then(function(){
        student.findOne({_id:req.params.id}).then(function(students){
            res.send(students)
        })
    })
    // res.send('this is from put')
})

router.delete('/students/:id', function(req, res){
    student.findByIdAndDelete({_id:req.params.id}).then(function(students){
        res.send(students)
    })
    // res.send('this is from delete')
})


module.exports = router;