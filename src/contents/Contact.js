import React, { Component } from "react";
import SocialNetwork from "../components/SocialNetwork";
import "./Contact.css";
class Contact extends Component {
  render() {
    return (
      <div className="condiv contact">
        <p>
          Phone: <a href="tel:+17789386388"> +1 (778) 938-6388</a>
        </p>

        <br />
        <p>
          Email:{" "}
          <a href="mailto:danielbkang91@gmail.com">danielbkang91@gmail.com</a>
        </p>

        <SocialNetwork />
      </div>
    );
  }
}
export default Contact;
