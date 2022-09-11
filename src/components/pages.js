import React, { useEffect, useRef } from "react";
import "../styles/studyguide.scss";

function Pages({
  SearchSguide,
  sGuidePage,
  setSGuidePage,
  language,
  eventName,
  sGuides,
  UpPage,
  DownPage,
  MountStudy,
}) {
  useEffect(() => {
    setSGuidePage(1);
  }, []);

  return (
    <div class="pages">
      <ul class="justify-content-center">
        <button
          className={
            sGuidePage === 1 ||
            sGuides

              .filter((sguide) =>
                sguide.title
                  .toLowerCase()
                  .includes(SearchSguide.toLocaleLowerCase())
              )
              .filter((sguide) => sguide.language.includes(language))
              .filter((sguide) => sguide.event.includes(eventName)).length < 5
              ? "inactive"
              : "upDown"
          }
          onClick={() => {
            DownPage();
          }}
        >
          <i class="bi bi-chevron-double-left"></i>
        </button>
        {sGuides

          .filter((sguide) =>
            sguide.title
              .toLowerCase()
              .includes(SearchSguide.toLocaleLowerCase())
          )
          .filter((sguide) => sguide.language.includes(language))
          .filter((sguide) => sguide.event.includes(eventName))

          .filter(
            (sguide) =>
              sGuides
                .filter((sguide) =>
                  sguide.title
                    .toLowerCase()
                    .includes(SearchSguide.toLocaleLowerCase())
                )
                .filter((sguide) => sguide.language.includes(language))
                .filter((sguide) => sguide.event.includes(eventName))

                .indexOf(sguide) %
                4 ===
              0
          )
          .map((studyguide) => {
            return (
              <li>
                <button
                  className={
                    sGuidePage ===
                    sGuides

                      .filter((sguide) =>
                        sguide.title
                          .toLowerCase()
                          .includes(SearchSguide.toLocaleLowerCase())
                      )
                      .filter((sguide) => sguide.language.includes(language))
                      .filter((sguide) => sguide.event.includes(eventName))

                      .indexOf(studyguide) /
                      4 +
                      1
                      ? "active"
                      : ""
                  }
                  onClick={() => {
                    MountStudy(
                      sGuides

                        .filter((sguide) =>
                          sguide.title
                            .toLowerCase()
                            .includes(SearchSguide.toLocaleLowerCase())
                        )
                        .filter((sguide) => sguide.language.includes(language))
                        .filter((sguide) => sguide.event.includes(eventName))

                        .indexOf(studyguide) /
                        4 +
                        1
                    );
                  }}
                >
                  {sGuides

                    .filter((sguide) =>
                      sguide.title
                        .toLowerCase()
                        .includes(SearchSguide.toLocaleLowerCase())
                    )
                    .filter((sguide) => sguide.language.includes(language))
                    .filter((sguide) => sguide.event.includes(eventName))

                    .indexOf(studyguide) /
                    4 +
                    1}
                </button>
              </li>
            );
          })}
        <button
          onClick={() => {
            UpPage();
          }}
          className={
            sGuidePage ===
              Math.ceil(
                sGuides

                  .filter((sguide) =>
                    sguide.title
                      .toLowerCase()
                      .includes(SearchSguide.toLocaleLowerCase())
                  )
                  .filter((sguide) => sguide.language.includes(language))
                  .filter((sguide) => sguide.event.includes(eventName)).length /
                  4
              ) ||
            sGuides

              .filter((sguide) =>
                sguide.title
                  .toLowerCase()
                  .includes(SearchSguide.toLocaleLowerCase())
              )
              .filter((sguide) => sguide.language.includes(language))
              .filter((sguide) => sguide.event.includes(eventName)).length < 5
              ? "inactive"
              : "upDown"
          }
        >
          <i class="bi bi-chevron-double-right"></i>
        </button>
      </ul>
    </div>
  );
}
export default Pages;
