const fs = require('fs')
const path = require('path')
const jwt = require('jsonwebtoken');

var privateKey = fs.readFileSync(path.resolve(__dirname,'./private.key'),"utf8")
// 创建token类
class Jwt {
    constructor(data) {
        this.data = data
    }

    //生成token
    generateToken() {
        let data = this.data;
        let created = Math.floor(Date.now() / 1000)
        let cert = privateKey
        let token = jwt.sign({
            data:data,
            iss:'欢欢',
            // exp:Math.floor(Date.now() / 1000) + 60 * 60
        },
            cert,
            {
                expiresIn: "1h"
            }
        )
        return token
    }

    // 校验token
    verifyToken() {
        let token = this.data
        let cert = privateKey
        let result = jwt.verify(token, cert);
        return result
        console.log(result)
    }
}

// let jwt1 = new Jwt('888')
// let token = jwt1.generateToken()
// console.log(token)
// let jwt2 = new Jwt(token)
// console.log(jwt2.verifyToken())
// console.log(Math.floor(Date.now() / 1000))

module.exports = Jwt