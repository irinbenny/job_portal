// 1)import dotenv module
//loads .env file contents into process.env by default
require('dotenv').config()

const express=require('express')

// 3)import cors
const cors=require('cors')

// import router
const router=require('./Routing/router') 

// 4)create server
const pfServer=express()

// 6)convert  json to js objects 
//.json method - it returns a middleware that can convert json format to js object
// middleware - req-res cycle control
pfServer.use(express.json()) 

//import connection file
require('./Config/db');


//5)use cors by server -this method is used to connect frontend
pfServer.use(cors())

//server using router //use(express.json) kainj vennam router kodukan --javascript json akkand kodukaruth
pfServer.use(router) 

// first - name by which other application can use this folder
// second express.static - export that folder
/* pfServer.use('/uploads',express.static('./uploads')) */


//7) set port
const PORT = process.env.PORT || 4000;


//8)run server
pfServer.listen(PORT,()=>{
    console.log(`server running successfully ${PORT}`);
})

// //GET REQUEST
pfServer.get('/',(req,res)=>{
    res.send(`<h1 style='color:blue'>server running sucessfully</h1>`)
})

// // import application middleare
// const appmiddleware=require("./middleware/appMiddleware")
/* pfServer.use(appmiddleware) */
