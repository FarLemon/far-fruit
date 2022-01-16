import * as React from "react";
import { isMobile, MobileView } from 'react-device-detect';
//import { Link } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"
import Particles from 'react-tsparticles';
import particlesConfig from '../../particle-config.js';

import Wrapper from "../components/wrapper"
import Seo from "../components/seo"

import '../styles/index.scss';
import '../styles/portfolio.scss';

import { FiTwitter } from '@react-icons/all-files/fi/FiTwitter';
import { FiGithub } from '@react-icons/all-files/fi/FiGithub';
import { FiCodepen } from '@react-icons/all-files/fi/FiCodepen';
import { FiLinkedin } from '@react-icons/all-files/fi/FiLinkedin';
import { FaRegLemon } from '@react-icons/all-files/fa/FaRegLemon';


class IndexPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {active: 'home', showNav: false};

    this.refHome = React.createRef();
    this.refAbout = React.createRef();
    this.refProjects = React.createRef();
    this.refConnect = React.createRef();

    window.addEventListener('scroll', this.checkSection, true);
  }

  checkSection = () => {
    let scroll = window.scrollY;
    if (this.refConnect.current && scroll > this.refConnect.current.offsetTop - window.innerHeight/3) {
      this.setState({active: 'connect'});
    } else if (this.refProjects.current && scroll > this.refProjects.current.offsetTop - window.innerHeight/3) {
      this.setState({active: 'projects'});
    } else if (this.refAbout.current && scroll > this.refAbout.current.offsetTop - window.innerHeight/3) {
      this.setState({active: 'about'});
    } else if (this.refHome.current && scroll > this.refHome.current.offsetTop - window.innerHeight/3) {
      this.setState({active: 'home'});
    }
  }

  toggleNav = () => {
    this.setState({
      showNav: !this.state.showNav
    })
  }

  navHandleBtn = (section) => {
    let y = 0;
    if (window.innerHeight > window.innerWidth && this.refNav.current) {y = this.refNav.current.getBoundingClientRect().height};
    window.scrollTo(0, section.current.offsetTop - y);
    if (this.state.navOpen !== false) {
      this.setState({navOpen: false});
    }
  }

  render() {return (
    <div>

      <MobileView>
        <div className={`hamburger ${this.state.showNav ? 'is-active' : ''}`} role='button' tabIndex={0} onClick={this.toggleNav} onKeyDown={this.toggleNav}>
          <span className='line top'></span>
          <span className='line middle'></span>
          <span className='line bottom'></span>
        </div>
      </MobileView>

      <nav className={`navBar ${isMobile ? 'mobile' : 'desktop'} ${this.state.showNav ? 'is-active' : ''}`}>
        <FaRegLemon className='icon' />
        <ul>
          <button>Home</button>
          <button>About</button>
          <button>Projects</button>
          <button>Contact</button>
        </ul>
      </nav>

      <Wrapper className='center'>
        <Seo title="Portfolio" />

        <section id='home' ref={this.refHome}>
          <Particles options={particlesConfig} className='particles'></Particles>
          <h1><span className='highlight'>Joshua Messer</span></h1>
          <h2>Front-End Web Developer</h2>
        </section>

        <section id='about' ref={this.refAbout}>
          <h1 className='title'>About</h1>
          <div className='infoBox'>
            <p>Hello! I'm <span className='highlight'>Joshua</span>, and I enjoy designing & creating through various outlets. My interest in creative & technical processes started at a young age, when I had nothing to do and an interest in how 'things' worked.</p>
            <p>Fast-forward to today, and my endeavours have led me on a journey of engieering and coding.</p>
          </div>
        </section>

        <section id='projects' ref={this.refProjects}>
        <h1 className='title'>Projects</h1>
        </section>

        <section id='contact' ref={this.refContact}>
          <ul className='external-accounts'>
            <li className='account'><a href='https://github.com/FarLemon' target="_blank" rel="noopener noreferrer">{<FiGithub />}</a></li>
            <li className='account'><a href='https://twitter.com/Far_Lemon' target="_blank" rel="noopener noreferrer">{<FiTwitter />}</a></li>
            <li className='account'><a href='https://www.linkedin.com/in/ffc-far/' target="_blank" rel="noopener noreferrer">{<FiLinkedin />}</a></li>
            <li className='account'><a href='https://codepen.io/FarLemon' target="_blank" rel="noopener noreferrer">{<FiCodepen />}</a></li>
          </ul>
        </section>
      </Wrapper>
    </div>
  )}
}

export default IndexPage
