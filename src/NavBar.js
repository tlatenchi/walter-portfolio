import React, { Component } from "react";
import { Link } from "@reach/router";


const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return isCurrent ? { className: "main-nav__link main-nav__link--active" } : { className: "main-nav__link" }
    }}
  />
);


const NavBar = () => (
  <header>
    <div className="logo">
      <Link className="logo__link" to="/">
        <span className="logo__image">
          <svg width="22" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7.75 8.4"><rect width="7.75" height="2.19" /><rect x="2.46" y="3.42" width="2.83" height="4.98" /></svg>
        </span>
      </Link>
    </div>
    <ul className="main-nav">
      <li className="main-nav__item"><NavLink to="/">Home</NavLink></li>
      <li className="main-nav__item"><NavLink to="/work">Work</NavLink></li>
      <li className="main-nav__item"><NavLink to="/about">About</NavLink></li>
      <li className="main-nav__item"><NavLink to="/contact">Contact</NavLink></li>
    </ul>
  </header>
);


export default NavBar;
