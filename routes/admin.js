const express = require('express');
const router = express.Router();

router.get('/login_admin', (req,res) =>{
    res.render('login_admin.pug');
})

module.exports = router;