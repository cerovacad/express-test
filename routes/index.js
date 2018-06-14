const express = require('express')
const router = express.Router()

const Contact = require('../models/Contact')


router.get('/',(req, res) => {
    Contact.fetchAll((err, data) => {
        if(err){
            console.log('Custom err 1', err)
        }else{
            res.send(data)
        }
    });
})
//INSERT PHONE
router.post('/',(req, res) => {
    Contact.insert(req.body, (err, data) => {
        if(err){
            console.log('Custom err 2', err)
        }else{
            res.send(data)
        }
    })
})
// GET ONE PHONE
router.get('/:id', function (req, res) {
    Contact.findById(req.params.id, (err, data) => {
        if(err){
            console.log('Custom err 3', err)
        }else{
            res.send(data)
        }
    }) 
})
// UPDATE PHONE
router.put('/:id', function (req, res) {
    Contact.update(req.params.id, req.body, (err, data) => {
        if(err){
            console.log('Custom err 4', err)
        }else{
            res.send(data)
        }
    })
})
// DELETE PHONE
router.delete('/:id', function (req, res) {
    Contact.delete(req.params.id, (err, data) => {
        if(err){
            console.log('Custom err 5', err)
        }else{
            res.send(data)
        }
    })
})

module.exports = router;