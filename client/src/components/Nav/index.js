import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Search Google Books
      </a>
      <Link to="/savedbooks"><button className="btn btn-success">SavedBooks</button></Link>
    </nav>
  );
}

export default Nav;
