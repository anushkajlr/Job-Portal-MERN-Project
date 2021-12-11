import React from 'react'
const Home = () => {
return(
<div className="container">
<h4 className="center">Home</h4>
<div style = {{fontSize:"24px"}}><a href = "http://localhost:3000/PostJobs">Post Job Here</a></div>

              <div>
               
                <Jobs
                  value={{
                    model: "SME - Network & Security",
                    price: "Not disclosed",
                    quantity: 0,
                    description1: "5-9 years",
                    description2: "Bangalore",
                    description3: "Install and Setup proxy servers according to the customer requirement",
                    description4: "Interpersonal skills, Customer service orientation, Networking, VPNAnalytical",
                    description5: "24 days ago",
                    imglink: "https://img.naukri.com/logo_images/v3/1617980.gif",
                    link: "https://www.naukri.com/job-listings-sme-network-security-microland-limited-bangalore-bengaluru-5-to-9-years-101121500469?src=seo_srp&sid=1638704745941692&xp=1&px=1",
                  }}
                  
                /><br/><br/>
                <Jobs
                  value={{
                    model: "TCS",
                    price: "Not disclosed",
                    quantity: 0,
                    description1: " 3 - 15 years.",
                    description2: "Bangalore, Pune, Chennai, Mumbai, Hyderabad, Trivandrum, Kochi, Kolkata, Delhi/NCR, Ahmedabad, Indore & Bhubaneswar.",
                    description3: "Tcs is Hiring For Java Developer",
                    description4: "Java, J2EE, spring boot, microservices, Rest API, Hibernate, Jenkins, Jmeter, Postman, Json, PCF &Junit.",
                    description5: "1 day ago",
                    imglink: "https://img.naukri.com/logo_images/v3/892542.gif",
                    link: "https://www.naukri.com/job-listings-tcs-is-hiring-for-java-developer-tata-consultancy-services-ltd-kochi-cochin-kolkata-hyderabad-secunderabad-pune-chennai-bangalore-bengaluru-delhi-ncr-trivandrum-thiruvananthapuram-mumbai-all-areas-3-to-8-years-041221003794?src=seo_srp&sid=1638704745941692&xp=5&px=1",
                  }}
                 
                /><br/><br/>
                <Jobs
                  value={{
                    model: "Cognizant Technology Solutions India Ltd",
                    price: "Not disclosed",
                    quantity: 0,
                    description1: "0-1 years",
                    description2: "Kolkata, Hyderabad/Secunderabad, Pune, Ahmedabad, Chennai",
                    description3: "HR Recruiter - Sourcing Specialist : We are looking for a Sourcing Specialist to support our recruiting team and help us place qualified candidates faster.",
                    description4: "Interpersonal skills, Customer service orientation, Networking, VPNAnalytical",
                    description5: "24 days ago",
                    imglink: "https://img.naukri.com/logo_images/v3/1617980.gif",
                    link: "https://www.naukri.com/job-listings-sme-network-security-microland-limited-bangalore-bengaluru-5-to-9-years-101121500469?src=seo_srp&sid=1638704745941692&xp=1&px=1",
                  }}
                /><br/><br/>
                <Jobs value={{
              model: "SME - Network & Security",
              price: "Not disclosed",
              quantity: 0,
              description1: "5-9 years",
              description2: "Bangalore",
              description3: "Install and Setup proxy servers according to the customer requirement",
              description4: "Interpersonal skills, Customer service orientation, Networking, VPNAnalytical",
              description5: "24 days ago",
              imglink: "https://img.naukri.com/logo_images/v3/1617980.gif",
              link: "https://www.naukri.com/job-listings-sme-network-security-microland-limited-bangalore-bengalu"
            }} /><br/><br/>
              </div>
            </div>

)
}

class Jobs extends React.Component {
    render() {
      return (
        <div className="d1">
          <h3>{this.props.value.model}</h3>
          
          <img src ={this.props.value.imglink} width="80px" height = "80px" />
          <ul>
            
            <li>
              Experience: {this.props.value.description1}{" "}
            </li>
            <li>
                Place : {this.props.value.description2}{" "}
            </li>
            <li>
               Description : {this.props.value.description3}{" "}
            </li>
            <li>
               Skills required : {this.props.value.description4}{" "}
            </li>
            
            <li>
                Uploaded : {this.props.value.description5}{" "}
            </li>
          </ul>
          
          <a href={this.props.value.link}> Click here for more details</a>
          <h5>Salary : {this.props.value.price} </h5>

          <button type="button" class="c1"
            onClick={() => {
              window.location.href="http://localhost:3000/login"
             
            }}> Apply Now!
          </button>
        </div>
      );
    }
  }

export default Home
