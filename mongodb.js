const express = require('express');
const app=express();
var bodyParser = require('body-parser');
const MongoClient=require('mongodb').MongoClient;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const CONNECTION_URL = "mongodb+srv://admin:admin@cluster1-vnuty.mongodb.net/Company?retryWrites=true&w=majority";
var database,collection

app.get('/',(req,resp)=>{
  database.collection("Employees").find({}).toArray((err,result)=>{
    if (err){
      return resp.status(500).send(err);
    }

    resp.send(result)
})
})
app.post('/addEmployee',(req,resp)=>{
  database.collection("Employees").insert(req.body,(err,result)=>{
    if (err){
      return resp.status(500).send(err);
    }

    resp.send(result.result);
})
})
app.get('/employee/:emp_id',(req,resp)=>{
  let id= req.params.emp_id;
  database.collection("Employees").find({'emp_id':parseInt(id)}).toArray((err,result)=>{
    if (err){
      return resp.status(500).send(err);
    }
 
    resp.send(result.result);
})
})
app.listen(8080, ()=>{
  MongoClient.connect(CONNECTION_URL,{ useNewUrlParser: true},(err,client)=>{
    if(err) {
      throw err;
    }
    database = client.db("Company");
    console.log("Connected to "+ 'Company'+ "!");
  });
});

