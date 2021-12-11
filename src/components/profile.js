import React from 'react'
class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state={
           
            name:this.props.name,

            
        }
    }

    render(){

            
        return(

            <div  class="container">
                <div className="card-panel teal lighten-2">
                
            <div class="row">
        <div class="col s12"></div>
        <div class="col s6">
            <br></br>

           <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" height="300px" weidth="300px"/>
           
           </div>
           <div style = {{fontSize:"25px"}} class="col s6">
               <br></br>
               <p style={{FontStyle:"Helvetica", fontWeight:"bold"}}>
            Name: Anushka Jalori      <br></br><br></br>
            eMail Id: anushkajalori@yahoo.com<br></br><br></br>
            DOB: 26/04/2002<br></br><br></br>
                </p>
            </div>
            </div>
           </div>
           </div>
          
            )
    }
    

}
export default Profile


