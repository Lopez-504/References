import { useState } from "react";
import papers from "../data/papers";
import "./papersCatalogue.css";

function PaperCard({ paper }) {
  const [currentFigure, setCurrentFigure] = useState(0);

  const nextFigure = () => {
    setCurrentFigure((prev) =>
      prev === paper.figures.length - 1 ? 0 : prev + 1
    );
  };

  const previousFigure = () => {
    setCurrentFigure((prev) =>
      prev === 0 ? paper.figures.length - 1 : prev - 1
    );
  };

  return (
    <>
    <div className="sup-title">
      <h1>{paper.title}</h1>
    </div>
    <article className="paper-card">
      {/* FIRST PAGE */}
      <div className="paper-first-page">
        {/*<img
          src={paper.firstPage}
          alt={`First page of ${paper.title}`}
        />*/}
        <iframe src={paper.pdf} frameborder="0">
        </iframe>
      </div>

      {/* FIGURE CAROUSEL */}
      <div className="paper-figures">

        <div className="figure-container">
          <button
            className="figure-arrow figure-arrow-left"
            onClick={previousFigure}
            aria-label="Previous figure"
          >
            ‹
          </button>

          <img
            src={paper.figures[currentFigure]}
            alt={`Figure ${currentFigure + 1} from ${paper.title}`}
            className="paper-figure"
          />

          <button
            className="figure-arrow figure-arrow-right"
            onClick={nextFigure}
            aria-label="Next figure"
          >
            ›
          </button>
        </div>

        <div className="figure-indicators">
          {paper.figures.map((_, index) => (
            <button
              key={index}
              className={`figure-dot ${
                index === currentFigure ? "active" : ""
              }`}
              onClick={() => setCurrentFigure(index)}
              aria-label={`Show figure ${index + 1}`}
            />
          ))}
        </div>

      </div>

      {/* INFORMATION + CAPTION */}
      <div className="paper-information">

        <h2>{paper.title}</h2>   

        <p className="paper-authors">
          {paper.authors}
        </p>

        <p className="paper-journal">
          <em>{paper.year} {paper.journal}</em>
        </p>

        <div className="figure-caption">
          <span className="caption-label">
            Figure {currentFigure + 1}
          </span>

          <p>
            {paper.figuresCaptions[currentFigure]}
          </p>
        </div>
      </div>

    </article>
  </>
  );
}


export default function PaperCatalogue() {
  return (
    <section className="paper-catalogue">

      <div className="catalogue-header">
        <h1>Papers</h1>

        <p>
          Explore scientific papers through their figures,
          results, and original sources.
        </p>
      </div>

      <div className="papers-list">
        {papers.map((paper) => (
          <PaperCard
            key={paper.id}
            paper={paper}
          />
        ))}
      </div>

    </section>
  );
}


/*

<a
          href={paper.doi}
          target="_blank"
          rel="noopener noreferrer"
          className="paper-doi"
        >
          View paper ↗
        </a>

*/