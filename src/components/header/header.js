import React from "react";
import { Link } from "gatsby";
import "./header.css";

export default function Header(props) {
  return (
    <header>
      <Link className="link" to="/">
        <p>HOME</p>
      </Link>
      <Link className="link" to="/about/">
        <p>ABOUT</p>
      </Link>
      <Link className="link" to="/projects/">
        <p>PROJECTS</p>
      </Link>
    </header>
  );
}
