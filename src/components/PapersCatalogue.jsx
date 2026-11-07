import { useState, useRef, useEffect } from "react";
import papers from "../data/papers"; 
import "./papersCatalogue.css"; 

function PaperCard({ paper }) { 
  const [currentFigure, setCurrentFigure] = useState(0); 
  const [isZoomed, setIsZoomed] = useState(false);
  
  // Ref for the modal to auto-focus it for keyboard navigation
  const modalRef = useRef(null);

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

  // Keyboard navigation handler
  const handleKeyDown = (e) => {
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

  // Auto-focus the modal when it opens so keyboard arrows work immediately
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
      <article className="paper-card">
        {/* FIRST PAGE */}
        <div className="paper-first-page">
          <iframe src={paper.pdf} frameBorder="0" allowFullScreen={true} title={paper.title}></iframe>
        </div>

        {/* FIGURE CAROUSEL */}
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
            
            {/* ZOOM BUTTON */}
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

        {/* INFORMATION + CAPTION */}
        <div className="paper-information">
          <h2>{paper.title}</h2>   
          <p className="paper-authors">{paper.authors}</p>
          <p className="paper-journal">
            <em>{paper.year} {paper.journal}</em>
          </p>
          <div className="figure-caption">
            <span className="caption-label">Figure {currentFigure + 1}</span>
            <p>{paper.figuresCaptions[currentFigure]}</p>
          </div>
        </div>
      </article>

      {/* ZOOM MODAL (LIGHTBOX) */}
      {isZoomed && (
        <div 
          className="zoom-modal" 
          onClick={() => setIsZoomed(false)}
        >
          <div 
            className="zoom-modal-content" 
            onClick={(e) => e.stopPropagation()} /* Prevent closing when clicking inside */
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
        <p>Explore scientific papers through their figures, results, and original sources.</p>
      </div>

      <div className="papers-list">
        {[...filteredPapers]
          .sort((a, b) => a.id - b.id) // Fixed syntax typo here
          .map((paper) => (
            <PaperCard key={paper.id} paper={paper} />
        ))}
      </div>
    </section>
  );
}