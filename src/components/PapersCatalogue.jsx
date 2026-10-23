import { useState } from "react";
import papers from "../data/papers"; //[cite: 3]
import "./papersCatalogue.css"; //[cite: 3]

function PaperCard({ paper }) { //[cite: 3]
  const [currentFigure, setCurrentFigure] = useState(0); //[cite: 3]

  const nextFigure = () => { //[cite: 3]
    setCurrentFigure((prev) =>
      prev === paper.figures.length - 1 ? 0 : prev + 1 //[cite: 3]
    );
  };

  const previousFigure = () => { //[cite: 3]
    setCurrentFigure((prev) =>
      prev === 0 ? paper.figures.length - 1 : prev - 1 //[cite: 3]
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
        <iframe src={paper.pdf} frameBorder="0" title={paper.title}>
        </iframe>
      </div>

      {/* FIGURE CAROUSEL */}
      <div className="paper-figures">
        <div className="figure-container">
          <button
            className="figure-arrow figure-arrow-left"
            onClick={previousFigure} //[cite: 3]
            aria-label="Previous figure"
          >
            ‹
          </button>
          <img
            src={paper.figures[currentFigure]} //[cite: 3]
            alt={`Figure ${currentFigure + 1} from ${paper.title}`} //[cite: 3]
            className="paper-figure"
          />
          <button
            className="figure-arrow figure-arrow-right"
            onClick={nextFigure} //[cite: 3]
            aria-label="Next figure"
          >
            ›
          </button>
        </div>

        <div className="figure-indicators">
          {paper.figures.map((_, index) => ( //[cite: 3]
            <button
              key={index} //[cite: 3]
              className={`figure-dot ${
                index === currentFigure ? "active" : "" //[cite: 3]
              }`}
              onClick={() => setCurrentFigure(index)} //[cite: 3]
              aria-label={`Show figure ${index + 1}`} //[cite: 3]
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

export default function PaperCatalogue({ activeSection }) {
  const filteredPapers = papers.filter(paper => paper.section === activeSection);

  return (
    <section className="paper-catalogue">
      <div className="catalogue-header">
        <h1>{activeSection} Papers</h1>
        <p>Explore scientific papers through their figures, results, and original sources.</p>
      </div>

      <div className="papers-list">
        {filteredPapers.map((paper) => (
          <PaperCard
            key={paper.id} //[cite: 3]
            paper={paper} //[cite: 3]
          />
        ))}
      </div>
    </section>
  );
}
