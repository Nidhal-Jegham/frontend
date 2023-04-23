import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useRef } from "react";

const Article = ({ article, subjects }) => {
  const [clicked, setClicked] = useState(false);
  const articleRef = useRef();
  const ReadMore = () => {
    setClicked(!clicked);

    articleRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="col-md-6 d-flex align-items-stretch">
      <div className="card">
        <div className="card-img">
          <img src={article.cover} alt="..."></img>
        </div>
        <div className="card-body">
          <h5 className="card-title">
            <a href={article.content} target="_blank">
              {article.title}
            </a>
          </h5>
          <p className="card-text">{article.description}</p>

          <h6 className="card-text ">
            {" "}
            <i className="bi bi-clock" /> {""}
            <span>{article.date.toString().substring(0, 10)}</span>
          </h6>

          <p className="card-text">
            <i className="bi bi-person" /> <span>{article.author}</span>
          </p>
          <div className="entry-content">
            <div className="read-more">
              <a href={article.content} target="_blank">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Article.propTypes = {
  articleNames: PropTypes.array.isRequired,
};
export default Article;
