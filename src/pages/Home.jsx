import React, { useState, useEffect, useRef } from "react";
import AboutUs from "../components/aboutUs";

import "../styles/home.scss";

const Home = ({ setLoading, loading }) => {
  const AboutUsRef = useRef();
  const [team, setTeam] = useState([]);
  const [about, setAbout] = useState([]);
  const LearnMore = () => {
    AboutUsRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    setLoading(false);
    fetch(`${process.env.REACT_APP_API_URL}/home/teams`)
      .then((res) => res.json())
      .then((data) => {
        setTeam(data);
      })
      .catch((err) => console.log(err));
  }, []);
  if (loading) {
    return null;
  }
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
              <a onClick={LearnMore} className="btn-get-started ">
                Know More
              </a>
            </div>
          </div>
        </div>
      </section>
      <div ref={AboutUsRef}>
        <AboutUs
          team={team}
          about={about}
          loading={loading}
          setLoading={setLoading}
        />
      </div>
    </div>
  );
};
export default Home;
