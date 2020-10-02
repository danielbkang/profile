import React, { Component } from "react";
import SocialNetwork from "../components/SocialNetwork";
import "./Contact.css";
class Contact extends Component {
  render() {
    return (
      <div className="condiv contact">
        <p>Phone: +1 (778)938-6388</p>
        <br/>
        <p>Email: danielbkang91@gmail.com</p>
        <SocialNetwork />
      </div>
    );
  }
}
export default Contact;
