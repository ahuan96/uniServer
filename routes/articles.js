var express = require('express');
var router = express.Router();

var models = require('../sequelize/models')

/* GET home page. */
router.get('/', function(req, res, next) {
  models.articlesModel.sync({force: false})
    res.render('index', { title: 'Pub' });
  });
  

// 发布文章
router.post('/add', function(req, res, next) {
  let query = req.body
  console.log(query)
    models.articlesModel
    .create({ content: query.content, typeId: query.type_id, author: query.author,color: query.color,isgap: query.isgap,styleId: query.style_id,userId: query.user_id })
    .then(row=>{
      console.log(row)
      res.json({code:200,msg:'创建成功',data:row})
      })
});


// 查询所有文章文章
router.get('/findAll', function(req, res, next) {
  let query = req.query
  let where = {}
  if(query.typeId){
    where.typeId = query.typeId
  }
  if(query.userId){
    where.userId = query.userId
  }

    models.articlesModel
    .findAll({where})
    .then(rows=>{
      res.json({code:200,msg:'成功',data:rows})
      })
});

module.exports = router;