import { useState } from "react";
import "./App.css";

/* ---------------------------------------
   LOCAL IMAGE IMPORTS (Correct Paths)
---------------------------------------- */
import logo from "./assets/images/logo.png";
import phoneLogo from "./assets/images/phonelogo.png";
import profileLogo from "./assets/images/profileLogo.png";
import searchlogo from "./assets/images/searchlogo.png";

import maplogoimage from "./assets/images/maplogo.png";
import bedlogo from "./assets/images/bedlogo.png";
import bathlogo from "./assets/images/bathlogo.png";
import sqftlogo from "./assets/images/sqftlogo.png";
import bgimageUrl from "./assets/images/bgimage.png";

/* ---------------------------------------
   HOMES FOR YOU COMPONENT
---------------------------------------- */
import {HomesForYou} from "./components/HomesForYou";

/* ---------------------------------------
   DEMO DATA (Fixing Wrong Paths)
---------------------------------------- */
const demoItems = [
  {
    bgimageUrl,
    title: "Skyper Pool Apartment",
    address: "1020 Bloomingdale Ave",
    price: "$280,000",
    beds: 4,
    baths: 2,
    sqft: 450,
    maplogoimage,
    bedlogo,
    bathlogo,
    sqftlogo,
  },
  {
    bgimageUrl,
    title: "Skyper Pool Apartment",
    address: "1020 Bloomingdale Ave",
    price: "$280,000",
    beds: 4,
    baths: 2,
    sqft: 450,
    maplogoimage,
    bedlogo,
    bathlogo,
    sqftlogo,
  },
  {
    bgimageUrl,
    title: "Skyper Pool Apartment",
    address: "1020 Bloomingdale Ave",
    price: "$280,000",
    beds: 4,
    baths: 2,
    sqft: 450,
    maplogoimage,
    bedlogo,
    bathlogo,
    sqftlogo,
  },
  {
    bgimageUrl,
    title: "Skyper Pool Apartment",
    address: "1020 Bloomingdale Ave",
    price: "$280,000",
    beds: 4,
    baths: 2,
    sqft: 450,
    maplogoimage,
    bedlogo,
    bathlogo,
    sqftlogo,
  },
  {
    bgimageUrl,
    title: "Skyper Pool Apartment",
    address: "1020 Bloomingdale Ave",
    price: "$280,000",
    beds: 4,
    baths: 2,
    sqft: 450,
    maplogoimage,
    bedlogo,
    bathlogo,
    sqftlogo,
  },
  {
    bgimageUrl,
    title: "Skyper Pool Apartment",
    address: "1020 Bloomingdale Ave",
    price: "$280,000",
    beds: 4,
    baths: 2,
    sqft: 450,
    maplogoimage,
    bedlogo,
    bathlogo,
    sqftlogo,
  },
  {
    bgimageUrl,
    title: "Skyper Pool Apartment",
    address: "1020 Bloomingdale Ave",
    price: "$280,000",
    beds: 4,
    baths: 2,
    sqft: 450,
    maplogoimage,
    bedlogo,
    bathlogo,
    sqftlogo,
  },
  {
    bgimageUrl,
    title: "Skyper Pool Apartment",
    address: "1020 Bloomingdale Ave",
    price: "$280,000",
    beds: 4,
    baths: 2,
    sqft: 450,
    maplogoimage,
    bedlogo,
    bathlogo,
    sqftlogo,
  },
  {
    bgimageUrl,
    title: "Skyper Pool Apartment",
    address: "1020 Bloomingdale Ave",
    price: "$280,000",
    beds: 4,
    baths: 2,
    sqft: 450,
    maplogoimage,
    bedlogo,
    bathlogo,
    sqftlogo,
  },
  // You can add more objects here
];

function App() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState("sale");
  const [query, setQuery] = useState("");

  function handleMode(m) {
    setMode(m);
  }

  function submit(e) {
    e.preventDefault();
    const payload = { mode, query };
    console.log("Search submitted:", payload);
  }

  return (
    <>
      {/* ---------------- NAVBAR ---------------- */}
      <nav className="nav">
        <div className="nav__left">
          <a href="/" className="nav__brand" aria-label="Go to homepage">
            <img src={logo} alt="NestQuest logo" className="nav__logo" />
          </a>
        </div>

        <button
          className="nav__hamburger"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          onClick={() => setOpen(!open)}
        >
          <span className="hamburger__bar" />
          <span className="hamburger__bar" />
          <span className="hamburger__bar" />
        </button>

        <div className={`nav__middle ${open ? "open" : ""}`}>
          <ul className="nav__list">
            <li><a href="/">Home</a></li>
            <li><a href="/listings">Listings</a></li>
            <li><a href="/members">Members</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/pages">Pages</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="nav__right">
          <div className="nav__phone">
            <img src={phoneLogo} alt="" className="nav__icon" />
            <a href="tel:+91982825555">+91 98282 5555</a>
          </div>

          <div className="nav__profile">
            <img src={profileLogo} alt="Profile" className="nav__profile-img" />
          </div>

          <div className="nav__cta">
            <button className="btn btn--primary">Add Property</button>
          </div>
        </div>
      </nav>

      {/* ---------------- HERO SECTION ---------------- */}
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
              >
                Sale
              </button>
              <button
                className={`mode-btn ${mode === "rent" ? "active" : ""}`}
                onClick={() => handleMode("rent")}
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
              placeholder="Enter your city, neighborhood or keywords"
            />

            <button type="submit" className="hero__search-btn">
              <img src={searchlogo} alt="" width="20" height="20" />
            </button>
          </form>
        </div>
      </section>

      {/* ---------------- HOMES FOR YOU SECTION ---------------- */}
      <HomesForYou items={demoItems} />
    </>
  );
}

