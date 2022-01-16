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

  state = { showNav: false }

  toggleNav = () => {
    this.setState({
      showNav: !this.state.showNav
    })
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
          <li><a href="#home" onClick={this.toggleNav}>Home</a></li>
          <li><a href="#about" onClick={this.toggleNav}>About</a></li>
          <li><a href="#projects" onClick={this.toggleNav}>Projects</a></li>
          <li><a href="#contact" onClick={this.toggleNav}>Contact</a></li>
        </ul>
      </nav>

      <Wrapper className='center'>
        <Seo title="Portfolio" />

        <section id='home'>
          <Particles options={particlesConfig} className='particles'></Particles>
          <h1><span className='highlight'>Joshua Messer</span></h1>
          <h2>Front-End Web Developer</h2>
        </section>

        <section id='about'>
          <h1 className='title'>About</h1>
        </section>

        <section id='projects'>
        <h1 className='title'>Projects</h1>
        </section>

        <section id='contact'>
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
