import React from 'react'
import axios from "axios"


class Post extends React.Component
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
            axios.post("http://localhost:9000/PostJobs", this.state)
            .then(res => {
                console.log(res.data)
                
        })
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
                <h2></h2>
            <form style = {fstyle}>
            <p style = {{fontSize:"50px",color:"#1e81b0"}}><b>Find a great hire, fast!!</b></p><br/><br/>   
            Job Title:<br/><input name = "name" onChange = {this.handleChange} type = "text" size = "40" style = {{height:"50px",fontSize:"30px"}}/>
            <br/><br/>
            Company:<br/><input name = "contact" onChange = {this.handleChange} type = "text" size = "40" style = {{height:"50px",fontSize:"30px"}}/>
            <br/><br/>
            Workplace Type:<br/><input name = "pass" onChange = {this.handleChange} type = "text" size = "40" style = {{height:"50px",fontSize:"30px"}}/>
            <br/><br/>
            Job Location:<br/><input name = "skills" onChange = {this.handleChange} type = "text"  style = {{height:"50px",fontSize:"30px"}}/>
            <br/><br/>
            Work experience:<br/><input name = "skills" onChange = {this.handleChange} type = "text"  style = {{height:"50px",fontSize:"30px"}}/>
            <br/><br/>
            Tool or Technology:<br/><input name = "skills" onChange = {this.handleChange} type = "text"  style = {{height:"50px",fontSize:"30px"}}/>
            <br/><br/>
            Degree:<br/><input name = "skills" onChange = {this.handleChange} type = "text"  style = {{height:"50px",fontSize:"30px"}}/>
            <br/><br/>
            Free Positions<br/><textarea name = "pos" onChange = {this.handleChange} type = "text"  style = {{height:"150px",fontSize:"30px",width:"550px"}}/>
            <br/><br/>
            Employment Type:<br/><input name = "emptype" placeholder="Full Time/Part Time/Contract" onChange = {this.handleChange} type = "text"  style = {{height:"50px",fontSize:"30px"}}/>
            <br/><br/>
            
            
            <button style = {{height:'50px',width:"300px",fontSize:"25px"}} onClick = {this.handleClick}>Get Started</button>
            </form>
            </div>)
    }
    

}

class PostJobs extends React.Component
{
render(){
    return(
    <div>
  
    <Post/>
    
    </div>)
}
}


export default PostJobs