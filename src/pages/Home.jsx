import React, { useState, useEffect, useRef } from "react";
import AboutUs from "../components/aboutUs";

import "../styles/home.scss";

const Home = ({ setLoading, loading, setMobile, mobile }) => {
  const AboutUsRef = useRef();

  const LearnMore = () => {
    AboutUsRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const [team, setTeam] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("https://timunbackend.herokuapp.com/home/teams")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTeam(data);
      });
    fetch("https://timunbackend.herokuapp.com/events")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  if (loading) return null;

  setLoading(false);
  return (
    <div>
      <section
        id="home-page"
        className="d-flex justify-cntent-center align-items-center"
      >
        <div className="container position-relative  d-flex justify-content-center">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <h2>Tunisian International Model United Nations </h2>
              <h3>Tunis Business School</h3>
              <a href onClick={LearnMore} className="btn-get-started ">
                Know More
              </a>
            </div>
          </div>
        </div>
      </section>
      <div ref={AboutUsRef}>
        <AboutUs events={events} team={team} />
      </div>
    </div>
  );
};
export default Home;
