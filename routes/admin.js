const express = require('express');
const router = express.Router();

router.get('/admin', (req,res) =>{
    res.render('login_admin.pug')
});


router.get('/admin/index_admin', (req,res) =>{
    res.render('index_admin.pug')
});


router.get('/admin/table_admin_user', (req,res) =>{
    res.render('table_admin_user.pug')
});


router.get('/admin/table_admin_employer', (req,res) =>{
    res.render('table_admin_employer.pug')
});


router.get('/admin/table_admin_customer', (req,res) =>{
    res.render('table_admin_customer.pug')
});

module.exports = router;