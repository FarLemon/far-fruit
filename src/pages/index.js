import * as React from "react"
//import { Link } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"

import Particles from 'react-tsparticles';
import particlesConfig from '../../particle-config.js';

import Wrapper from "../components/wrapper"
import Seo from "../components/seo"

import '../styles/index.scss';
import '../styles/portfolio.scss';

const IndexPage = () => (
  <div>
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
