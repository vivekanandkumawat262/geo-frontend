import React, { useState } from "react";
import searchlogo from "../assets/images/searchlogo.png"; // place your icon here
import "./Hero.css";



export default function Hero({ onSearch }) {
  const [mode, setMode] = useState("sale"); // 'sale' or 'rent'
  const [query, setQuery] = useState("");

  function handleMode(m) {
    setMode(m);
  }

  function submit(e) {
    e?.preventDefault();
    const payload = { mode, query: query.trim() };
    // call parent handler or API
    if (onSearch) onSearch(payload);
    else console.log("Search:", payload);
  }

  return (
    <section className="hero">
      <div className="hero__overlay" />
      <div className="hero__center">
        <p className="hero__kicker">LET US GUIDE YOUR HOME</p>

        <div className="hero__title-wrap">
          <h1 className="hero__title">Discover a place you'll love to live</h1>

          <div className="hero__mode">
            <button
              className={`mode-btn ${mode === "sale" ? "active" : ""}`}
              onClick={() => handleMode("sale")}
              aria-pressed={mode === "sale"}
            >
              Sale
            </button>
            <button
              className={`mode-btn ${mode === "rent" ? "active" : ""}`}
              onClick={() => handleMode("rent")}
              aria-pressed={mode === "rent"}
            >
              Rent
            </button>
          </div>
        </div>

        <form className="hero__search" onSubmit={submit}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="hero__input"
            placeholder="Enter city, area or landmark"
          />

          <button type="submit" className="hero__search-btn">
            <img src={searchlogo} alt="" width="20" />
          </button>
        </form>
      </div>
    </section>
  );
}
