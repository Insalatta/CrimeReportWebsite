import React from "react";
import "./pages.css";
import p4 from "../Picture/p4.jpg";
class About extends React.Component{
    render(){
        return(
            <div className="homeWrapper">
                <img src={p4} className="image" />
                <div className="aboutContent">
                    <p>This website helps the society to 
                        report crime and let people know 
                        about the crimes happened in the 
                        past and present with the date and 
                        place specified in it. You can search
                        specific place where you want to know 
                        the crime had happened. Let's make this 
                        society a better place to live!
                        <br></br><br></br>
                        This Webpage is developed by the students at 
                        Government College of Engineering.
                        <br></br>
                        Insalatta Priyadharshini S <br></br>
                        Nagalakshmi <br></br>
                        Sornalatha <br></br>
                        Kavitha S<br></br>

                    </p>
                </div>
            </div>
        )
    }
}

export default About;