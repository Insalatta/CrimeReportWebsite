import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import p4 from "./Picture/p4.jpg";
class Home extends React.Component{
  render(){
    return(
      <div className="wrapper">
        <div className="image">
          <img src={p4} alt="image"/>
        </div>
        <div className="body">
          <div className="headerWrapper">
            <div className="header">
              <p className="head">Crime Report</p>
              <p className="sub">Report crime</p>
            </div>
            <p className="elements">Home</p>
            <p className="elements">Crime</p>
            <p className="elements">Search</p>
            <p className="elements">About</p>
          </div>
        </div>
      </div>
    )
  }
}


ReactDOM.render(<Home />,document.getElementById("root"));