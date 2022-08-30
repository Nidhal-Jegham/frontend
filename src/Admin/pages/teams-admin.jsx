import React, { useEffect, useState } from "react";

import "../styles/admin.scss";
function TeamsAdmin() {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/home/teams`)
      .then((res) => res.json())
      .then((data) => {
        setTeams(data);
      })
      .catch((err) => console.log(err));
  }, []);
  if (!window.localStorage.getItem("auth"))
    return alert("You have no positionity to be on this page");
  const updateData = (e, team) => {
    const formData = {
      _id: team._id,
      name: e.target.name.value,
      position: e.target.position.value,
      description: e.target.description.value,
      src: e.target.src.value,

      accounts: {
        facebook: e.target.facebook.value,
        insta: e.target.insta.value,
        linkedin: e.target.linkedin.value,
      },
    };
    fetch(`${process.env.REACT_APP_API_URL}/admin/home/teams`, {
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
      name: e.target.name.value,
      position: e.target.position.value,
      description: e.target.description.value,
      src: e.target.src.value,
      accounts: {
        facebook: e.target.facebook.value,
        insta: e.target.insta.value,
        linkedin: e.target.linkedin.value,
      },
    };
    fetch(`${process.env.REACT_APP_API_URL}/admin/home/teams`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    }).catch((err) => {
      if (err) throw err;
    });
  };

  const deleteData = (team) => {
    const toDelete = {
      _id: team._id,
    };
    fetch(`${process.env.REACT_APP_API_URL}/admin/home/teams`, {
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
      {teams.map((team) => {
        return (
          <div className="Flex">
            <div>
              <h6>title: {team.name}</h6>
              <h6>position: {team.position}</h6>
              <h6>description: {team.description}</h6>
              <h6>Src: {team.src}</h6>

              <h6>facebook: {team.accounts.facebook}</h6>
              <h6>insta: {team.accounts.insta}</h6>
              <h6>linkedin: {team.accounts.linkedin}</h6>

              <button onClick={() => deleteData(team)}>Delete</button>
            </div>
            <form className="Flex" onSubmit={(e) => updateData(e, team)}>
              <input type="text" placeholder="name" name="name"></input>
              <input type="text" placeholder="position" name="position"></input>
              <input
                type="text"
                placeholder="description"
                name="description"
              ></input>
              <input type="text" placeholder="src" name="src"></input>

              <input type="text" placeholder="facebook" name="facebook"></input>
              <input type="text" placeholder="insta" name="insta"></input>
              <input type="text" placeholder="linkedin" name="linkedin"></input>
              <input type="submit"></input>
            </form>
          </div>
        );
      })}
      <form className="Flex" onSubmit={(e) => addData(e)}>
        <input type="text" placeholder="name" name="name"></input>
        <input type="text" placeholder="position" name="position"></input>
        <input type="text" placeholder="description" name="description"></input>
        <input type="text" placeholder="src" name="src"></input>

        <input type="text" placeholder="facebook" name="facebook"></input>
        <input type="text" placeholder="insta" name="insta"></input>
        <input type="text" placeholder="linkedin" name="linkedin"></input>
        <input type="submit"></input>
      </form>
    </div>
  );
}
export default TeamsAdmin;
