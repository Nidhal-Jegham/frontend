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
                {article.articles.length} {"article/s"}{" "}
              </span>
            </li>
          </ul>
        </div>
        <div className="entry-content">
          <p>
            Due to the COVID-19 wave, we all got -more or less- familiar with
            the medicine development process. However, the still ongoing rumors
            about this vaccine’s side effects, or the other’s inefficacy have
            proven that a drug’s effect can be misleading and unpredicted. This
            is exactly the case for Oslo Accords, this controversial series of
            interim agreements regarding the status of the West Bank & Gaza
            Strip, negotiated between the Palestine Liberation Organization
            (PLO) - the representative body of the Palestinian people- and
            Israel in 1993.
          </p>
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
