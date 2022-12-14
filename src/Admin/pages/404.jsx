import React, { useNavigate } from "react";
const NotFound = () => {
  const Redirect = () => {
    setTimeout(() => {
      useNavigate("/");
    }, 5000);
  };
  return (
    <div onLoad={() => Redirect()}>
      <img>
        <img className="loading" src="/assets/img/Logo.png"></img>
      </img>
      <h3>Page Not Found</h3>
      <h4>Redirecting in 5 seconds</h4>
    </div>
  );
};

export default NotFound;
