import React from 'react'
import axios from 'axios'
class Logo extends React.Component
{
    render(){
        const lstyle = {
            position: "absolute",
            color:"red",
            fontFamily: "Avenir Next",
            fontWeight: "600",
            fontSize: "25px",
            textTransform: "uppercase",
            fontStyle: "italic",
            letterSpacing: "0.05em",
            display: "inline"
            }
            return (<p style = {lstyle}>Fresh Start</p>)
        }   
            
}
class Form extends React.Component
{
    handleChange = (event)=>{
        var name1 = event.target.name
        var value1 = event.target.value
        this.setState({
        ...this.state.form,
        form:{
        ...this.state.form,
        [name1]:[value1]
        }
        }) 

    }

    handleClickComp = (e)=>{
        e.preventDefault();
        
        axios.post("http://localhost:9000/LoginCompany", this.state)
     
    }

    
    handleClickUser = (e)=>{
        e.preventDefault();
        
        axios.post("http://localhost:9000/LoginUser", this.state)
            //console.log(this.state)
       
    }
    
    constructor(props)
    {
    
        super(props);
        this.state = {"name":"","pass":""}    
    
    }
    render()
    {
        const fstyle = {
        fontSize:"20px",
        position:"fixed",
        textAlign:"center",
        top:"20%",
        left:"35%",
        padding:"75px",
        paddingTop:"50px",
        background:"#abdbe3",
        borderStyle:"solid",
        borderWidth:"2px ",
        borderColor:"#27a98e"}
        

        
        return(
            <div>
                 
            <form style = {fstyle}>
            <p style = {{fontSize:"25px",color:"#1e81b0"}}><b>LOGIN TO CONTINUE</b></p><br/><br/>   
           
            Username<br/><input type = "text" size = "30"style = {{height:"25px"}} name = "name" onChange = {this.handleChange}/>
            <br/><br/>
            Password<br/><input type = "text" name = "pass" size = "30"style = {{height:"25px"}}  onChange = {this.handleChange}/>
            <br/><br/>
            <button onClick = {this.handleClickComp}>LOGIN AS COMPANY</button><br/>
            <button onClick = {this.handleClickUser}>LOGIN AS USER</button>
            </form>
            </div>)
    }
    

}

class Login extends React.Component
{
render(){
    return(
    <div>
    <Form/>
    <Logo/>
    </div>)
}
}
export default Login