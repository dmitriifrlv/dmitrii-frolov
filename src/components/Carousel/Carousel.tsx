import React, { Component } from "react";
import styled from "@emotion/styled";
import Slide from "./Slide";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft, faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const NavigationButtons = styled.div`
  position: relative;
  display: flex;
  height: 40px;
  margin: 0 auto;
  width: 40%;
  margin-top: 0.5rem;
  justify-content: space-evenly;

  img {
    height: 100%;
  }
`;

const DEFAULT_GO_TO_SLIDE_DELAY = 200;

interface IState {
  index: number;
  goToSlide: number | null;
  prevPropsGoToSlide: number;
  newSlide: boolean;
}

interface IProps {
  slides: Slide[];
  goToSlide?: number;
  showNavigation: boolean;
  offsetRadius: number;
  animationConfig: object;
  goToSlideDelay: number;
}

function mod(a: number, b: number): number {
  return ((a % b) + b) % b;
}

class Carousel extends Component<IProps, IState> {
  state: IState = {
    index: 0,
    goToSlide: null,
    prevPropsGoToSlide: 0,
    newSlide: false
  };

  componentDidMount = () => {
    document.addEventListener("keydown", event => {
      if (event.isComposing || event.keyCode === 229) {
        return;
      }
      if (event.keyCode === 37) {
        this.moveSlide(-1);
      }
      if (event.keyCode === 39) {
        this.moveSlide(1);
      }
    });
  };

  goToIn?: number;

  static propTypes = {
    slides: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.any,
        content: PropTypes.object
      })
    ).isRequired,
    goToSlide: PropTypes.number,
    showNavigation: PropTypes.bool,
    offsetRadius: PropTypes.number,
    animationConfig: PropTypes.object,
    goToSlideDelay: PropTypes.number,
  };

  static defaultProps = {
    offsetRadius: 2,
    animationConfig: { tension: 120, friction: 14 },
    goToSlideDelay: DEFAULT_GO_TO_SLIDE_DELAY,
  };

  static getDerivedStateFromProps(props: IProps, state: IState) {
    const { goToSlide } = props;

    if (goToSlide !== state.prevPropsGoToSlide) {
      return { prevPropsGoToSlide: goToSlide, goToSlide, newSlide: true };
    }

    return null;
  }

  componentDidUpdate() {
    const { goToSlideDelay } = this.props;
    const { index, goToSlide, newSlide } = this.state;
    if (typeof goToSlide === "number") {
      if (newSlide) {
        this.handleGoToSlide();
      } else if (index !== goToSlide && typeof window !== "undefined") {
        window.clearTimeout(this.goToIn);
        this.goToIn = window.setTimeout(this.handleGoToSlide, goToSlideDelay);
      } else if (typeof window !== "undefined") {
        window.clearTimeout(this.goToIn);
      }
    }
  }

  componentWillUnmount() {
    if (typeof window !== "undefined") {
      window.clearTimeout(this.goToIn);
    }
  }

  modBySlidesLength = (index: number): number => {
    return mod(index, this.props.slides.length);
  };

  moveSlide = (direction: -1 | 1) => {
    this.setState({
      index: this.modBySlidesLength(this.state.index + direction),
      goToSlide: null
    });
  };

  getShortestDirection(from: number, to: number): -1 | 0 | 1 {
    if (from > to) {
      if (from - to > this.props.slides.length - 1 - from + to) {
        return 1;
      } else return -1;
    } else if (to > from) {
      if (to - from > from + this.props.slides.length - 1 - to) {
        return -1;
      } else return 1;
    }
    return 0;
  }

  handleGoToSlide = () => {
    if (typeof this.state.goToSlide !== "number") {
      return;
    }

    const { index } = this.state;

    const goToSlide = mod(this.state.goToSlide, this.props.slides.length);

    if (goToSlide !== index) {
      let direction = this.getShortestDirection(index, goToSlide);
      const isFinished =
        this.modBySlidesLength(index + direction) === goToSlide;

      this.setState({
        index: this.modBySlidesLength(index + direction),
        newSlide: isFinished,
        goToSlide: isFinished ? null : goToSlide
      });
    }
  };

  clampOffsetRadius(offsetRadius: number): number {
    const { slides } = this.props;
    const upperBound = Math.floor((slides.length - 1) / 2);

    if (offsetRadius < 0) {
      return 0;
    }
    if (offsetRadius > upperBound) {
      return upperBound;
    }

    return offsetRadius;
  }

  getPresentableSlides(): Slide[] {
    const { slides } = this.props;
    const { index } = this.state;
    let { offsetRadius } = this.props;
    offsetRadius = this.clampOffsetRadius(offsetRadius);
    const presentableSlides: Slide[] = new Array();

    for (let i = -offsetRadius; i < 1 + offsetRadius; i++) {
      presentableSlides.push(slides[this.modBySlidesLength(index + i)]);
    }

    return presentableSlides;
  }

  render() {
    const { animationConfig, offsetRadius, showNavigation } = this.props;

    let navigationButtons = null;
    if (showNavigation) {
      navigationButtons = (
        <NavigationButtons>
          <FontAwesomeIcon className={'icon'} style={{ marginRight: "2rem", cursor: "pointer" }} onClick={() => this.moveSlide(-1)} icon={faChevronCircleLeft} size="2x" />
          <FontAwesomeIcon style={{ marginLeft: "2rem", cursor: "pointer" }} onClick={() => this.moveSlide(1)} icon={faChevronCircleRight} size="2x" />
        </NavigationButtons>
      );
    }
    return (
      <React.Fragment>
        <Wrapper>
          {this.getPresentableSlides().map(
            (slide: Slide, presentableIndex: number) => (
              <Slide
                key={slide.key}
                content={slide.content}
                onClick={slide.onClick}
                offsetRadius={this.clampOffsetRadius(offsetRadius)}
                index={presentableIndex}
                animationConfig={animationConfig}
              />
            )
          )}
        </Wrapper>
        {navigationButtons}
      </React.Fragment>
    );
  }
}

export default Carousel;
