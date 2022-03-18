import React from "react";
import "./pages.css";
import p4 from "../Picture/p4.jpg";
class Crime extends React.Component{
    render(){
        return(
            <div className="homeWrapper">
                <img src={p4} className="image" />
                <p className="homeHeader">Crime Page</p>
            </div>
        )
    }
}

export default Crime;