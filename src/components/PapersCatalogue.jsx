import { useState, useRef, useEffect } from "react";
import papers from "../data/papers"; 
import "./papersCatalogue.css"; 

function PaperCard({ paper }) { 
  const [currentFigure, setCurrentFigure] = useState(0); 
  const [isZoomed, setIsZoomed] = useState(false);
  
  const modalRef = useRef(null);
  const cardType = paper.type || "figures"; // Defaults to 'figures' for backwards compatibility

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

  const handleKeyDown = (e) => {
    if (cardType !== "figures") return;

    if (e.key === "ArrowRight") {
      e.preventDefault();
      nextFigure();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      previousFigure();
    } else if (e.key === "Escape" && isZoomed) {
      setIsZoomed(false);
    }
  };

  useEffect(() => {
    if (isZoomed && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isZoomed]);

  return (
    <>
      <div className="sup-title">
        <h1>
          <a href={paper.pdf} target="_blank" rel="noopener noreferrer">
            {paper.title}
          </a>
        </h1>
      </div>

      {/* Add modifier class when type is 'notes' */}
      <article className={`paper-card ${cardType === "notes" ? "paper-card--notes" : ""}`}>
        
        {/* LEFT COLUMN: FIRST PAGE PDF */}
        <div className="paper-first-page">
          <iframe src={paper.pdf} frameBorder="0" allowFullScreen={true} title={paper.title}></iframe>
        </div>

        {cardType === "figures" ? (
          <>
            {/* MIDDLE COLUMN: FIGURE CAROUSEL */}
            <div className="paper-figures">
              <div 
                className="figure-container" 
                tabIndex="0" 
                onKeyDown={handleKeyDown} 
                style={{ outline: "none", position: "relative" }}
              >
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
                
                <button 
                  className="zoom-button" 
                  onClick={() => setIsZoomed(true)}
                  aria-label="Zoom image"
                >
                  🔍
                </button>
              </div>

              <div className="figure-indicators">
                {paper.figures.map((_, index) => ( 
                  <button
                    key={index} 
                    className={`figure-dot ${index === currentFigure ? "active" : ""}`}
                    onClick={() => setCurrentFigure(index)} 
                    aria-label={`Show figure ${index + 1}`} 
                  />
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN: INFORMATION + CAPTION */}
            <div className="paper-information">
              <h2>{paper.title}</h2>   
              <p className="paper-authors">
                {Array.isArray(paper.authors) ? paper.authors.join(", ") : paper.authors}
              </p>
              <p className="paper-journal">
                <em>{paper.year} {paper.journal}</em>
              </p>
              <div className="figure-caption">
                <span className="caption-label">Figure {currentFigure + 1}</span>
                <p>{paper.figuresCaptions[currentFigure]}</p>
              </div>
            </div>
          </>
        ) : (
          /* WIDE RIGHT COLUMN: INFORMATION + STRUCTURED NOTES */
          <div className="paper-information paper-notes-wrapper">
            <div className="notes-header">
              <h2>{paper.title}</h2>   
              <p className="paper-authors">
                {Array.isArray(paper.authors) ? paper.authors.join(", ") : paper.authors}
              </p>
              <p className="paper-journal">
                <em>{paper.year} {paper.journal}</em>
              </p>
            </div>

            <div className="paper-notes-content">
              {paper.notes?.map((section, idx) => (
                <div key={idx} className="note-section">
                  <span className="caption-label">{section.subtitle}</span>
                  <ul>
                    {section.bullets.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </article>

      {/* ZOOM MODAL (LIGHTBOX) */}
      {cardType === "figures" && isZoomed && (
        <div 
          className="zoom-modal" 
          onClick={() => setIsZoomed(false)}
        >
          <div 
            className="zoom-modal-content" 
            onClick={(e) => e.stopPropagation()}
            tabIndex="-1"
            ref={modalRef}
            onKeyDown={handleKeyDown}
          >
            <button className="zoom-close" onClick={() => setIsZoomed(false)}>✕</button>
            <button className="zoom-arrow zoom-arrow-left" onClick={previousFigure}>‹</button>
            
            <img 
              src={paper.figures[currentFigure]} 
              alt={`Zoomed figure ${currentFigure + 1}`} 
            />
            
            <button className="zoom-arrow zoom-arrow-right" onClick={nextFigure}>›</button>
          </div>
        </div>
      )}
    </>
  );
}

export default function PaperCatalogue({ activeSection }) {
  const filteredPapers = papers.filter(paper => paper.section === activeSection);

  return (
    <section className="paper-catalogue">
      <div className="catalogue-header">
        <h1>{activeSection} Papers</h1>
        <p>Explore scientific papers through their figures, notes, and original sources. Click the paper's title to open the PDF!</p>
      </div>

      <div className="papers-list">
        {[...filteredPapers]
          .sort((a, b) => a.id - b.id)
          .map((paper) => (
            <PaperCard key={paper.id} paper={paper} />
        ))}
      </div>
    </section>
  );
}