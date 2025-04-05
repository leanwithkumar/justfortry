const express = require('express')
require('dotenv').config()
const app = express();
const port = 5000;



app.get('/', (req, res)=>{
    res.send('hello world')
})


app.listen(process.env.PORT, ()=>{
    console.log(`server is listening at port ${process.env.PORT}`)
})
