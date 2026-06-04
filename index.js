const express = require("express");
const app = express();
const path = require("path");
const MongoClient = require("mongodb").MongoClient;


let port = 8080;
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

const MONGO_URL = "mongodb://admin:qwerty@mongo:27017/admin";
const client = new MongoClient(MONGO_URL);

app.get("/getUsers",async (req, res) => {
    await client.connect();
    console.log('coneected successfully to server');

    const db = client.db("pranav-db");
    const data = await db.collection('users').find({}).toArray();

   
    res.send(data);
}) ;

app.post("/addUser", async (req, res) => {
    const userObj = req.body;
    console.log(req.body);
    await client.connect();
    console.log('connected successfully to server');

    const db = client.db("pranav-db");
    const data = await db.collection('users').insertOne(userObj);
    console.log(data);
    console.log("data inserted in DB");
    res.send("Data inserted successfully");
    
});

app.listen(port, ()=>{
    console.log("app listing");
});