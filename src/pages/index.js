import React, {useState, useRef, useEffect} from "react"
import { useLocalStorage } from "../useLocalStorage"
import { StaticImage } from "gatsby-plugin-image"
import dataBase from '../firebase.config'


import Wrapper from "../components/wrapper"
import Seo from "../components/seo"


import * as Themes from '../themes.js'
import '../styles/index.scss'
import '../styles/portfolio.scss'


import Aos from 'aos'
import "aos/dist/aos.css"
import Particles from 'react-tsparticles'


import { FiTwitter } from '@react-icons/all-files/fi/FiTwitter'
import { FiGithub } from '@react-icons/all-files/fi/FiGithub'
import { FiCodepen } from '@react-icons/all-files/fi/FiCodepen'
import { FiLinkedin } from '@react-icons/all-files/fi/FiLinkedin'



export default function IndexPage() {

  const [showNav, toggleNav] = useState(false);

  const [darkMode, toggleDarkMode] = useLocalStorage("darkMode", (window.matchMedia('(prefers-color-scheme: dark)').matches ? true : false));

  const [particles, setParticles] = useState(Themes.dark.tsParticles);

  const refHome = useRef(null);
  const refAbout = useRef(null);
  const refProjects = useRef(null);
  const refConnect = useRef(null);



  // ------------------------- Initial Mount ------------------------- //
  useEffect(() => {
    Aos.init({});
  }, []);



  // ------------------------- Theme Change ------------------------- //
  useEffect(() => {
    const docStyle = document.documentElement.style;
    let currentTheme = darkMode ? Themes.dark : Themes.light;

    setParticles(currentTheme.tsParticles);
    docStyle.setProperty("--primary", currentTheme.colors.primary);
    docStyle.setProperty("--secondary", currentTheme.colors.secondary);
    docStyle.setProperty("--background_page", currentTheme.colors.background_page);
    docStyle.setProperty("--background_section", currentTheme.colors.background_section);
    docStyle.setProperty("--background_navMenu", currentTheme.colors.background_navMenu);
    docStyle.setProperty("--text_primary", currentTheme.colors.text_primary);
    docStyle.setProperty("--text_secondary", currentTheme.colors.text_secondary);
    docStyle.setProperty("--text_alternate", currentTheme.colors.text_alternate);

    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode, toggleDarkMode]);



  // ------------------------- Scroll On Page ------------------------- //
  const navButton = (section) => {
    if (!section.current) {return};
    window.scrollTo(0, section.current.offsetTop - 20);
    toggleNav(false);
  }



  return (
    <div>
      <Seo title="Portfolio" />

      <div className={`fade-in hamburger ${showNav ? 'is-active' : ''}`} role='button' tabIndex={0} onClick={() => {toggleNav(!showNav)}} onKeyDown={() => {toggleNav(!showNav)}}>
        <span className='top'><span className='line' /></span>
        <span className='middle'><span className='line' /></span>
        <span className='bottom'><span className='line' /></span>
      </div>

      <nav className={`navBar ${showNav ? 'is-active' : ''}`}>
        <div className='toggle-switch' role='switch' tabIndex={0} aria-checked={darkMode} onClick={() => (toggleDarkMode(!darkMode))} onKeyDown={() => (toggleDarkMode(!darkMode))}>
          <span className="switch" />
        </div>
        <ul>
          <button onClick={() => {navButton(refHome)}}>Home</button>
          <button onClick={() => {navButton(refAbout)}}>About</button>
          <button onClick={() => {navButton(refProjects)}}>Projects</button>
          <button onClick={() => {navButton(refConnect)}}>Connect</button>
        </ul>
      </nav>

      <Wrapper>

        <section id='home' ref={refHome}>
          <Particles id='tsParticles' options={particles}/>

          <h1><span className='highlight_primary'>Joshua Messer</span></h1>
          <h2>Front-End Web Developer</h2>
        </section>

        <section className='section' id='about' ref={refAbout} data-aos="zoom-in-up" data-aos-duration="1000" data-aos-anchor-placement="top-center">
          <h1 className='title'><span>About</span></h1>

          <div className='infoBox'>
            <p>Hello! I'm <span className='highlight_secondary'>Joshua</span>, and I enjoy designing & creating through various outlets. My interest in creative & technical processes started at a young age, when I had nothing to do and an interest in how 'things' worked.</p>
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

        <section className='section' id='projects' ref={refProjects} data-aos="zoom-in-up" data-aos-duration="1000" data-aos-offset="100">
          <h1 className='title'><span>Projects</span></h1>
          <p style={{textAlign: 'center'}}>Currently Empty<br/>Visit again at a later date!</p>
        </section>

        <section className='fade-in section' id='connect' ref={refConnect}>
          <div className='external-accounts'>
            <a href='https://github.com/FarLemon' target="_blank" rel="noopener noreferrer">{<FiGithub />}</a>
            <a href='https://twitter.com/Far_Lemon' target="_blank" rel="noopener noreferrer">{<FiTwitter />}</a>
            <a href='https://www.linkedin.com/in/ffc-far/' target="_blank" rel="noopener noreferrer">{<FiLinkedin />}</a>
            <a href='https://codepen.io/FarLemon' target="_blank" rel="noopener noreferrer">{<FiCodepen />}</a>
          </div>
        </section>
      </Wrapper>
    </div>
  )
}