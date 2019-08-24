const express = require('express');
const router = express.Router();

router.get('/employer', (req,res) =>{
    res.render('login_employer.pug')
})

module.exports = router;