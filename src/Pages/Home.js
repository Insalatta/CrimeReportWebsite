import React from "react";
import "./pages.css";
import p4 from "../Picture/p4.jpg";
class Home extends React.Component{
    render(){
        return(
            <div className="homeWrapper">
                <img src={p4} className="image" />
                <p className="homeContent1">
                    Crime and bad lives are the measure of a State's failure, 
                    all crime in the end is the crime of the community.
                    <br></br>
                    <br></br>
                    Please report the crime in the report page so 
                    that everyone will be aware of it and we let 
                    the police handle the case.
                </p>
                
            </div>
        )
    }
}

export default Home;