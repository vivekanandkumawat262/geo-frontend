import React, { useEffect, useMemo, useRef, useState } from "react";
import "./HomesForYou.css"; // use the CSS shown below

export function HomesForYou({ items }) {
  // items: array of card data objects
  const containerRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  // determine responsive cardsPerPage
  useEffect(() => {
    function update() {
      const w = window.innerWidth;
      if (w < 520) setCardsPerPage(1);
      else if (w < 900) setCardsPerPage(2);
      else setCardsPerPage(3);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const pages = useMemo(() => {
    return Math.max(1, Math.ceil(items.length / cardsPerPage));
  }, [items.length, cardsPerPage]);

  // make sure currentPage is in range when cardsPerPage changes
  useEffect(() => {
    if (currentPage >= pages) setCurrentPage(0);
  }, [pages, currentPage]);

  // scroll to page when currentPage changes
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const containerWidth = el.clientWidth;
    const scrollLeft = currentPage * containerWidth;
    el.scrollTo({ left: scrollLeft, behavior: "smooth" });
  }, [currentPage, cardsPerPage]);

  // keyboard navigation
  useEffect(() => {
    function onKey(e) {
      if (e.key === "ArrowRight") setCurrentPage((p) => Math.min(p + 1, pages - 1));
      if (e.key === "ArrowLeft") setCurrentPage((p) => Math.max(p - 1, 0));
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [pages]);

  // small helper for rendering
  function renderCard(item, idx) {
    return (
      <div className="card1" key={idx}>
        <div
          className="backgroundimage"
          style={{ backgroundImage: `url(${item.bgimageUrl})` }}
          aria-hidden="true"
        >
          <p className="topleft1">FOR SALE</p>
          <p className="topleft2">FEATURED</p>
        </div>

        <div className="secondrow">
          <div className="leftone">
            <p>{item.title}</p>
            <p>
              <img src={item.maplogoimage} alt="" />
              {item.address}
            </p>
          </div>
          <div className="rightone">{item.price}</div>
        </div>

        <div className="thirdrow">
          <div>
            <img src={item.bedlogo} alt="" /> {item.beds} Beds
          </div>
          <div>
            <img src={item.bathlogo} alt="" /> {item.baths} Baths
          </div>
          <div>
            <img src={item.sqftlogo} alt="" /> {item.sqft} sqft
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="homesforyousection">
      <div>
        <div className="headingandpargraph">
          <h2>Homes For You</h2>
          <p>Based on your view history</p>
        </div>

        <div className="cardsWrapper">
          <div className="cards" ref={containerRef} role="list">
            {items.map((it, i) => (
              <div role="listitem" className="cardWrap" key={i}>
                {renderCard(it, i)}
              </div>
            ))}
          </div>
        </div>

        {/* dots */}
        <div className="dotsWrapper" aria-hidden={false}>
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              className={`dot ${i === currentPage ? "active" : ""}`}
              onClick={() => setCurrentPage(i)}
              aria-label={`Show page ${i + 1}`}
              aria-pressed={i === currentPage}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
