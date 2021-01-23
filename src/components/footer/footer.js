import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";



export default function Footer() {
  
  return (
      <footer>
          <a aria-label="GitHub link" href='https://github.com/'><FontAwesomeIcon icon={faGithub} size="1x" /></a>
          <a aria-label="GitHub link" href='https://github.com/'><FontAwesomeIcon icon={faLinkedin} size="1x" /></a>
          <a aria-label="GitHub link" href='mailto:dmitriyf56@yandex.ru'><FontAwesomeIcon icon={faEnvelope} size="1x" /></a>
      </footer>
  )
}