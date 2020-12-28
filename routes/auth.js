var express = require('express');
var router = express.Router();

var models = require('../sequelize/models')
var JWT = require('../utils/jwt')

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Auth' });
});


// 用户登录
router.get('/login', function (req, res, next) {
    let query = req.query
    if (!query.username) {
        res.json({ code: 101, msg: '用户名不能为空' })
    }
    if (!query.password) {
        res.json({ code: 101, msg: '密码不能为空' })
    }
    models.User.findAll({ where: { username: req.query.username } })
        .then(rows => {
            if (rows.length > 0) {
                let datastr = JSON.stringify({ username: req.query.username, password: req.query.password })
                let jwt = new JWT(datastr)
                let token = jwt.generateToken()
                res.json({ code: 101, msg: '用户登录成功', data: { token: token, info: rows } })
            } else {
                res.json({ code: 101, msg: '该用户尚未注册' })
            }
        }).catch(function (err) {
            // 查询报错处理
            res.json({ code: 101, msg: '查询用户失败' })
        });
});

// 用户注册
router.get('/register', function (req, res, next) {
    let query = req.query
    if (!query.username) {
        res.json({ code: 101, msg: '用户名不能为空' })
    }
    if (!query.password) {
        res.json({ code: 101, msg: '密码不能为空' })
    }
    models.User.findAll({ where: { username: req.query.username } })
        .then(rows => {
            if (rows.length > 0) {
                res.json({ code: 101, msg: '该用户已被注册' })
            } else {
                // 进行用户注册
                models.User.create({ username: req.query.username, password: req.query.password })
                    .then(row => {
                        let datastr = JSON.stringify({ username: req.query.username, password: req.query.password })
                        let jwt = new JWT(datastr)
                        let token = jwt.generateToken()
                        console.log(token)
                        res.json({ code: 200, msg: '用户注册成功', data: { token: token, info: row } })
                    }).catch(function (err) {
                        // 插入报错处理
                        res.json({ code: 101, msg: '创建用户失败' })
                    });
            }
        }).catch(function (err) {
            // 查询报错处理
            res.json({ code: 101, msg: '查询用户失败' })
        });
});

module.exports = router;