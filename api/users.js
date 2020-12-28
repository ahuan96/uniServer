var models = require('../sequelize/models')

// 查询用户
function findUser(data){
  return  models.User.findAll({
            where:data
        })
}

// 查询所有用户
function findUserAll(){
      return  models.User.findAll({})
 }

 // 更新用户信息
function updateUserAll(){
      return   models.User.findAll({})
 }


module.exports = {findUser,findUserAll}