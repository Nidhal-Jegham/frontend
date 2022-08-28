import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/nav.scss";

const Navbar = (props) => {
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
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });
  return (
    <div>
      <header
        id={navbar ? "header-scrolled" : "header"}
        class="fixed-top d-flex align-items-center header-transparent"
      >
        <div class="container d-flex justify-content-between align-items-center">
          <div class="logo" onClick={componentDidMount}>
            <img
              src="assets/img/white-logo.png"
              // onClick={(e) => goTo(e.target.id)}
              alt=""
              class="img-fluid"
            ></img>
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
              onClick={() => (setMobile(!mobile), console.log(mobile))}
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
