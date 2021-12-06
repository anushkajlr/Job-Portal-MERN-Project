import React from 'react'
class Logo extends React.Component
{
    render(){
        const lstyle = {
            position: "block",
            color:"red",
            fontFamily: "Avenir Next",
            fontWeight: "600",
            fontSize: "50px",
            textTransform: "uppercase",
            fontStyle: "italic",
            letterSpacing: "0.05em",
            display: "inline",
            paddingTop:"10px"
            }
            return (<p style = {lstyle}>Fresh Start</p>)
        }   
            
}
class Signcompany extends React.Component
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
        this.state = {"name":"","contact":"","pass":"","skills":"","pos":""}    
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
            <p style = {{fontSize:"50px",color:"#1e81b0"}}><b>Sign Up As Company</b></p><br/><br/>   
            Company Name<br/><input name = "name" onChange = {this.handleChange} type = "text" size = "40" style = {{height:"50px",fontSize:"30px"}}/>
            <br/><br/>
            Contact No<br/><input name = "contact" onChange = {this.handleChange} type = "text" size = "40" style = {{height:"50px",fontSize:"30px"}}/>
            <br/><br/>
            Set password<br/><input name = "pass" onChange = {this.handleChange} type = "text" size = "40" style = {{height:"50px",fontSize:"30px"}}/>
            <br/><br/>
            Required Skills<br/><textarea name = "skills" onChange = {this.handleChange} type = "text"  style = {{height:"150px",fontSize:"30px",width:"550px"}}/>
            <br/><br/>
            Free Positions<br/><textarea name = "pos" onChange = {this.handleChange} type = "text"  style = {{height:"150px",fontSize:"30px",width:"550px"}}/>
            <br/><br/>
            
            <button style = {{height:'50px',width:"300px",fontSize:"25px"}} onClick = {this.handleClick}>CREATE ACCOUNT </button>
            </form>
            </div>)
    }
    

}

class SignupCompany extends React.Component
{
render(){
    return(
    <div>
    <Logo/>
    <Signcompany/>
    
    </div>)
}
}
export default SignupCompany