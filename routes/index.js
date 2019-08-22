const express =  require('express');
const router = express.Router();

//Home Router
router.get('/',(req,res) =>{
    let articles = [
        {
            id:1,
            title:'Articulo Uno',
            body:'This is article one'
        }
    ];
    res.render('index.pug',{
        title: 'Articles',
        articles: articles
    });
});

router.get('/index',(req, res, next) =>{
    res.render('index.pug')
});

//add Router
router.get('/',(req,res) =>{
    res.render('add_article.pug')
});

router.get('/add_article',(req, res, next) =>{
    res.render('add_article.pug')
});

module.exports = router;