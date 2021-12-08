import React from 'react'
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
    handleClickComp = (e)=>{
        e.preventDefault();
        console.log(this.setUser.current.value);
        console.log(this.setPass.current.value);
        axios.post("http://localhost:9000/LoginCompany", this.state)
            .then(res => {
                console.log(res.data)
                
        })

    }
    handleClickUser = (e)=>{
        e.preventDefault();
        console.log(this.setUser.current.value);
        console.log(this.setPass.current.value);
        axios.post("http://localhost:9000/LoginUser", this.state)
            .then(res => {
                console.log(res.data)
                
        })

    }
    constructor(props)
    {
        super(props);
        this.setUser=React.createRef();
        this.setPass=React.createRef();    
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
            Username<br/><input type = "text" size = "30"style = {{height:"25px"}} ref = {this.setUser}/>
            <br/><br/>
            Password<br/><input type = "text" size = "30"style = {{height:"25px"}}  ref = {this.setPass}/>
            <br/><br/>
            <button onClick = {this.handleClickComp}>LOGIN AS COMMPANY</button>
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