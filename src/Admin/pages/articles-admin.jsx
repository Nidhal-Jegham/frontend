import React, { useEffect, useState } from "react";

import "../styles/admin.scss";
function ArticleAdmin({ token }) {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3200/articles")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
      })
      .catch((err) => console.log(err));
  }, []);
  if (!window.localStorage.getItem("auth"))
    return alert("You have no authority to be on this page");
  const updateData = (e, article) => {
    e.preventDefault();
    const formData = {
      _id: article._id,
      title: e.target.title.value,
      articles: e.target.articles.value.split("/"),
      author: e.target.author.value,
      content: e.target.content.value,
      date: e.target.date.value,
    };
    console.log("gg", formData);

    fetch("http://localhost:3200/admin/articles", {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => {
        if (err) throw err;
      });
  };

  const addData = (e) => {
    const formData = {
      title: e.target.title.value,
      articles: e.target.articles.value.split("/"),
      author: e.target.author.value,
      content: e.target.content.value,
      date: e.target.date.value,
    };
    fetch("http://localhost:3200/admin/articles", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    }).catch((err) => {
      if (err) throw err;
    });
  };

  const deleteData = (article) => {
    const toDelete = {
      _id: article._id,
    };
    fetch("http://localhost:3200/admin/articles", {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(toDelete),
    })
      .then((res) => console.log(res.json()))
      .catch((err) => {
        if (err) throw err;
      });
  };

  return (
    <div className="component">
      {articles.map((article) => {
        return (
          <div className="Flex">
            <div>
              <h6>title: {article.title}</h6>
              <h6>articles: {article.articles}</h6>
              <h6>author: {article.author}</h6>
              <h6>content: {article.content}</h6>
              <h6>date: {article.date}</h6>
              <button onClick={() => deleteData(article)}>Delete</button>
            </div>
            <form className="Flex" onSubmit={(e) => updateData(e, article)}>
              <input placeholder="title" type="text" name="title"></input>
              <input placeholder="articles" type="text" name="articles"></input>
              <input placeholder="author" type="text" name="author"></input>
              <input placeholder="content" type="text" name="content"></input>
              <input placeholder="date" type="text" name="date"></input>
              <input type="submit"></input>
            </form>
          </div>
        );
      })}
      <form className="FLex" onSubmit={(e) => addData(e)}>
        <input type="text" placeholder="title" name="title"></input>
        <input type="text" placeholder="articles" name="articles"></input>
        <input type="text" placeholder="author" name="author"></input>
        <input type="text" placeholder="content" name="content"></input>
        <input type="text" placeholder="date" name="date"></input>

        <input type="submit"></input>
      </form>
    </div>
  );
}
export default ArticleAdmin;
