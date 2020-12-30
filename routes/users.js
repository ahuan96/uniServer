var express = require('express');
var router = express.Router();

var models = require('../sequelize/models')

router.get('/', function(req, res, next) {
   res.end('user')
 
});

// 查询单个用户信息
router.get('/findUser', function(req, res, next) {
   models.usersModel.findAll({where:{username:req.query.username}}).then(rows=>{
    res.json(rows)
  })
  
});

// 查询所有用户信息
router.get('/findUserAll', function(req, res, next) {
  models.usersModel.findAll({}).then(rows=>{
    res.json(rows)
  })
});

module.exports = router;
