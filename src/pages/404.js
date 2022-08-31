import { useEffect, useNavigate } from "react";
import { Link } from "react-router-dom";
import React from "react";
import "../styles/404.scss";
const NotFound = ({ setLoading }) => {
  const Redirect = () => {
    useNavigate("/");
  };

  return (
    <div className="notfound ">
      <img src="/assets/img/Logo.png"></img>
      <h3>Page Not Found</h3>
      <div className="link">
        {" "}
        <Link to="/">Go to Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
