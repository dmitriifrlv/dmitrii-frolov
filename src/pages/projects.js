import React, { Component } from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import "../styles/projects.css";
import Card from "../components/card/card";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import Carousel from "../components/Carousel/Carousel";
import Logo from "../components/logos/Logo";

class IndexPage extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle,
  };

  slides = [
    {
      key: uuidv4(),
      content: (
        <Card
          title="Celebrity Recognition App"
          pic="https://media3.giphy.com/media/2Qy27bipTynj4JlUcd/giphy.gif"
          description="Full stack web aplication which detects a face and recognizes a person on the photo. "
          tool1={
            <Logo
              src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
              text="ReactJS"
            />
          }
          tool2={
            <Logo
              src="https://nodejs.org/static/images/logos/nodejs-new-pantone-white.svg"
              text="Node.js + Express.js"
            />
          }
          tool3={
            <Logo
              src="https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg"
              text="PostgreSQL"
            />
          }
          tool4={
            <Logo
              src="https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-icon.svg"
              text="Bootstrap"
            />
          }
          live="https://dmitriifrlv.github.io/celebrity-recognition/"
          source="https://github.com/"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          title="Currency-exchanger"
          pic="https://media3.giphy.com/media/ayf6JP0WBqJgIb9T7g/giphy.gif"
          description="Web application which uses exchange rates published by the European Central Bank to convert 38 currencies"
          live="https://dmitriifrlv.github.io/currency-exchanger/"
          source="https://github.com/dmitriifrlv/currency-exchanger"
          tool1={
            <Logo
              src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
              text="ReactJS"
            />
          }
          tool2={
            <Logo
              src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
              text="HTML"
            />
          }
          tool3={<Logo src="https://svgur.com/i/TJB.svg" text="CSS" />}
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          title="Markdown Previewer"
          pic="https://media3.giphy.com/media/JpfkjHlCWLSRhIdyeB/giphy.gif"
          description="Markdown is a text-to-HTML conversion tool which allows to format a plain text and convert it to valid HTML. This tool helps to see the effect of different types of formatting."
          live="https://dmitriifrlv.github.io/markdownPreviewer/"
          source="https://github.com/dmitriifrlv/markdownPreviewer"
          tool1={
            <Logo
              src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
              text="ReactJS"
            />
          }
          tool2={
            <Logo
              src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
              text="HTML"
            />
          }
          tool3={<Logo src="https://svgur.com/i/TJB.svg" text="CSS" />}
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          title="Quote Generator"
          pic="https://media4.giphy.com/media/8A9QTd1mxoyJxZgm35/giphy.gif"
          description="Portion of wisdom and motivation for every day!"
          live="https://dmitriifrlv.github.io/quotesGenerator/"
          source="https://github.com/dmitriifrlv/quotesGenerator"
          tool1={
            <Logo
              src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
              text="ReactJS"
            />
          }
          tool2={
            <Logo
              src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
              text="HTML"
            />
          }
          tool3={<Logo src="https://svgur.com/i/TJB.svg" text="CSS" />}
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          title="Monsters-rolodex"
          pic="https://media0.giphy.com/media/koc9zh7ZUQ5o3fBzBk/giphy.gif"
          description="My first application in React.js. Generates a list of monsters with a search function."
          live="https://dmitriifrlv.github.io/monsters-rolodex/"
          source="https://github.com/dmitriifrlv/monsters-rolodex"
          tool1={
            <Logo
              src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
              text="ReactJS"
            />
          }
          tool2={
            <Logo
              src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
              text="HTML"
            />
          }
          tool3={<Logo src="https://svgur.com/i/TJB.svg" text="CSS" />}
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          title="Tweet page"
          pic="https://media1.giphy.com/media/3u5gIm25jHIUfGKtdf/giphy.gif"
          description="This app was made as a part of christmas event on scrimba.com. It has such features as letters limit, tweet function and just warm and cosy design"
          live="https://dmitriifrlv.github.io/christmasTweetPage/"
          source="https://github.com/dmitriifrlv/christmasTweetPage"
          tool1={
            <Logo
              src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
              text="HTML"
            />
          }
          tool2={<Logo src="https://svgur.com/i/TJB.svg" text="CSS" />}
          tool3={
            <Logo
              src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
              text="JavaScript"
            />
          }
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          title="To-do List App"
          pic="https://media3.giphy.com/media/rGE3GryBSHkkejE2I2/giphy.gif"
          description="To-do list application which is built with vanilla Javascript. Features: add a task, delete a task, filter tasks(completed/uncompleted/all)"
          live="https://dmitriifrlv.github.io/toDoList/"
          source="https://github.com/dmitriifrlv/toDoList"
          tool1={
            <Logo
              src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
              text="HTML"
            />
          }
          tool2={<Logo src="https://svgur.com/i/TJB.svg" text="CSS" />}
          tool3={
            <Logo
              src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
              text="JavaScript"
            />
          }
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          title="Pizza Place Landing Page"
          pic="https://media0.giphy.com/media/rB8cyTmUgQ171a0o01/giphy.gif"
          description="The third project for freeCodeCamp Responsive Web Design program"
          live="https://dmitriifrlv.github.io/pizzaplace/"
          source="https://github.com/dmitriifrlv/pizzaplace"
          tool1={
            <Logo
              src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
              text="HTML"
            />
          }
          tool2={<Logo src="https://svgur.com/i/TJB.svg" text="CSS" />}
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          title="Survey Web Form"
          pic="https://media4.giphy.com/media/HvPsS7tYBfdRaZPznj/giphy.gif"
          description="The second project for freeCodeCamp Responsive Web Design program"
          live="https://dmitriifrlv.github.io/SurveyForm/"
          source="https://github.com/dmitriifrlv/SurveyForm"
          tool1={
            <Logo
              src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
              text="HTML"
            />
          }
          tool2={<Logo src="https://svgur.com/i/TJB.svg" text="CSS" />}
        />
      ),
    },

    {
      key: uuidv4(),
      content: (
        <Card
          title="Steve Jobs Tribute Page"
          pic="https://media3.giphy.com/media/6k6c8R9aM4ZTGqBVvR/giphy.gif"
          description="My first website which was made as a part of freeCodeCamp online bootcamp"
          live="https://dmitriifrlv.github.io/SteveJobs//"
          source="https://github.com/dmitriifrlv/SteveJobs"
          tool1={
            <Logo
              src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
              text="HTML"
            />
          }
          tool2={<Logo src="https://svgur.com/i/TJB.svg" text="CSS" />}
          tool3={
            <Logo
              src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
              text="JavaScript"
            />
          }
        />
      ),
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  render() {
    return (
      <main>
        <title>Projects</title>
        <Header />
        <div className="box">
          <Carousel
            slides={this.slides}
            goToSlide={this.state.goToSlide}
            offsetRadius={this.state.offsetRadius}
            showNavigation={this.state.showNavigation}
            animationConfig={this.state.config}
          />
        </div>

        <Footer />
      </main>
    );
  }
}

export default IndexPage;
