import React from "react";
import { Link } from "react-router-dom";
import heroImage from "./images/illustration-working.svg";
import "./Hero.css";

class Hero extends React.Component {
  render() {
    return (
      <div>
        <h1>
          More than just <br /> shorter links
        </h1>
        <h2>
          Build your brand's recognition and get detailed
          <br /> insights on how your links are performing.
        </h2>
        <Link className="get-started-button" to="/sign-up">
          Get Started
        </Link>
        <div className="hero-image-container">
          <img
            id="hero-image"
            src={heroImage}
            alt="Illustration of person sitting in front of desk"
          />
        </div>
      </div>
    );
  }
}

export default Hero;
