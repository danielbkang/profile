import React, { Component } from "react";
import "./SocialNetwork.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import SaveIcon from '@material-ui/icons/Save';

class SocialNetwork extends Component {
  render() {
    return (
      <div className="social">
        <a href="https://github.com/danielbkang" target="_blank" rel="noopener">
          <GitHubIcon />
        </a>
        <a href="https://www.facebook.com/kbhangel" target="_blank" rel="noopener">
          <FacebookIcon />
        </a>
        <a href="https://www.linkedin.com/in/byengheekang/" target="_blank" rel="noopener">
          <LinkedInIcon />
        </a>
        <a href='/files/resume_daniel_kang.pdf' title="Download Resume" download>
          <SaveIcon />
        </a>
      </div>
    );
  }
}
export default SocialNetwork;