export default App;









// import { useState } from "react";
// import logo from "./assets/images/logo.png";
// import phoneLogo from "./assets/images/phonelogo.png";
// import profileLogo from "./assets/images/profileLogo.png";
// import searchlogo from "./assets/images/searchlogo.png"; 
// import maplogoimage from "./assets/images/maplogo.png"
// import bedlogo from "./assets/images/bedlogo.png"
// import bathlogo from "./assets/images/bathlogo.png" 
// import sqftlogo from "./assets/images/sqftlogo.png"
// import bgimageUrl from "./assets/images/bgimage.png"
// import HomesForYou from "./HomesForYou";

// const demoItems = [
//   {
//     bgimageUrl: "/assets/images/house1.jpg",
//     title: "Skyper Pool Apartment",
//     address: "1020 Bloomingdale Ave",
//     price: "$280,000",
//     beds: 4,
//     baths: 2,
//     sqft: 450,
//     maplogoimage: "/assets/icons/map.svg",
//     bedlogo: "/assets/icons/bed.svg",
//     bathlogo: "/assets/icons/bath.svg",
//     sqftlogo: "/assets/icons/sqft.svg"
//   },
//   // ...more items
// ];


// import "./App.css";

// function App() {
//   const [open, setOpen] = useState(false);
//   const [mode, setMode] = useState("sale"); // 'sale' or 'rent'
//   const [query, setQuery] = useState("");

//   function handleMode(m) {
//     setMode(m);
//   }

//   function submit(e) {
//     e?.preventDefault();
//     const payload = { mode, query: query.trim() };
//     // call parent handler or API
//     // if (onSearch) onSearch(payload);
//     // else console.log("Search:", payload);
//   }
//   return (
//     <>
//       <nav className="nav">
//         <div className="nav__left">
//           <a href="/" className="nav__brand" aria-label="Go to homepage">
//             <img src={logo} alt="NestQuest logo" className="nav__logo" />
//           </a>
//         </div>

//         <button
//           className="nav__hamburger"
//           aria-expanded={open}
//           aria-label="Toggle navigation menu"
//           onClick={() => setOpen((o) => !o)}
//         >
//           <span className="hamburger__bar" />
//           <span className="hamburger__bar" />
//           <span className="hamburger__bar" />
//         </button>

//         <div className={`nav__middle ${open ? "open" : ""}`}>
//           <ul className="nav__list" role="menubar" aria-label="Main navigation">
//             <li role="none">
//               <a role="menuitem" href="/">
//                 Home
//               </a>
//             </li>
//             <li role="none">
//               <a role="menuitem" href="/listings">
//                 Listings
//               </a>
//             </li>
//             <li role="none">
//               <a role="menuitem" href="/members">
//                 Members
//               </a>
//             </li>
//             <li role="none">
//               <a role="menuitem" href="/blog">
//                 Blog
//               </a>
//             </li>
//             <li role="none">
//               <a role="menuitem" href="/pages">
//                 Pages
//               </a>
//             </li>
//             <li role="none">
//               <a role="menuitem" href="/contact">
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>

//         <div className="nav__right">
//           <div className="nav__phone">
//             <img
//               src={phoneLogo}
//               alt=""
//               aria-hidden="true"
//               className="nav__icon"
//             />
//             <a href="tel:+91982825555">+91 98282 5555</a>
//           </div>

//           <div className="nav__profile">
//             <img src={profileLogo} alt="Profile" className="nav__profile-img" />
//           </div>

//           <div className="nav__cta">
//             <button className="btn btn--primary">Add Property</button>
//           </div>
//         </div>
//       </nav>
//       <section className="hero">
//         <div className="hero__overlay" />
//         <div className="hero__center">
//           <p className="hero__kicker">LET US GUIDE YOUR HOME</p>

//           <div className="hero__title-wrap">
//             <h1 className="hero__title">
//               Discover a place you'll love to live
//             </h1>

