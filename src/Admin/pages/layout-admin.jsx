import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../styles/admin.scss";
const LayoutAdmin = () => {
  return (
    <div>
      <div className="Navbar">
        <Link className="link" to="/fanta/sguides">
          Study Guides
        </Link>
        <Link className="link" to="/fanta/events">
          Events
        </Link>
        <Link className="link" to="/fanta/articles">
          Articles
        </Link>
        <Link className="link" to="/fanta/teams">
          Teams
        </Link>{" "}
      </div>
      <Outlet />
    </div>
  );
};

export default LayoutAdmin;
