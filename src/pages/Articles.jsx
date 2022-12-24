import React from "react";
import "../styles/article.scss";

import Article from "../components/article";
import { useState, useEffect, useRef } from "react";

function Articles({ setLoading, loading }) {
  const ArticleRef = useRef();

  const LearnMore = () => {
    ArticleRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.REACT_APP_API_URL}/articles`)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })

      .catch((err) => console.log(err));
  }, []);
  if (loading) return null;
  return (
    <div>
      <section
        id="articles"
        className="d-flex justify-cntent-center align-items-center"
      >
        <div className="container position-relative  d-flex justify-content-center">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <h2>Diplomacy of The Future </h2>
              <h3>TIMUN TBS</h3>
              <a onClick={LearnMore} className="btn-get-started ">
                Know More
              </a>
            </div>
          </div>
        </div>
      </section>
      <div ref={ArticleRef} className="title">
        {" "}
        <h3>Our Articles</h3>
      </div>

      <section className="Block ">
        <div className="container d-flex justify-content-center">
          <div className="row">
            <div className="col-xl-12 magazine">
              <article className="entry entry-single">
                <div className="active entry-img"></div>
                <h2 className="entry-title">
                  <a
                    href="https://drive.google.com/file/d/1iqwsO8wV_bikMZobngNHDYPUFGDJNno2/view?usp=sharing"
                    target="_blank"
                  >
                    Las MUNAS: Diplomacy Against All Odds! Press Corps Report
                  </a>
                </h2>
                <div className="entry-meta">
                  <ul>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-person" />
                      <span>
                        {" "}
                        Las MUNAS: Diplomacy Against All Odds! Press Corps
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-clock" />{" "}
                      <span>{"8/20/2022".toString().substring(0, 10)}</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-chat-dots" />{" "}
                      <span>4{" article(s)"} </span>
                    </li>
                  </ul>
                </div>
                <div className="entry-content">
                  <p className="Active">
                    Unfortunately, due to the high temperature, the ice in the
                    northern route melted. So, here we are today in 2024, where
                    a meeting within the Crisis Committee takes place to discuss
                    this new polar silk road. The meeting was, since its
                    beginning, characterized by high tensions between all
                    parties involved in the dilemma. The delegates tried so hard
                    to protect their interests in the African and Asian regions
                    even if it cost them to declare war...
                  </p>

                  <div className="read-more">
                    {" "}
                    <a
                      href="https://drive.google.com/file/d/1iqwsO8wV_bikMZobngNHDYPUFGDJNno2/view?usp=sharing_"
                      target="_blank"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-xl-12 magazine">
              <article className="entry entry-single">
                <div className="active entry-img"></div>
                <h2 className="entry-title">
                  <a
                    href="https://drive.google.com/uc?export=view&id=1MsjYqR2SJ_UwcCPKrkkWFvyRCDIfNWDf"
                    target="_blank"
                  >
                    TIMUN TBS Magazine First Edition
                  </a>
                </h2>
                <div className="entry-meta">
                  <ul>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-person" />
                      <span> TIMUN TBS Academics</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-clock" />{" "}
                      <span>{"5/8/2021".toString().substring(0, 10)}</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-chat-dots" />{" "}
                      <span>10{" article(s)"} </span>
                    </li>
                  </ul>
                </div>
                <div className="entry-content">
                  <p className="Active">
                    Due to the COVID-19 wave, we all got -more or less- familiar
                    with the medicine development process. However, the still
                    ongoing rumors about this vaccine’s side effects, or the
                    other’s inefficacy have proven that a drug’s effect can be
                    misleading and unpredicted. This is exactly the case for
                    Oslo Accords, this controversial series of interim
                    agreements regarding the status of the West Bank & Gaza
                    Strip, negotiated between the Palestine Liberation
                    Organization (PLO) - the representative body of the
                    Palestinian people- and Israel in 1993...
                  </p>

                  <div className="read-more">
                    {" "}
                    <a
                      href="https://drive.google.com/uc?export=view&id=1MsjYqR2SJ_UwcCPKrkkWFvyRCDIfNWDf"
                      target="_blank"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </article>
            </div>
            {articles.map((article) => {
              const subjects = article.articles;
              return (
                <Article
                  key={article._id}
                  article={article}
                  subjects={subjects}
                  articleNames={article.articles}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Articles;
