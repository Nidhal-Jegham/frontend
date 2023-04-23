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
    fetch(`https://timunbackend.onrender.com/articles`)
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

      <section className="Block">
        <div className="container d-flex justify-content-center">
          <div className="row">
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

            <div className="col-md-6 d-flex align-items-stretch">
              <div className="card">
                <div className="card-img">
                  <img
                    src="https://drive.google.com/uc?export=view&id=13WayWYJi_N2-z1x8Bk6TqBbVO35pVtCj"
                    alt="..."
                  ></img>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    <a
                      href="https://drive.google.com/file/d/1iqwsO8wV_bikMZobngNHDYPUFGDJNno2/view?usp=sharing"
                      target="_blank"
                    >
                      Las MUNAS: Diplomacy Against All Odds! Press Corps Report
                    </a>
                  </h5>
                  <p className="card-text">
                    {" "}
                    Unfortunately, due to the high temperature, the ice in the
                    northern route melted. So, here we are today in 2024, where
                    a meeting within the Crisis Committee takes place to discuss
                    this new polar silk road. The meeting was, since its
                    beginning, characterized by high tensions between all
                    parties involved in the dilemma. The delegates tried so hard
                    to protect their interests in the African and Asian regions
                    even if it cost them to declare war...
                  </p>

                  <h6 className="card-text ">
                    {" "}
                    <i className="bi bi-clock" /> {""}
                    <span>{"2022-08-22".toString().substring(0, 10)}</span>
                  </h6>

                  <p className="card-text">
                    <i className="bi bi-person" />{" "}
                    <span>
                      {" "}
                      Las MUNAS: Diplomacy Against All Odds! Press Corps
                    </span>
                  </p>
                  <div className="entry-content">
                    <div className="read-more">
                      <a
                        href="https://drive.google.com/file/d/1iqwsO8wV_bikMZobngNHDYPUFGDJNno2/view?usp=sharing"
                        target="_blank"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 d-flex align-items-stretch">
              <div className="card">
                <div className="card-img">
                  <img
                    src="https://res.cloudinary.com/daihyew9d/image/upload/v1671365986/timun_magazine_oxhpbh.jpg"
                    alt="..."
                  ></img>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    <a
                      href="https://drive.google.com/uc?export=view&id=1MsjYqR2SJ_UwcCPKrkkWFvyRCDIfNWDf"
                      target="_blank"
                    >
                      TIMUN TBS Magazine First Edition
                    </a>
                  </h5>
                  <p className="card-text">
                    {" "}
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

                  <h6 className="card-text ">
                    {" "}
                    <i className="bi bi-clock" /> {""}
                    <span>{"2021-05-08".toString().substring(0, 10)}</span>
                  </h6>

                  <p className="card-text">
                    <i className="bi bi-person" />{" "}
                    <span> TIMUN TBS Academics</span>
                  </p>
                  <div className="entry-content">
                    <div className="read-more">
                      <a
                        href="https://drive.google.com/uc?export=view&id=1MsjYqR2SJ_UwcCPKrkkWFvyRCDIfNWDf"
                        target="_blank"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Articles;
