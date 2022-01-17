import * as React from "react";
import { isMobile, MobileView } from 'react-device-detect';
import Aos from 'aos';
import "aos/dist/aos.css";
//import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
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

    this.state = {active: 'home', showNav: false, windowX: `${window.innerWidth}`};

    this.refNav = React.createRef();
    this.refHome = React.createRef();
    this.refAbout = React.createRef();
    this.refProjects = React.createRef();
    this.refConnect = React.createRef();
  }

  componentDidMount() {
    Aos.init({});
  }

  toggleNav = () => {
    this.setState({
      showNav: !this.state.showNav
    })
  }

  navHandleBtn = (section) => {
    let y = 20;
    if (!isMobile) {y = this.refNav.current.getBoundingClientRect().height + y};
    window.scrollTo(0, section.current.offsetTop - y);
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

      <nav className={`navBar ${isMobile ? 'mobile' : 'desktop'} ${this.state.showNav ? 'is-active' : ''}`} ref={this.refNav}>
        <FaRegLemon className='icon' />
        <ul>
          <button className={`${this.state.active === 'home' ? 'active' : ''}`} onClick={() => {this.navHandleBtn(this.refHome); this.toggleNav()}}>Home</button>
          <button className={`${this.state.active === 'about' ? 'active' : ''}`} onClick={() => {this.navHandleBtn(this.refAbout); this.toggleNav()}}>About</button>
          <button className={`${this.state.active === 'projects' ? 'active' : ''}`} onClick={() => {this.navHandleBtn(this.refProjects); this.toggleNav()}}>Projects</button>
          <button className={`${this.state.active === 'connect' ? 'active' : ''}`} onClick={() => {this.navHandleBtn(this.refConnect); this.toggleNav()}}>Connect</button>
        </ul>
      </nav>

      <Wrapper className='center'>
        <Seo title="Portfolio" />

        <section id='home' ref={this.refHome}>
          <Particles options={particlesConfig} className='particles'></Particles>
          <h1><span className='highlight'>Joshua Messer</span></h1>
          <h2>Front-End Web Developer</h2>
        </section>

        <section id='about' ref={this.refAbout} data-aos='section-slide-in' data-aos-duration='1000' data-aos-offset='200' data-aos-once='true'>
          <h1 className='title'>About</h1>
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

        <section id='projects' ref={this.refProjects} data-aos='section-slide-in' data-aos-duration='1000' data-aos-offset='200' data-aos-once='true'>
        <h1 className='title'>Projects</h1>
        <div className='infoBox'>
          <p style={{textAlign: 'center'}}>Currently Empty<br/>Visit again at a later date!</p>
        </div>
        </section>

        <section id='contact' ref={this.refConnect}>
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
