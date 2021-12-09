import React from 'react'
import axios from 'axios'

//const mongoose = require('mongoose');
  

//const { Comp,User } = require('./index');
  

//mongoose.connect('mongodb://localhost:27017/myLogin',
    //{
        //: true,
        //useUnifiedTopology: true,
        //useFindAndModify: false
    //});
  
//var comp = [];
  

//Comp.find()
   // .then(data => {
    //    console.log("Companies:")
     //   console.log(data);
  
   // })
   // .catch(error => {
    //    console.log(error);
//})

class Connections extends React.Component {
    handleSubmit(){
        let databody = {
            "name": this.state.nameIn,
            "quote": this.state.quoteIn
        }
    
        return fetch('http://localhost:5002/SignupCompany', {
            method: 'POST',
            body: JSON.stringify(databody),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(data => console.log(data)); 
    }

    render(){
    return(
    <div>
<div className="container">
<h4 className="center">Connections</h4>
<p><h5>Reach out to experienced consultants:</h5></p>
<img src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png" width = "40px" height = "40px" align="left"></img> 
<h5>1234567891
</h5>
<br/>
<img src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png" width = "40px" height = "40px" align="left"></img> 
<h5>5678452159
</h5>
<br/>
<img src="https://thumbs.dreamstime.com/b/email-icon-isolated-white-background-email-icon-trendy-design-style-email-icon-isolated-white-background-email-icon-183701610.jpg" width = "40px" height = "40px" align="left"></img> 
<h5><u><a href="http://google.com">consultants@freshstart.com</a></u>
</h5>
<br/>

<p><h5>Chat with us:</h5></p>
<form>
    <textarea name="chat"></textarea>

</form>

<form>
            <p style = {{fontSize:"25px",color:"#1e81b0"}}><b>CLICK TO GET CONTACTS DETAILS OF COMPANIES</b></p>   
         
            <button onClick = {this.handleSubmit}>GET DETAILS</button><br/>
            </form>
<br/>
</div>
</div>
)}
}
export default Connections


