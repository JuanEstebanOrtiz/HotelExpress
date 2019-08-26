const express = require('express');
const router = express.Router();

router.get('/employer', (req,res) =>{
    res.render('login_employer.pug')
})

router.get('/employer/index_employer', (req,res) =>{
    res.render('index_employer.pug')
});

router.get('/employer/table_employer_customer', (req,res) =>{
    res.render('table_employer_customer.pug')
});

module.exports = router;