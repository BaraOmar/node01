import express from 'express'

const app = express();
const PORT = 5000;

app.get("/", (req, res)=>{
    res.send("Home Page");
})

app.get("/test", (req, res)=>{
    res.json({test: "test test"});
})

app.use((req, res)=>{
    res.status(404).json({message: "Route not found !!!!"})
})

app.listen(PORT,()=>{
    console.log("the server is listening !!!!");
})