import React from "react";
import "./Error.css"; // Place CSS in this file or use CSS-in-JS styles
import {Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className="container">
      <div className="gif">
        <img
          src="https://i.postimg.cc/2yrFyxKv/giphy.gif"
          alt="gif_ing"
        />
      </div>
      <div className="content">
        <h1 className="main-heading">This page is gone.</h1>
        <p>
          ...maybe the page you're looking for is not found or never existed.
        </p>
        <Link 
          to="/" 
          className="home-button"
          role="button"
          aria-label="Navigate to home page"
        >
          Back to home
          <span className="icon" aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
