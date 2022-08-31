import { useEffect } from "react";
import React from "react";
const NotFound = ({ setLoading }) => {
  useEffect(() => {
    setLoading(false);
  });
  const Redirect = () => {
    setTimeout(() => {
      useNavigate("/");
    }, 5000);
  };
  return (
    <div>
      <img src="/assets/img/Logo.png"></img>
      <h3>Page Not Found</h3>
      <h4>Redirecting in 5 seconds</h4>
    </div>
  );
};

export default NotFound;
