import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/nav.scss";

const Navbar = () => {
  const [mobile, setMobile] = useState(true);
  const componentDidMount = () => {
    window.scrollTo({ top: 0 });
    if (mobile == false) {
      setMobile(!mobile);
    }
  };
  const componentDidMountAbout = () => {
    window.scrollTo({ top: 1250, behavior: "smooth" });
    if (mobile == false) {
      setMobile(!mobile);
    }
  };
  const componentDidMountContact = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
    if (mobile == false) {
      setMobile(!mobile);
    }
  };
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 66 || mobile == false) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });
  return (
    <div>
      <div
        className={
          navbar
            ? "back-to-top-active d-flex align-items-center justify-content-center"
            : "back-to-top d-flex align-items-center justify-content-center"
        }
        onClick={componentDidMount}
      >
        <i className="bi bi-arrow-up-short"></i>
      </div>
      <header
        id={navbar ? "header-scrolled" : "header"}
        className="fixed-top d-flex align-items-center header-transparent"
      >
        <div className="container d-flex justify-content-between align-items-center">
          <div className="logo" onClick={componentDidMount}>
            {" "}
            <Link className="navbar-comp" to="/">
              <img
                src="assets/img/white-logo.png"
                alt=""
                className="img-fluid"
              ></img>
            </Link>
          </div>

          <nav id="navbar" className={mobile ? "navbar" : "navbar-mobile"}>
            <ul>
              <li id="Home" onClick={componentDidMount}>
                <Link to="/" className=" navba-comp">
                  Home
                </Link>
              </li>
              <li id="about-us" onClick={componentDidMountAbout}>
                <Link className="navbar-comp " to="/">
                  About Us
                </Link>
              </li>
              <li onClick={componentDidMount}>
                <Link className="navbar-comp" to="/events">
                  Events
                </Link>
              </li>
              <li onClick={componentDidMount}>
                <Link className="navbar-comp" to="/sguides">
                  Study Guides
                </Link>
              </li>
              <li onClick={componentDidMount}>
                <Link className="navbar-comp" to="/articles">
                  Articles
                </Link>
              </li>

              <li onClick={componentDidMountContact}>
                <a className="navbar-comp"> Contact Us</a>
              </li>
            </ul>
            <i
              onClick={() => setMobile(!mobile)}
              className={
                mobile
                  ? "bi bi-list mobile-nav-toggle"
                  : "bi bi-x mobile-nav-toggle"
              }
            ></i>
          </nav>
        </div>
      </header>
    </div>
  );
};
export default Navbar;
