import * as React from "react";
import Aos from 'aos';
import "aos/dist/aos.css";

import { StaticImage } from "gatsby-plugin-image"
import Particles from 'react-tsparticles';

import Wrapper from "../components/wrapper"
import Seo from "../components/seo"

import '../styles/index.scss';
import '../styles/portfolio.scss';

import * as Themes from '../themes.js';

import { FiTwitter } from '@react-icons/all-files/fi/FiTwitter';
import { FiGithub } from '@react-icons/all-files/fi/FiGithub';
import { FiCodepen } from '@react-icons/all-files/fi/FiCodepen';
import { FiLinkedin } from '@react-icons/all-files/fi/FiLinkedin';



class IndexPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {showNav: false, theme: JSON.parse(localStorage.getItem("theme")) || Themes.dark};

    this.refHome = React.createRef();
    this.refAbout = React.createRef();
    this.refProjects = React.createRef();
    this.refConnect = React.createRef();

    this.applyTheme();
  }


  componentDidMount() {
    Aos.init({});
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.theme !== prevState.theme) {localStorage.setItem("theme", JSON.stringify(this.state.theme)); this.applyTheme();}
  }



  toggleNav = () => {
    this.setState({
      showNav: !this.state.showNav
    })
  }

  navButton = (section) => {
    window.scrollTo(0, section.current.offsetTop - 20);
    this.setState({
      showNav: false
    })
  }



  applyTheme = () => {
    document.documentElement.style.setProperty("--primary", this.state.theme.primary);
    document.documentElement.style.setProperty("--backgroundPrimary", `${this.state.theme.backgroundPrimary}`);
    document.documentElement.style.setProperty("--backgroundSecondary", `${this.state.theme.backgroundSecondary}`);
    document.documentElement.style.setProperty("--textPrimary", `${this.state.theme.textPrimary}`);
    document.documentElement.style.setProperty("--textSecondary", `${this.state.theme.textSecondary}`);
    document.documentElement.style.setProperty("--textAlternate", `${this.state.theme.textAlternate}`);
  }

  setTheme = () => {
    if (localStorage.getItem("theme") === JSON.stringify(Themes.light)) {
      this.setState({theme: Themes.dark})
    } else {
      this.setState({theme: Themes.light})
    }
  }



  render() {
    return (
    <div>

      <Seo title="Portfolio" />

      <div className={`fade-in hamburger ${this.state.showNav ? 'is-active' : ''}`} role='button' tabIndex={0} onClick={this.toggleNav} onKeyDown={this.toggleNav}>
        <span className='line top'></span>
        <span className='line middle'></span>
        <span className='line bottom'></span>
      </div>

      <nav className={`navBar ${this.state.showNav ? 'is-active' : ''}`}>
        <label className="switch">
          <input type="checkbox" onClick={() => this.setTheme()} onKeyDown={() => this.setTheme()} role='button' tabIndex={0} aria-label="Toggle Theme"/>
          <span className="slider"></span>
        </label>
        <ul>
          <button onClick={() => {this.navButton(this.refHome)}}>Home</button>
          <button onClick={() => {this.navButton(this.refAbout)}}>About</button>
          <button onClick={() => {this.navButton(this.refProjects)}}>Projects</button>
          <button onClick={() => {this.navButton(this.refConnect)}}>Connect</button>
        </ul>
      </nav>

      <Wrapper>

        <section id='home' ref={this.refHome}>
          <Particles id='tsParticles' options={{
            "fullScreen": {
              "enable": false,
              "zIndex": 0
            },
            "fpsLimit": 24,
            "particles": {
              "color": {
                "value": `rgb(${this.state.theme.primary})`
              },
              "move": {
                "enable": true
              },
              "opacity": {
                "value": {
                  "min": 0,
                  "max": this.state.theme.particlesAlpha
                }
              },
              "size": {
                "value": 250,
                "random": {
                  "enable": true,
                  "minimumValue": 50
                },
              },
              "number": {
                "density": {
                  "enable": true,
                  "value_area": 500
                },
                "value": 5
              }
            }
          }}/>

          <h1><span className='highlight'>Joshua Messer</span></h1>
          <h2>Front-End Web Developer</h2>
        </section>

        <section className='section' id='about' ref={this.refAbout} data-aos="zoom-in-up" data-aos-duration="1000" data-aos-anchor-placement="top-center">
          <h1 className='title'><span>About</span></h1>

          <div className='infoBox'>
            <p>Hello! I'm <span className='highlight'>Joshua</span>, and I enjoy designing & creating through various outlets. My interest in creative & technical processes started at a young age, when I had nothing to do and an interest in how 'things' worked.</p>
            <p>Fast-forward to today, and my endeavours have led me on a journey of engieering and coding. Initially wishing to pursue a career in Mechanical Engineering, then switching to Front-End, I've learned a lot and will continue to learn and improve.</p>
          </div>
          <div className='img'>
            <StaticImage
              className='imgFile'
              src="../images/joshua-1.jpg"
              alt="Joshua Messer"
              placeholder="blurred"
              layout="fixed"
              width={300}
              height={300}
            />
            <span className='outline'></span>
          </div>
          <div className="infoBox second">
            <p>Here are some technologies I've been using recently:</p>
            <ul>
              <li>Javascript (ES6+)</li>
              <li>React</li>
              <li>Python</li>
              <li>node.js</li>
              <li>Gatsby</li>
            </ul>
          </div>
        </section>

        <section className='section' id='projects' ref={this.refProjects} data-aos="zoom-in-up" data-aos-duration="1000" data-aos-offset="100">
          <h1 className='title'><span>Projects</span></h1>
          <p style={{textAlign: 'center'}}>Currently Empty<br/>Visit again at a later date!</p>
        </section>

        <section className='fade-in section' id='connect' ref={this.refConnect}>
          <div className='external-accounts'>
            <a href='https://github.com/FarLemon' target="_blank" rel="noopener noreferrer">{<FiGithub />}</a>
            <a href='https://twitter.com/Far_Lemon' target="_blank" rel="noopener noreferrer">{<FiTwitter />}</a>
            <a href='https://www.linkedin.com/in/ffc-far/' target="_blank" rel="noopener noreferrer">{<FiLinkedin />}</a>
            <a href='https://codepen.io/FarLemon' target="_blank" rel="noopener noreferrer">{<FiCodepen />}</a>
          </div>
        </section>

      </Wrapper>
    </div>
  )}
}

export default IndexPage
