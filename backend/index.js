import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import { Db } from "mongodb"
import { MongoClient } from "mongodb";
import React from 'react'
//import {useHistory} from "react-router-dom"

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
var db=mongoose.connection;
mongoose.connect("mongodb://localhost:27017/myLogin", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})

const userSchema = new mongoose.Schema({
    name: String,
    email:String,
    pass:String,
    skills:String,
    exp:String,
    dob:String
})
////////////////////////

const companySchema = new mongoose.Schema({
    name: String,
    contact:String,
    pass:String,
    skills:String,
    pos:String
})
////////////////////////
const jobSchema = new mongoose.Schema({
    jobtitle:String,
    company:String,
    workplacetype:String,
    joblocation:String,
    workexperience:String,
    degree:String,
    emptype:String

})

const User = new mongoose.model("User", userSchema)
const Company = new mongoose.model("Company", companySchema)
const Job= new mongoose.model("Job", jobSchema)

var url = "mongodb://localhost:27017/";


//Routes


app.post("/SignupUser", (req, result)=> {

    const name = req.body.form.name.toString();
        const email = req.body.form.email.toString();
        const pass = req.body.form.pass.toString();
        const skills = req.body.form.skills.toString();
        const exp = req.body.form.exp.toString();
        const dob = req.body.form.dob.toString();
        const user = new User({
            name:name,
            email:email,
            pass:pass,
            skills:skills,
            exp:exp,
            dob:dob})
            MongoClient.connect(url, function(err, db) {
                if (err) throw err;
                var dbo = db.db("newdb");
                dbo.collection("newuser").findOne({email:email}, function(err, res) {
                    if (res) 
                    {
                     console.log("Already registered")
                     result.send({message:"Already registered"});

                    }
                    else{
                        result.send({message:"Successfully registered"});

                        dbo.collection("newuser").insertOne(user, function(err, res){
                            if (err) throw err;
                     else{
                        // alert("Sign up successful")
                        console.log(user);
                        console.log({message: "record inserted"});
                      }
                    db.close();

                        })

                    }
                })
            })
            //comment by anushka
           
})

    //const { email, password} = req.body
    //User.findOne({ email: email}, (err, user) => {
    
    // user.save(err => {
    //         if(err) {
    //             res.send("Problem")
    //         } else {
    //             res.send(user.name)
    //         }
    //     })
    

    
    




  




app.post("/SignupCompany", (req, result)=> {
    
    
    
        //const { email, password} = req.body
    //User.findOne({ email: email}, (err, user) => {
    //this.state = {"name":"","contact":"","pass":"","skills":"","pos":""}    
    const name = req.body.form.name.toString();
    const contact = req.body.form.contact.toString();
    const pass = req.body.form.pass.toString();
    const skills = req.body.form.skills.toString();
    const pos = req.body.form.pos.toString();
    const company = new Company({
        name:name,
        contact:contact,
        pass:pass,
        skills:skills,
        pos:pos})
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("newdb");
        dbo.collection("newcompany").findOne({name:name}, function(err, res) {
            if (res) 
            {
             console.log("Already registered")
             result.send({message:"Already registered"});


             
            }
            else{
                result.send({message:"Successfully registered"});
                dbo.collection("newcompany").insertOne(company, function(err, res){
                    if (err) throw err;
             else{
                // alert("Sign up successful")
                console.log(company);
                console.log({message: "record inserted"});
              }
            db.close();

                })

            }
        })
    })
   
    
   

    // user.save(err => {
    //         if(err) {
    //             res.send("Problem")
    //         } else {
    //             res.send(user.name)
    //         }
    //     })
}) 

    

app.post("/PostJobs", (req, res)=> {
    const jobtitle = req.body.form.jobtitle.toString();
    const company = req.body.form.company.toString();
    const workplacetype = req.body.form.workplacetype.toString();
    const joblocation = req.body.form.joblocation.toString();
    const workexperience = req.body.form.workexperience.toString();
    const degree = req.body.form.degree.toString();
    const emptype = req.body.form.emptype.toString();    
        const job = new Job({
            jobtitle:jobtitle,
            company:company,
            workplacetype:workplacetype,
            joblocation:joblocation,
            workexperience:workexperience,
            degree:degree,
            emptype:emptype
            })
            MongoClient.connect(url, function(err, db) {
                if (err) throw err;
                var dbo = db.db("newdb");
                dbo.collection("newjob").insertOne(job, function(err, res){
                    if (err) throw err;
             else{
                console.log(job);
                console.log({message: "record inserted"});
              }
            db.close();

                })
            })
            //comment by anushka
    




                
})



app.post("/LoginUser", (req, result)=> {
    
  
    const name = req.body.form.name.toString();
        
    const pass = req.body.form.pass.toString();
   
       
        const user = new User({
            name:name,
            
            pass:pass,
            })

       
      
            MongoClient.connect(url, function(err, db) {
                if (err) throw err;
                var dbo = db.db("newdb");
                dbo.collection("newuser").findOne({name: name, pass:pass}, function(err, res) {
                    if (res) 
                    {
                     console.log("Login successfull");
                     result.send({message:"Login success"});
                    
                     
                    
                    }
                    else{
                        console.log({message: "Incorrect credentials"});
                        result.send({message:"Login fail"});
                        
                    }
                })
            })
            
            
})

app.post("/LoginCompany", (req, result)=> {
    const name = req.body.form.name.toString();
        
        const pass = req.body.form.pass.toString();
       
        const user = new User({
            name:name,
            
            pass:pass,
            })
           
            MongoClient.connect(url, function(err, db) {
                if (err) throw err;
                var dbo = db.db("newdb");
                dbo.collection("newcompany").findOne({name: name, pass:pass}, function(err, res) {
                    if (res) 
                    {
                     console.log("Login successfull")
                     result.send({message:"Login success"});
                     
                    }
                    else{
                        console.log({message: "Incorrect credentials"});
                        result.send({message:"Login fail"});
                    }
                })
            })
            
})




                
//})
app.listen(9000,() => {
    console.log("BE started at port 9000")})
    
    module.exports = {
       Company, User
    }