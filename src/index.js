import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import p4 from "./Picture/p4.jpg";
import {BrowserRouter,Routes,Route,Link,Outlet} from "react-router-dom";
import Home from "./Pages/Home";
import Crime from "./Pages/Crime";
import About from "./Pages/About";
import Search from "./Pages/Search";
class Header extends React.Component{
  render(){
    return(
      <div className="wrapper">  
        <div className="body">
          <div className="headerWrapper">
            <div className="header">
              <p className="head">Crime Report</p>
              <p className="sub">Report crime before it cast another life.</p>
            </div>
            <Link to="/" className="elements">Home</Link>
            <Link to="/crime" className="elements">Crime</Link>
            <Link to="/search" className="elements">Search</Link>
            <Link to="/about" className="elements">About</Link>
          </div>
        </div>
      </div>
    )
  }
}
class Main extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crime" element={<Crime />} />
          <Route path="/search" element={<Search />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<Main />,document.getElementById("root"));