import React from 'react'
import axios from "axios"
class Signuser extends React.Component
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
    handleClick = (e)=>{
        e.preventDefault();
        // //const {}
        // axios.post("http://localhost:9002/SignupUser",this.state)
        // .then(res=>console.log(res))
        // console.log(this.state);
            axios.post("http://localhost:9000/SignupUser", this.state)
            .then(res => {
                console.log(res.data)
                
        })
    }

    constructor(props)
    {
        super(props);
        this.state = {"name":"","email":"","pass":"","skills":"","exp":"","dob":""}    
    }
    render()
    {
        const fstyle = {
        fontSize:"30px",
        position:"inline",
        textAlign:"center",
        width : "1500px",
        height:"1500px",
        marginLeft:"5%",
        paddingLeft:"30%",
        paddingRight:"30%",
        background:"#abdbe3",
        borderStyle:"solid",
        borderWidth:"2px ",
        borderColor:"#27a98e"}
        

        
        return(
            <div>
            <form style = {fstyle}>
            <p style = {{fontSize:"50px",color:"#1e81b0"}}><b>Sign Up As User</b></p><br/><br/>   
            Name<br/><input name = "name" onChange = {this.handleChange} type = "text" size = "40" style = {{height:"50px",fontSize:"30px"}}/>
            <br/><br/>
            eMail ID<br/><input name = "email" onChange = {this.handleChange} type = "text" size = "40" style = {{height:"50px",fontSize:"30px"}}/>
            <br/><br/>
            DOB<br/><input name = "dob" onChange = {this.handleChange} type = "text" size = "40" style = {{height:"50px",fontSize:"30px"}}/>
            <br/><br/>
            Set password<br/><input name = "pass" onChange = {this.handleChange} type = "text" size = "40" style = {{height:"50px",fontSize:"30px"}}/>
            <br/><br/>
            Skills<br/><textarea name = "skills" onChange = {this.handleChange} type = "text" style = {{height:"150px",fontSize:"30px",width:"550px"}}/>
            <br/><br/>
            Experience<br/><textarea name = "exp" onChange = {this.handleChange} type = "text" size = "40" style = {{height:"150px",fontSize:"30px",width:"550px"}}/>
            <br/><br/>
            
            <button style = {{height:'50px',width:"300px",fontSize:"25px"}} onClick = {this.handleClick}>CREATE ACCOUNT </button>
            </form>
            </div>)
    }
    

}

class SignupUser extends React.Component
{
render(){
    return <Signuser/>
    
   
}
}

export default SignupUser       