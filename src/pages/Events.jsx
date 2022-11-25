import React, { useState, useEffect, useRef } from "react";
import "../styles/events.scss";
import Event from "../components/event";
import CountDown from "../components/countdown";

function Events({ loading, setLoading }) {
  const [SearchEvent, setSearchEvent] = useState("");
  const eventRef = useRef();

  const LearnMore = () => {
    eventRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const [events, setEvents] = useState([]);
  const [current, setCurrent] = useState(false);
  useEffect(() => {
    setSearchEvent("");
    setLoading(true);
    fetch("https://timunservices.onrender.com/events")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  if (loading) {
    return null;
  }
  return (
    <div
      onLoad={() =>
        setCurrent(events.some((event) => event.status === "active"))
      }
    >
      <section
        id="events"
        className="d-flex justify-content-center align-items-center"
      >
        <div className=" d-flex justify-content-center position-relative">
          <div className="row ">
            <div className="col-xl-12">
              {events
                .filter((event) => event.status === "active")
                .map((event) => {
                  if (current) {
                    return <CountDown setCurrent={setCurrent} event={event} />;
                  } else {
                  }
                })}
              {current ? (
                ""
              ) : (
                <div id="Slogan">
                  <h2>Diplomacy is Our Policy </h2>
                  <h3>TIMUN TBS</h3>
                </div>
              )}
              <a onClick={LearnMore} href className="btn-get-started ">
                Know More
              </a>
            </div>
          </div>
        </div>
      </section>
      <div
        ref={eventRef}
        className=" d-flex col-md-12 align-items-stretch container justify-content-center    "
      >
        <div className="Event-title  col-xl-12   row  ">
          {" "}
          <section className="col-md-6 col-lg-6  ">
            <h3>Our events</h3>
          </section>
          <div class="col-md-6 col-lg-3 search-bar ">
            <input
              type="text"
              placeholder="Search Events"
              onChange={(e) => setSearchEvent(e.target.value)}
              value={SearchEvent}
            ></input>
            <button
              type="submit"
              onClick={() => {
                setSearchEvent("");
              }}
            >
              <i class="bi bi-x-lg"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="Event-title-after"></div>
      <section className="events-details">
        <div className="container  d-flex justify-content-center">
          {" "}
          <div className="row">
            {events
              .filter((event) => event.status === "inactive")
              .filter((event) =>
                event.name
                  .toLowerCase()
                  .includes(SearchEvent.toLocaleLowerCase())
              )
              .map((event) => (
                <Event event={event} />
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Events;
