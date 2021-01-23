import React from "react";
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import '../styles/index.css';

const IndexPage = () => {
  return (
    <main>
      <title>Dmitrii Frolov</title>
      <Header />
      <article>
        <h1>Full Stack Web Developer</h1>
        <div>Hi! I am a self-taught full stack web developer. Take a look at some of my projects!</div>
        
      </article>
      <Footer />
    </main>
  )
}

export default IndexPage
