const express=require("express")
const app=express()

const port=3000

app.get('/', (req,res)=>{
    res.send('<h1>hello full stack web dev</h1>');
   
})

app.get('/insta', (req,res)=>{
        // res.status(404).send("hello world")
        const insta={
            userName:'siddharth',
            follow:1,
            follower:100
        }
        res.status(200).send({insta})
})

app.listen(port, ()=>{
    console.log("successfully running");
    
})