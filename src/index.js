import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {BrowserRouter,Routes,Route,Link,Outlet} from "react-router-dom";
import Home from "./Pages/Home";
import Crime from "./Pages/Crime";
import About from "./Pages/About";
import Search from "./Pages/Search";
class Header extends React.Component{
  constructor(){
    super();
    this.state={
      homeActive:false,
      reportActive:false,
      searchActive:false,
      aboutActive:false,
    }
    this.handleHome = this.handleHome.bind(this);
    this.handleReport = this.handleReport.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleAbout = this.handleAbout.bind(this);
   
  }
  handleHome =() =>{
    this.setState({
      homeActive:true,
      reportActive:false,
      searchActive:false,
      aboutActive:false,
    });
  }
  handleReport =() =>{
    this.setState({
      homeActive:false,
      reportActive:true,
      searchActive:false,
      aboutActive:false,
    });
  }
  handleSearch =() =>{
    this.setState({
      homeActive:false,
      reportActive:false,
      searchActive:true,
      aboutActive:false,
    });
  }
  handleAbout =() =>{
    this.setState({
      homeActive:false,
      reportActive:false,
      searchActive:false,
      aboutActive:true,
    });
  }
  render(){
    return(
      <div className="wrapper">  
        <div className="body">
          <div className="headerWrapper">
            <div className="header">
              <p className="head">Crime Report</p>
              <p className="sub">Report crime before it cast another life.</p>
            </div>
            <Link to="/" className={"elements "+(this.state.homeActive?"active":"")} onClick={this.handleHome}>Home</Link>
            <Link to="/crime" className={"elements "+(this.state.reportActive?"active":"")} onClick={this.handleReport}>Report</Link>
            <Link to="/search" className={"elements "+(this.state.searchActive?"active":"")} onClick={this.handleSearch}>Search</Link>
            <Link to="/about" className={"elements "+(this.state.aboutActive?"active":"")} onClick={this.handleAbout}>About</Link>
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