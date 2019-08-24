const express = require('express');
const router = express.Router();

router.get('/',(req,res) =>{
    res.render('index.pug')
});


router.get('/articles/add',(req,res) =>{
    res.render('add_article.pug')
});


router.get('/users/register', (req,res) =>{
    res.render('register.pug')
});


router.get('/users/login', (req,res) =>{
    res.render('login.pug')
});


module.exports = router;