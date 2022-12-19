import React, { useState, useEffect, useRef } from "react";
import "../styles/article-single.scss";
import "../styles/studyguide.scss";

function ArticleSingle({ setLoading }) {
  const [articless, setArticles] = useState([]);
  const articleRef = useRef();

  const LearnMore = () => {
    articleRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    setLoading(false);
    fetch("https://timunservices.onrender.com/articles")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })

      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <section
        id="article"
        className=" a d-flex justify-cntent-center align-items-center"
        style={{
          background: `linear-gradient(
            to right,
            rgba(20, 51, 90, 0.6),
            rgba(20, 51, 90, 0.6)
          ),
          url('https://cdn.cfr.org/sites/default/files/styles/full_width_xl/public/image/2020/12/arabspring_0.jpg.webp') center top no-repeat`,
          backgroundSize: `cover`,

          height: "100vh",
        }}
      >
        <div className="container position-relative  d-flex justify-content-center">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <h2>Arab Spring From Tunisia to the Arab World </h2>
              <h3>Roudaina Hamrouni</h3>
              <a href className="btn-get-started " onClick={LearnMore}>
                Know More
              </a>
            </div>
          </div>
        </div>
      </section>
      <main ref={articleRef} id="main">
        <section id="blog" className="blog d-flex justify-content-center">
          <div className="container d-flex justify-content-center">
            <div className="row d-flex justify-content-center">
              <div className="col-md-8 d-flex justify-content-center align-items-stretch">
                <article className="entry entry-single">
                  <div className="entry-img">
                    <img
                      src="https://cdn.cfr.org/sites/default/files/styles/full_width_xl/public/image/2020/12/arabspring_0.jpg.webp"
                      alt
                      className="img-fluid"
                    />{" "}
                  </div>
                  <h2 className="entry-title">
                    <a href="blog-single.html">
                      Arab Spring From Tunisia to the Arab World
                    </a>
                  </h2>

                  <div className="entry-meta"></div>
                  <div className="entry-content">
                    <div className="entry-img"></div>
                    <p>
                      <i></i>
                    </p>
                    <blockquote>
                      <p>
                        The Arab world has experienced enormous developments in
                        the recent decade, propelling it to the top of the
                        global news agenda. The Arab Spring is the biggest event
                        that has taken over its political picture; a series of
                        anti-government protests that extended throughout
                        several nations in the Arab world, beginning in Tunisia
                        and progressing to the rest of the countries
                      </p>
                    </blockquote>
                    <p>
                      The Tunisian Revolution, commonly known as the “Jasmine
                      Revolution,” lasted 28 days full of demonstrations,
                      contests, and rebellion events. As every event has its
                      drivers, the Tunisian Revolution was the consequence of
                      numerous accumulated issues that the citizens have been
                      dealing with for many decades. There were other elements,
                      including unemployment, food inflation, corruption, a lack
                      of political freedom, especially freedom of expression,
                      and bad living circumstances. However, dictatorship played
                      a significant effect in the development of these
                      variables. It wasn’t simply that individuals were
                      forbidden from expressing their opinions explicitly, but
                      they were also harassed, humiliated, evicted from their
                      homes, and imprisoned for no apparent cause.
                    </p>
                    <div className="mid-img">
                      <img
                        src="https://cdn.cfr.org/sites/default/files/styles/full_width_xl/public/image/2020/12/arabspring_0.jpg.webp"
                        alt
                        className="img-fluid"
                      />{" "}
                    </div>
                    <p>
                      The Tunisian Revolution, commonly known as the “Jasmine
                      Revolution,” lasted 28 days full of demonstrations,
                      contests, and rebellion events. As every event has its
                      drivers, the Tunisian Revolution was the consequence of
                      numerous accumulated issues that the citizens have been
                      dealing with for many decades. There were other elements,
                      including unemployment, food inflation, corruption, a lack
                      of political freedom, especially freedom of expression,
                      and bad living circumstances. However, dictatorship played
                      a significant effect in the development of these
                      variables. It wasn’t simply that individuals were
                      forbidden from expressing their opinions explicitly, but
                      they were also harassed, humiliated, evicted from their
                      homes, and imprisoned for no apparent cause.
                    </p>
                  </div>
                </article>
              </div>
              {/* End blog entries list */}
              <div className="col-lg-4 d-flex justify-content-center align-items-stretch">
                <div className="sidebar">
                  <h3 className="sidebar-title">Recent Articles</h3>
                  <div className="sidebar-item recent-posts">
                    {articless.map((artc) => (
                      <div className="post-item clearfix">
                        <img src={artc.img} alt="..." />{" "}
                        <h4>
                          <a href={artc.title} target="_blank">
                            {artc.title}{" "}
                          </a>
                        </h4>
                        <h6>{artc.author}</h6>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
export default ArticleSingle;
