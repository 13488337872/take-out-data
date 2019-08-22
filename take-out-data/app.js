const express = require("express")
const path = require("path")


//模拟数据
const index = require("./mock/index")
const detail = require("./mock/detail")

//购物车
const shopCar = require("./mock/shopCar")
// const tosjop = require("./mock/to-shop")

//我的订单
const mtorders = require("./mock/mt-order")

//附近电铺
const mtShopList = require("./mock/mt-shopList")

//附近电铺
const classifcations = require("./mock/class-if-cations")

//创建一个express服务对象
const app = express()
const router = express.Router()

router.all('*',function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); //这个表示任意域名都可以访问，这样写不能携带cookie了。
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');//设置方法
    if (req.method == 'OPTIONS') {
        res.send(200); // 意思是，在正常的请求之前，会发送一个验证，是否可以请求。
    }
    else {
        next();
    }
});


/**
 * 根据用户获取当前的主页列表
 * */
router.get("/index" ,(req,res)=>{
    res.json(index)
});

router.get("/detail" ,(req,res)=>{
    res.json(detail)
})
//购物车
router.get("/shopCar" ,(req,res)=>{
    res.json(shopCar)
});

//我的订单
router.get("/mtorders" ,(req,res)=>{
    res.json(mtorders)
})

//附近商铺列表
router.get("/mtShopList" ,(req,res)=>{
    res.json(mtShopList)
})

//全部分类
router.get("/classifcations" ,(req,res)=>{
    res.json(classifcations)
})

//把当前的路由添加到app /api/cartinfo
app.use("/api",router)


//监听port
app.listen(3000,()=>{
    console.log("api server is ready on port 3000!")
})
