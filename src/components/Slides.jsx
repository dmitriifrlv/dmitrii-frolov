import React, { Component } from "react";
import Card from "../components/card/card";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import Carousel from "../components/Carousel/Carousel";
import Logo from "../components/logos/Logo";
import Celebrec from "../images/projects/celebrec.gif";
import Currency from "../images/projects/currency.gif";
import Markdown from "../images/projects/markdown.gif";
import Quote from "../images/projects/quote.gif";
import Monsters from "../images/projects/monsters.gif";
import Tweetpage from "../images/projects/tweetpage.gif";
import Todolist from "../images/projects/todolist.gif";
import Pizza from "../images/projects/pizza.jpg";
import Coffee from "../images/projects/coffee.jpg";
import Steve from "../images/projects/steve.gif";
import JSlogo from "../images/icons/javascript.svg";
import Bootstrap from "../images/icons/bootstrap.svg";
import ReactLogo from "../images/icons/react.svg";
import Html from "../images/icons/html.svg";
import Css from "../images/icons/css.svg";
import PsqlLogo from "../images/icons/psql.svg";
import Node from "../images/icons/nodejs.svg";
import Redux from "../images/icons/redux.svg";

class Slides extends Component {
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
          pic={Celebrec}
          description="Full stack web aplication which detects a face and recognizes a person on the photo. "
          tool1={<Logo src={ReactLogo} text="ReactJS" />}
          tool2={<Logo src={Node} text="Node.js + Express.js" />}
          tool3={<Logo src={PsqlLogo} text="PostgreSQL" />}
          tool4={<Logo src={Bootstrap} text="Bootstrap" />}
          live="https://dmitriifrlv.github.io/celebrity-recognition/"
          source="https://github.com/dmitriifrlv/celebrity-recognition"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          title="Currency-exchanger"
          pic={Currency}
          description="Web application which uses exchange rates published by the European Central Bank to convert 38 currencies"
          live="https://dmitriifrlv.github.io/currency-exchanger/"
          source="https://github.com/dmitriifrlv/currency-exchanger"
          tool1={<Logo src={ReactLogo} text="ReactJS" />}
          tool2={<Logo src={Html} text="HTML" />}
          tool3={<Logo src={Css} text="CSS" />}
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          title="Markdown Previewer"
          pic={Markdown}
          description="Markdown is a text-to-HTML conversion tool which allows to format a plain text and convert it to valid HTML. This tool helps to see the effect of different types of formatting."
          live="https://dmitriifrlv.github.io/markdownPreviewer/"
          source="https://github.com/dmitriifrlv/markdownPreviewer"
          tool1={<Logo src={ReactLogo} text="ReactJS" />}
          tool2={<Logo src={Html} text="HTML" />}
          tool3={<Logo src={Css} text="CSS" />}
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          title="Quote Generator"
          pic={Quote}
          description="Portion of wisdom and motivation for every day!"
          live="https://dmitriifrlv.github.io/quotesGenerator/"
          source="https://github.com/dmitriifrlv/quotesGenerator"
          tool1={<Logo src={ReactLogo} text="ReactJS" />}
          tool2={<Logo src={Html} text="HTML" />}
          tool3={<Logo src={Css} text="CSS" />}
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          title="Monsters-rolodex"
          pic={Monsters}
          description="My first application in React.js where I also learnt and applied React-Redux. Generates a list of monsters with a search function."
          live="https://dmitriifrlv.github.io/monsters-rolodex/"
          source="https://github.com/dmitriifrlv/monsters-rolodex"
          tool1={<Logo src={ReactLogo} text="ReactJS" />}
          tool2={<Logo src={Redux} text="React-Redux" />}
          tool3={<Logo src={Html} text="HTML" />}
          tool4={<Logo src={Css} text="CSS" />}
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          title="Tweet page"
          pic={Tweetpage}
          description="This app was made as a part of christmas event on scrimba.com. It has such features as letters limit, tweet function and just warm and cosy design"
          live="https://dmitriifrlv.github.io/christmasTweetPage/"
          source="https://github.com/dmitriifrlv/christmasTweetPage"
          tool1={<Logo src={Html} text="HTML" />}
          tool2={<Logo src={Css} text="CSS" />}
          tool3={<Logo src={JSlogo} text="JavaScript" />}
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          title="To-do List App"
          pic={Todolist}
          description="To-do list application which is built with vanilla Javascript. Features: add a task, delete a task, filter tasks(completed/uncompleted/all)"
          live="https://dmitriifrlv.github.io/toDoList/"
          source="https://github.com/dmitriifrlv/toDoList"
          tool1={<Logo src={Html} text="HTML" />}
          tool2={<Logo src={Css} text="CSS" />}
          tool3={<Logo src={JSlogo} text="JavaScript" />}
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          title="Pizza Place Landing Page"
          pic={Pizza}
          description="The third project for freeCodeCamp Responsive Web Design program"
          live="https://dmitriifrlv.github.io/pizzaplace/"
          source="https://github.com/dmitriifrlv/pizzaplace"
          tool1={<Logo src={Html} text="HTML" />}
          tool2={<Logo src={Css} text="CSS" />}
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          title="Survey Web Form"
          pic={Coffee}
          description="The second project for freeCodeCamp Responsive Web Design program"
          live="https://dmitriifrlv.github.io/SurveyForm/"
          source="https://github.com/dmitriifrlv/SurveyForm"
          tool1={<Logo src={Html} text="HTML" />}
          tool2={<Logo src={Css} text="CSS" />}
        />
      ),
    },

    {
      key: uuidv4(),
      content: (
        <Card
          title="Steve Jobs Tribute Page"
          pic={Steve}
          description="My first website which was made as a part of freeCodeCamp online bootcamp"
          live="https://dmitriifrlv.github.io/SteveJobs//"
          source="https://github.com/dmitriifrlv/SteveJobs"
          tool1={<Logo src={Html} text="HTML" />}
          tool2={<Logo src={Css} text="CSS" />}
          tool3={<Logo src={JSlogo} text="JavaScript" />}
        />
      ),
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  render() {
    return (
      <Carousel
        slides={this.slides}
        goToSlide={this.state.goToSlide}
        offsetRadius={this.state.offsetRadius}
        showNavigation={this.state.showNavigation}
        animationConfig={this.state.config}
      />
    );
  }
}

export default Slides;
