const express = require('express');
const router = express.Router();

router.get('/index_customer', (req,res) =>{
    res.render('index_customer.pug')
});


router.get('/customer/room_service', (req,res) =>{
    res.render('room_service.pug')
});


router.get('/customer/restaurant_service', (req,res) =>{
    res.render('restaurant_service.pug')
});

module.exports = router;