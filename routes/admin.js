const express = require('express');
const router = express.Router();

router.get('/admin', (req,res) =>{
    res.render('login_admin.pug')
})

module.exports = router;