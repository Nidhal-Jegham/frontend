import React, { useEffect } from "react";
import "../styles/studyguide.scss";
function Sidebar({
  SearchSguide,
  setSearchSguide,
  setSGuidePage,
  events,
  setEvents,
  language,
  eventName,
  changeLanguage,
  changeEvent,
  sGuides,
  setSGuides,
}) {
  const DeleteSguide = () => {
    setSearchSguide("");
    setSGuidePage(1);
  };
  useEffect(() => {
    setSGuidePage(1);
    fetch(`${process.env.REACT_APP_API_URL}/sguides`)
      .then((res) => res.json())
      .then((data) => {
        setSGuides(data);
      })
      .catch((err) => console.log(err));
    fetch(`${process.env.REACT_APP_API_URL}/events`)
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="sidebar">
      <h3 className="sidebar-title">Search</h3>
      <div className="sidebar-item search-form">
        <input
          type="text"
          placeholder="Search Study Guide"
          onChange={(e) => setSearchSguide(e.target.value)}
          value={SearchSguide}
        ></input>
        <button type="submit" onClick={() => DeleteSguide()}>
          <i className="bi bi-x-lg"></i>
        </button>
      </div>

      <h3 className="sidebar-title">Languages</h3>
      <div className="sidebar-item categories">
        <ul>
          <li
            onClick={() => changeLanguage("")}
            className={language === "" ? "active" : ""}
          >
            All
            <span>({sGuides.length})</span>
          </li>
          <li
            onClick={() => changeLanguage("EN")}
            className={language === "EN" ? "active" : ""}
          >
            English
            <span>
              ({sGuides.filter((sGuide) => sGuide.language === "EN").length})
            </span>
          </li>
          <li
            onClick={() => changeLanguage("FR")}
            className={language === "FR" ? "active" : ""}
          >
            French
            <span>
              ({sGuides.filter((sGuide) => sGuide.language === "FR").length})
            </span>
          </li>
          <li
            onClick={() => changeLanguage("AR")}
            className={language === "AR" ? "active" : ""}
          >
            Arabic
            <span>
              ({sGuides.filter((sGuide) => sGuide.language === "AR").length})
            </span>
          </li>
        </ul>
      </div>
      <h3 className="sidebar-title">Events</h3>
      <div className="sidebar-item categories">
        <ul>
          <li
            onClick={() => changeEvent("")}
            className={eventName === "" ? "active" : ""}
          >
            All
            <span>({sGuides.length})</span>
          </li>
          <li
            onClick={() => changeEvent("MWTO")}
            className={eventName.includes("MWTO") ? "active" : ""}
          >
            Model World Trade Organization
            <span>
              (
              {sGuides.filter((sGuide) => sGuide.event.includes("MWTO")).length}
              )
            </span>
          </li>
          <li
            onClick={() => changeEvent("ARP")}
            className={eventName.includes("ARP") ? "active" : ""}
          >
            Model ARP{" "}
            <span>
              ({sGuides.filter((sGuide) => sGuide.event.includes("ARP")).length}
              )
            </span>
          </li>
          <li
            onClick={() => changeEvent("Immunity")}
            className={eventName.includes("Immunity") ? "active" : ""}
          >
            Immunity MUN{" "}
            <span>
              (
              {
                sGuides.filter((sGuide) => sGuide.event.includes("Immunity"))
                  .length
              }
              )
            </span>
          </li>
          <li
            onClick={() => changeEvent("TBS MUN")}
            className={eventName.includes("TBS MUN") ? "active" : ""}
          >
            TBS MUN{" "}
            <span>
              (
              {
                sGuides.filter((sGuide) => sGuide.event.includes("TBS MUN"))
                  .length
              }
              )
            </span>
          </li>
          <li
            onClick={() => changeEvent("Las MUNAS")}
            className={eventName.includes("Las MUNAS") ? "active" : ""}
          >
            Las MUNAS
            <span>
              (
              {
                sGuides.filter((sGuide) => sGuide.event.includes("Las MUNAS"))
                  .length
              }
              )
            </span>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="sidebar-title">Recent Events</h3>
        <div className="sidebar-item recent-posts">
          {events
            .filter((event) => events.indexOf(event) < 5)
            .map((event) => (
              <div className="post-item clearfix">
                <img src={event.cover} alt="..." />{" "}
                <h4>
                  <a href={event.drive} target="_blank">
                    {event.name}{" "}
                  </a>
                </h4>
                <time>{event.date.toString().substring(0, 10)}</time>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
