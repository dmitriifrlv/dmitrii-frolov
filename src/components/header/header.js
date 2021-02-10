import React from "react";
import { Link } from "gatsby";
import "./header.css";

export default function Header(props) {
  return (
    <header>
      <Link className="link" to="/">
        <p>HOME</p>
      </Link>
      
      <div>
      <Link className="link middle" to="/about/">
        <p>ABOUT</p>
      </Link>
      </div>
    
      <Link className="link" to="/projects/">
        <p>PROJECTS</p>
      </Link>
      
      
    </header>
  );
}
