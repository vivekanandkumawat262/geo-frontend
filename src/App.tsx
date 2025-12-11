import { useState } from 'react'
import logo from "./assets/images/logo.png";
import phoneLogo from "./assets/images/phonelogo.png"
import profileLogo from "./assets/images/profileLogo.png"
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [open, setOpen] = useState(false);

  function f1() {
    setCount(count+1)
  }

  return (
    <>
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
          onClick={() => setOpen(o => !o)}
        >
          <span className="hamburger__bar" />
          <span className="hamburger__bar" />
          <span className="hamburger__bar" />
        </button>

        <div className={`nav__middle ${open ? "open" : ""}`}>
          <ul className="nav__list" role="menubar" aria-label="Main navigation">
            <li role="none"><a role="menuitem" href="/">Home</a></li>
            <li role="none"><a role="menuitem" href="/listings">Listings</a></li>
            <li role="none"><a role="menuitem" href="/members">Members</a></li>
            <li role="none"><a role="menuitem" href="/blog">Blog</a></li>
            <li role="none"><a role="menuitem" href="/pages">Pages</a></li>
            <li role="none"><a role="menuitem" href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="nav__right">
          <div className="nav__phone">
            <img src={phoneLogo} alt="" aria-hidden="true" className="nav__icon" />
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
     
    </>
  )
}

export default App
