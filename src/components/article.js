import React from "react";
import PropTypes from "prop-types";

const Article = ({ article, subjects }) => {
  return (
    <div className="col-xl-12 magazine">
      <article className="entry">
        <h2 className="entry-title">
          <a href={article.content} target="_blank">
            {article.title}
          </a>
        </h2>
        <div className="entry-meta">
          <ul>
            <li className="d-flex align-items-center">
              <i className="bi bi-person" />
              <span> {article.author}</span>
            </li>
            <li className="d-flex align-items-center">
              <i className="bi bi-clock" />{" "}
              <span>{article.date.toString().substring(0, 10)}</span>
            </li>
            <li className="d-flex align-items-center">
              <i className="bi bi-chat-dots" />{" "}
              <span>
                {" "}
                {article.articles.length} {"article(s)"}{" "}
              </span>
            </li>
          </ul>
        </div>
        <div className="entry-content">
          <p>{article.description}</p>
          <div className="read-more">
            <a href={article.content} target="_blank">
              Read More
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};
Article.propTypes = {
  articleNames: PropTypes.array.isRequired,
};
export default Article;
