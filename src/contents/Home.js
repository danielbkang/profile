import React, { Component } from "react";
import SocialNetwork from "../components/SocialNetwork";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="condiv home">
        <div className="header-content">
          <h2 className="head">Daniel Kang</h2>
          <h3 className="subHead">Full Stack Web Developer</h3>
          <h3 className="subHead">Located at Vancouver BC Canada</h3>
        </div>
        <SocialNetwork />
      </div>
    );
  }
}
export default Home;
