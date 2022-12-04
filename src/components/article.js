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
    <div ref={articleRef} className="col-xl-12 magazine">
      <article className="entry entry-single">
        <div className={clicked ? "active entry-img" : "inactive"}>
          <img
            src="https://cdn.cfr.org/sites/default/files/styles/full_width_xl/public/image/2020/12/arabspring_0.jpg.webp"
            alt
            className="img-fluid"
          />{" "}
        </div>
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
          <p className={clicked ? "inactive" : "Active"}>
            {" "}
            {article.description}
          </p>
          <p className={clicked ? "active" : "inactive"}>
            <i>htrhjrtjrtjrtj</i>
          </p>

          <blockquote className={clicked ? "active" : "inactive"}>
            <p>
              The Arab world has experienced enormous developments in the recent
              decade, propelling it to the top of the global news agenda. The
              Arab Spring is the biggest event that has taken over its political
              picture; a series of anti-government protests that extended
              throughout several nations in the Arab world, beginning in Tunisia
              and progressing to the rest of the countries
            </p>
          </blockquote>
          <p className={clicked ? "active" : "inactive"}>
            The Tunisian Revolution, commonly known as the “Jasmine Revolution,”
            lasted 28 days full of demonstrations, contests, and rebellion
            events. As every event has its drivers, the Tunisian Revolution was
            the consequence of numerous accumulated issues that the citizens
            have been dealing with for many decades. There were other elements,
            including unemployment, food inflation, corruption, a lack of
            political freedom, especially freedom of expression, and bad living
            circumstances. However, dictatorship played a significant effect in
            the development of these variables. It wasn’t simply that
            individuals were forbidden from expressing their opinions
            explicitly, but they were also harassed, humiliated, evicted from
            their homes, and imprisoned for no apparent cause.
          </p>
          <div className={clicked ? "active mid-img" : "inactive"}>
            <img
              src="https://cdn.cfr.org/sites/default/files/styles/full_width_xl/public/image/2020/12/arabspring_0.jpg.webp"
              alt
              className="img-fluid"
            />{" "}
          </div>
          <p className={clicked ? "active" : "inactive"}>
            The Tunisian Revolution, commonly known as the “Jasmine Revolution,”
            lasted 28 days full of demonstrations, contests, and rebellion
            events. As every event has its drivers, the Tunisian Revolution was
            the consequence of numerous accumulated issues that the citizens
            have been dealing with for many decades. There were other elements,
            including unemployment, food inflation, corruption, a lack of
            political freedom, especially freedom of expression, and bad living
            circumstances. However, dictatorship played a significant effect in
            the development of these variables. It wasn’t simply that
            individuals were forbidden from expressing their opinions
            explicitly, but they were also harassed, humiliated, evicted from
            their homes, and imprisoned for no apparent cause.
          </p>
          <div className="read-more">
            <button onClick={() => ReadMore()}>
              {" "}
              {clicked ? "Collapse" : "Read More"}
            </button>
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
