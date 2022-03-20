import React from "react";
import "./pages.css";
import p4 from "../Picture/p4.jpg";
class Crime extends React.Component{
    render(){
        return(
            <div className="homeWrapper">
                <img src={p4} className="image" />
                <div className="personalDetailsWrapper">
                    <label className="Label" >Name : 
                        <input type="text" className="Input" />
                    </label>
                    <label className="Label">Email Id :
                        <input type="text" className="Input" />
                    </label>
                </div>
                <div className="dateDetailsWrapper">
                    <label className="Label" >Date :
                        <input type="date" className="Input" />
                    </label>
                    <label className="Label">Place :
                        <input type="text" className="Input" />
                    </label>
                </div>
                <div className="descriptionWrapper">
                    <p>Description</p>
                    <textarea className="descriptionBox"></textarea>
                </div>
                <div className="reportSubmit">SUBMIT</div>
            </div>
        )
    }
}

export default Crime;