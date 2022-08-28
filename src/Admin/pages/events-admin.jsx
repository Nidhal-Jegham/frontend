import React, { useEffect, useState } from "react";
import "../styles/admin.scss";

function EventAdmin() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3200/events")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEvents(data);
      })
      .catch((err) => console.log(err));
  }, []);
  if (!window.localStorage.getItem("auth"))
    return alert("You have no authority to be on this page");

  const updateData = (e, event) => {
    const formData = {
      _id: event._id,
      name: e.target.name.value,
      cover: e.target.cover.value,
      date: e.target.date.value,
      status: e.target.status.value,
      mandate: e.target.mandate.value,
      aftermovie: e.target.aftermovie.value,
      drive: e.target.drive.value,
      sponsors: e.target.sponsors.value.split("/"),
      description: e.target.description.value,
    };
    fetch("http://localhost:3200/admin/events", {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    }).catch((err) => {
      if (err) throw err;
    });
  };

  const addData = (e) => {
    const formData = {
      name: e.target.name.value,
      cover: e.target.cover.value,
      date: e.target.date.value,
      status: e.target.status.value,
      mandate: e.target.mandate.value,
      aftermovie: e.target.aftermovie.value,

      drive: e.target.drive.value,
      sponsors: e.target.sponsors.value.split("/"),
      description: e.target.description.value,
    };
    fetch("http://localhost:3200/admin/events", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    }).catch((err) => {
      if (err) throw err;
    });
  };

  const deleteData = (event) => {
    const toDelete = {
      _id: event._id,
    };
    fetch("http://localhost:3200/admin/events", {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(toDelete),
    }).catch((err) => {
      if (err) throw err;
    });
  };

  return (
    <div className="container d-flex justify-content-center">
      {events.map((event) => {
        return (
          <div className="Flex">
            <div>
              <h6>name: {event.name}</h6>
              <h6>cover: {event.cover}</h6>
              <h6>date: {event.date}</h6>
              <h6>status: {event.status}</h6>
              <h6>Pictures:{event.mandate}</h6>
              <h6>AfterMovie:{event.AfterMovie}</h6>

              <h6>drive: {event.drive}</h6>
              <h6>sponsors: {event.sponsors}</h6>
              <h6>description: {event.description}</h6>
              <button onClick={() => deleteData(event)}>Delete</button>
            </div>
            <form onSubmit={(e) => updateData(e, event)}>
              <input type="text" placeholder="name" name="name"></input>
              <input type="text" placeholder="cover" name="cover"></input>
              <input type="text" placeholder="date" name="date"></input>
              <input type="text" placeholder="status" name="status"></input>
              <input type="text" placeholder="pictures" name="mandate"></input>
              <input
                type="text"
                placeholder="aftermovie"
                name="aftermovie"
              ></input>

              <input type="text" placeholder="drive" name="drive"></input>
              <input type="text" placeholder="sponsors" name="sponsors"></input>
              <input
                type="text"
                placeholder="description"
                name="description"
              ></input>

              <input type="submit"></input>
            </form>
          </div>
        );
      })}
      <form className="Flex" onSubmit={(e) => addData(e)}>
        <input type="text" placeholder="name" name="name"></input>
        <input type="text" placeholder="cover" name="cover"></input>
        <input type="text" placeholder="date" name="date"></input>
        <input type="text" placeholder="status" name="status"></input>
        <input type="text" placeholder="pictures" name="mandate"></input>
        <input type="text" placeholder="drive" name="drive"></input>
        <input type="text" placeholder="aftermovie" name="aftermovie"></input>
        <input type="text" placeholder="sponsors" name="sponsors"></input>
        <input type="text" placeholder="description" name="description"></input>

        <input type="submit"></input>
      </form>
    </div>
  );
}
export default EventAdmin;
