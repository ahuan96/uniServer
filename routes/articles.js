var express = require('express');
var router = express.Router();

var models = require('../sequelize/models')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Pub' });
  });
  

/* GET home page. */
router.get('/login', function(req, res, next) {
    models.User.findAll({where:{username:req.query.username}})
    .then(rows=>{
       if(rows.length>0){
           res.json({code:200,msg:'该用户已被注册'})
       }
      })
});

module.exports = router;