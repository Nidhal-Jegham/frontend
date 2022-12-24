import React, { useEffect, useState, useRef } from "react";
import "../styles/studyguide.scss";

import Studyguide from "../components/studyguide";
import Sidebar from "../components/sidebar";
import Pages from "../components/pages";
function SGuides({ loading, setLoading }) {
  const [SearchSguide, setSearchSguide] = useState("");
  const [sGuidePage, setSGuidePage] = useState(1);
  const [events, setEvents] = useState([]);

  const [language, setLanguage] = useState("");
  const [eventName, setEventName] = useState("");

  const studyRef = useRef();

  const changeLanguage = (langue) => {
    studyRef.current.scrollIntoView({ behavior: "smooth" });
    setSGuidePage(1);
    setLanguage(langue);
  };
  const changeEvent = (eventt) => {
    studyRef.current.scrollIntoView({ behavior: "smooth" });
    setSGuidePage(1);
    setEventName(eventt);
  };
  const LearnMore = () => {
    studyRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const [sGuides, setSGuides] = useState([]);
  const MountStudy = (studyguide) => {
    studyRef.current.scrollIntoView({ behavior: "smooth" });
    setSGuidePage(studyguide);
  };
  const UpPage = (studyguide) => {
    studyRef.current.scrollIntoView({ behavior: "smooth" });
    setSGuidePage(
      Math.ceil(
        sGuides
          .filter((sguide) =>
            sguide.title
              .toLowerCase()
              .includes(SearchSguide.toLocaleLowerCase())
          )
          .filter((sguide) => sguide.language.includes(language))
          .filter((sguide) => sguide.event.includes(eventName)).length / 4
      )
    );
  };
  const DownPage = (studyguide) => {
    studyRef.current.scrollIntoView({ behavior: "smooth" });
    setSGuidePage(1);
  };
  useEffect(() => {
    setLoading(true);
    setEventName("");
    setLanguage("");
    setSGuidePage(1);
    fetch(`${REACT_APP_API_URL}/sguides`)
      .then((res) => res.json())
      .then((data) => {
        setSGuides(data);

        setLoading(false);
      })
      .catch((err) => console.log(err));
    fetch(`${REACT_APP_API_URL}/events`)
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (loading) return null;
  return (
    <div>
      <section
        id="studyguides"
        className="d-flex justify-cntent-center align-items-center"
      >
        <div className="container position-relative  d-flex justify-content-center ">
          <div className="row d-flex justify-content-center">
            <div className="col-xl-8">
              <h2>Sharing Academic Knowledge </h2>
              <h3>TIMUN TBS</h3>
              <a onClick={LearnMore} className="btn-get-started ">
                Know More
              </a>
            </div>
          </div>
        </div>
      </section>
      <div ref={studyRef} className=" d-flex  justify-content-center   ">
        <div className="Study-title d-flex col-xl-12 align-items-center justify-content-center   ">
          {" "}
          <section>
            <h3>Our Study Guides</h3>
          </section>
        </div>
      </div>

      <div className="Study-title-after"></div>

      <section>
        <div className=" d-flex justify-content-center">
          <div className="row">
            <div className="col-lg-8 entries ">
              {sGuides

                .filter((sguide) =>
                  sguide.title
                    .toLowerCase()
                    .includes(SearchSguide.toLocaleLowerCase())
                )
                .filter((sguide) => sguide.language.includes(language))
                .filter((sguide) => sguide.event.includes(eventName))

                .filter(
                  (Sguide) =>
                    sGuides
                      .filter((sguide) =>
                        sguide.title
                          .toLowerCase()
                          .includes(SearchSguide.toLocaleLowerCase())
                      )
                      .filter((sguide) => sguide.language.includes(language))
                      .filter((sguide) => sguide.event.includes(eventName))

                      .indexOf(Sguide) >=
                    (sGuidePage - 1) * 4
                )

                .filter(
                  (Sguide) =>
                    sGuides
                      .filter((sguide) =>
                        sguide.title
                          .toLowerCase()
                          .includes(SearchSguide.toLocaleLowerCase())
                      )
                      .filter((sguide) => sguide.language.includes(language))
                      .filter((sguide) => sguide.event.includes(eventName))

                      .indexOf(Sguide) <=
                    sGuidePage * 4 - 1
                )

                .map((studyguide) => {
                  return (
                    <Studyguide key={studyguide._id} studyguide={studyguide} />
                  );
                })}
            </div>
            <div className="col-lg-4 block  d-flex justify-content-center ">
              <Sidebar
                key={changeEvent}
                changeEvent={changeEvent}
                changeLanguage={changeLanguage}
                SearchSguide={SearchSguide}
                setSearchSguide={setSearchSguide}
                setSGuidePage={setSGuidePage}
                events={events}
                setEvents={setEvents}
                language={language}
                eventName={eventName}
                sGuides={sGuides}
                setSGuides={setSGuides}
              />
            </div>
          </div>
        </div>
      </section>
      <Pages
        key={setEvents}
        setEvents={setEvents}
        setSGuides={setSGuides}
        SearchSguide={SearchSguide}
        sGuidePage={sGuidePage}
        setSGuidePage={setSGuidePage}
        language={language}
        eventName={eventName}
        sGuides={sGuides}
        UpPage={UpPage}
        DownPage={DownPage}
        MountStudy={MountStudy}
      />
    </div>
  );
}

export default SGuides;
