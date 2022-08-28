import React, { useEffect, useState } from "react";

import "../styles/admin.scss";
function SGuidesAdmin() {
  const [sGuides, setSGuides] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3200/sguides")
      .then((res) => res.json())
      .then((data) => {
        setSGuides(data);
      })
      .catch((err) => console.log(err));
  }, []);
  if (!window.localStorage.getItem("auth"))
    return alert("You have no authority to be on this page");
  const updateData = (e, studyguide) => {
    console.log(studyguide);
    const formData = {
      _id: studyguide._id,
      title: e.target.title.value,
      organ: e.target.organ.value,
      content: e.target.content.value,
      full: e.target.full.value,
      event: e.target.event.value,
    };
    fetch("http://localhost:3200/admin/sguides", {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => console.log(res))
      .catch((err) => {
        if (err) throw err;
      });
  };

  const addData = (e) => {
    const formData = {
      title: e.target.title.value,
      organ: e.target.organ.value,
      date: e.target.date.value,
      content: e.target.content.value,
      full: e.target.full.value,
      event: e.target.event.value,
    };
    fetch("http://localhost:3200/admin/sguides", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    }).catch((err) => {
      if (err) throw err;
    });
  };

  const deleteData = (studyguide) => {
    console.log(studyguide);
    const toDelete = {
      _id: studyguide._id,
    };
    fetch("http://localhost:3200/admin/sguides", {
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
    <div className="component">
      {sGuides.map((studyguide) => {
        return (
          <div className="Flex">
            <div>
              <h6>title: {studyguide.title}</h6>
              <h6>organ: {studyguide.organ}</h6>
              <h6>content: {studyguide.content}</h6>
              <h6>date: {studyguide.date}</h6>
              <h6>full: {studyguide.full}</h6>
              <h6>event: {studyguide.event}</h6>

              <button onClick={() => deleteData(studyguide)}>Delete</button>
            </div>
            <form className="Flex" onSubmit={(e) => updateData(e, studyguide)}>
              <input type="text" placeholder="title" name="title"></input>
              <input type="text" placeholder="organ" name="organ"></input>
              <input type="text" placeholder="content" name="content"></input>
              <input type="text" placeholder="date" name="date"></input>
              <input type="text" placeholder="full" name="full"></input>
              <input type="text" placeholder="event" name="event"></input>
              <input type="submit"></input>
            </form>
          </div>
        );
      })}
      <form className="Flex" onSubmit={(e) => addData(e)}>
        <input type="text" placeholder="title" name="title"></input>

        <input type="text" placeholder="organ" name="organ"></input>
        <input type="text" placeholder="content" name="content"></input>
        <input type="text" placeholder="date" name="date"></input>
        <input type="text" placeholder="full" name="full"></input>
        <input type="text" placeholder="event" name="event"></input>
        <input type="submit"></input>
      </form>
    </div>
  );
}
export default SGuidesAdmin;
