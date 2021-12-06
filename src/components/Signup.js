import React from 'react'

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
        console.log(this.state);
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
            Skills<br/><input name = "skills" onChange = {this.handleChange} type = "text" size = "40" style = {{height:"50px",fontSize:"30px"}}/>
            <br/><br/>
            Experience<br/><input name = "exp" onChange = {this.handleChange} type = "text" size = "40" style = {{height:"50px",fontSize:"30px"}}/>
            <br/><br/>
            
            <button style = {{height:'50px',width:"300px",fontSize:"25px"}} onClick = {this.handleClick}>CREATE ACCOUNT </button>
            </form>
            </div>)
    }
    

}

class Signup extends React.Component
{
render(){
    return <Signuser/>
    
   
}
}

export default Signup        