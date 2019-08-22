const express = require('express');
const router = express.Router();

router.get('/',(req,res) =>{
    let articles = [
        {
            id:1,
            title: 'Articulo Uno',
            author: 'Juan Ortiz',
            body: 'this is article one'
        },
        {
            id:2,
            title: 'Articulo Dos',
            author: 'Ortiz Valenzuela',
            body: 'this is article two'
        },
        {
            id:3,
            title: 'Articulo Tres',
            author: 'Juan ESteban',
            body: 'this is article three'
        }
    ];
    res.render('index.pug', {
        title: 'Articulos',
        articles: articles
    });
});


router.get('/articles/add',(req,res) =>{
    res.render('add_article.pug',{
        title: 'Agregar Articulos'
    });
});

router.post('/articles/add', function(req, res){
});


router.get('/users/register', (req,res) =>{
    res.render('register.pug');
})


router.get('/users/login', (req,res) =>{
    res.render('login.pug');
})


module.exports = router;