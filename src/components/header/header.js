import React from "react";
import { Link } from 'gatsby';
import "./header.css"

export default function Header(props) {
  return (
    <header>
      <Link className='link' to='/'>
        <p>Dmitrii Frolov</p>
        </Link>
      <Link className='link' to='/about/'>About</Link>
      <Link className='link' to='/projects/'>Projects</Link>
    </header>
  )
}