const express = require('express');
var mysql = require('mysql');
const app=express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

let conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "divya",
    database:"company_database"
  });
  
  
    conn.connect(function(err) {
        if (err) {
            console.log("Error");
            return
        }
        console.log("Connected!");
    })
    let data=[
app.get('/',(req,resp)=>{
    conn.query('select*from employee', function (err, result) {
        if (err) throw err
        results = JSON.stringify(result)
        result.forEach(obj=>{
            console.log(obj)
            let resultData={}
            resultData.id= obj.id
            resultData.name=obj.name
            resultData.address=obj.address
            data.push(resultData)
        })
        resp.send(data)

})
})]
app.get('/users',(req,resp)=>{
    resp.send(data)
})
app.get('/users/:id',(req,resp)=>{
    let id=req.params.id;
    let searchingData;
    data.forEach(userData => {
        if(userData.id==id){
            searchingData= userData
        }
    })
    resp.send(searchingData)

})
app.post('/users/adduser',(req,resp)=>{
    let param1=req.body
    conn.query('INSERT INTO employee SET?',param1,(err,resp)=>{
        if(err) throw err
        console.log(resp)
    })
})
app.listen(8080, ()=>{
    console.log("Server is listening in port 8080");
});