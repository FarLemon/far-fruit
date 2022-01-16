import * as React from "react"
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



const IndexPage = () => (
  <div>

    <div className='contact-section'>
      <ul className='external-accounts'>
        <li className='account'><FiGithub /></li>
        <li className='account'><FiTwitter /></li>
        <li className='account'><FiLinkedin /></li>
        <li className='account'><FiCodepen /></li>
      </ul>

      <p>FarLemon.FFC@gmail.com</p>
    </div>

    <Wrapper>
      <Seo title="Portfolio" />

      <section id='home'>
        <Particles options={particlesConfig} className='particles'></Particles>
        <h1><span className='highlight'>Joshua Messer</span></h1>
        <h2>Front-End Web Developer</h2>
      </section>

      <section id='about'>
        <h1>About</h1>
      </section>

      <section id='projects'>
        <h1>Projects</h1>
      </section>

      <section id='Contact'>
        <h1>Contact</h1>
      </section>
    </Wrapper>
  </div>
)

export default IndexPage