//             <div className="hero__mode">
//               <button
//                 className={`mode-btn ${mode === "sale" ? "active" : ""}`}
//                 onClick={() => handleMode("sale")}
//                 aria-pressed={mode === "sale"}
//               >
//                 Sale
//               </button>
//               <button
//                 className={`mode-btn ${mode === "rent" ? "active" : ""}`}
//                 onClick={() => handleMode("rent")}
//                 aria-pressed={mode === "rent"}
//               >
//                 Rent
//               </button>
//             </div>
//           </div>

//           <form
//             className="hero__search"
//             onSubmit={submit}
//             role="search"
//             aria-label="Property search"
//           >
             
//             <input
//               id="heroSearch"
//               type="text"
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//               className="hero__input"
//               placeholder="Enter your city, neighborhood or keywords"
//               aria-label="Search"
//               autoComplete="off"
//             />
//             <button
//               type="submit"
//               className="hero__search-btn"
//               aria-label="Search"
//             >
//               <img
//                 src={searchlogo}
//                 alt=""
//                 width="20"
//                 height="20"
//                 aria-hidden="true"
//               />
//             </button>
//           </form>
//         </div>
//       </section>

//       <section className="homesforyousection">
//              <div>
//                    <div className="headingandpargraph">
//                         <h2>Homes For You</h2>
//                         <p>Based on your view history</p>
//                    </div>
//                    <div className="cards">
//                          <div className="card1">
//                               <div className="backgroundimage">
//                                 <img src={bgimageUrl} alt="Skyper Pool Apartment" />
//                                 <p className="topleft1">FOR SALE</p>
//                                 <p className="topleft2">FEATURED</p>
//                               </div>
//                               <div className="secondrow">
//                                   <div className="leftone">
//                                     <p>Skyper Pool Apartment</p>
//                                     <p><img src={maplogoimage} alt="" />1020 Bloomingdale Ave</p>
//                                   </div>
//                                   <div className="rightone">
//                                       $280,000
//                                   </div>
//                               </div>
//                               <div className="thirdrow">
//                                     <div ><img src={bedlogo} alt="" />4 Beds</div>
//                                     <div  ><img src={bathlogo} alt="" />2 Baths</div>
//                                     <div  ><img src={sqftlogo} alt="" />450 sqft</div>
//                               </div>
//                          </div>
//                          <div className="card1">
//                               <div className="backgroundimage">
//                                 <img src={bgimageUrl} alt="Skyper Pool Apartment" />
//                                 <p className="topleft1">FOR SALE</p>
//                                 <p className="topleft2">FEATURED</p>
//                               </div>
//                               <div className="secondrow">
//                                   <div className="leftone">
//                                     <p>Skyper Pool Apartment</p>
//                                     <p><img src={maplogoimage} alt="" />1020 Bloomingdale Ave</p>
//                                   </div>
//                                   <div className="rightone">
//                                       $280,000
//                                   </div>
//                               </div>
//                               <div className="thirdrow">
//                                     <div ><img src={bedlogo} alt="" />4 Beds</div>
//                                     <div  ><img src={bathlogo} alt="" />2 Baths</div>
//                                     <div  ><img src={sqftlogo} alt="" />450 sqft</div>
//                               </div>
//                          </div>
//                          <div className="card1">
//                               <div className="backgroundimage">
//                                 <img src={bgimageUrl} alt="Skyper Pool Apartment" />
//                                 <p className="topleft1">FOR SALE</p>
//                                 <p className="topleft2">FEATURED</p>
//                               </div>
//                               <div className="secondrow">
//                                   <div className="leftone">
//                                     <p>Skyper Pool Apartment</p>
//                                     <p><img src={maplogoimage} alt="" />1020 Bloomingdale Ave</p>
//                                   </div>
//                                   <div className="rightone">
//                                       $280,000
//                                   </div>
//                               </div>
//                               <div className="thirdrow">
//                                     <div ><img src={bedlogo} alt="" />4 Beds</div>
//                                     <div  ><img src={bathlogo} alt="" />2 Baths</div>
//                                     <div  ><img src={sqftlogo} alt="" />450 sqft</div>
//                               </div>
//                          </div>
//                          <div className="card1">
//                               <div className="backgroundimage">
//                                 <img src={bgimageUrl} alt="Skyper Pool Apartment" />
//                                 <p className="topleft1">FOR SALE</p>
//                                 <p className="topleft2">FEATURED</p>
//                               </div>
//                               <div className="secondrow">
//                                   <div className="leftone">
//                                     <p>Skyper Pool Apartment</p>
//                                     <p><img src={maplogoimage} alt="" />1020 Bloomingdale Ave</p>
//                                   </div>
//                                   <div className="rightone">
//                                       $280,000
//                                   </div>
//                               </div>
//                               <div className="thirdrow">
//                                     <div ><img src={bedlogo} alt="" />4 Beds</div>
//                                     <div  ><img src={bathlogo} alt="" />2 Baths</div>
//                                     <div  ><img src={sqftlogo} alt="" />450 sqft</div>
//                               </div>
//                          </div>
//                    </div>
//              </div>
//       </section>

//       <HomesForYou items={demoItems} />
//     </>
//   );
// }

// export default App;
