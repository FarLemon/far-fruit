import React from 'react'
import PropTypes from 'prop-types'

import firebaseConfig from '../firebase.config'
import { initializeApp } from 'firebase/app'
import { getStorage, ref, getDownloadURL } from 'firebase/storage'


initializeApp(firebaseConfig);
const storage = getStorage();



function Projects({projects}) {

  const projectsList = [];

  projects.forEach((e) => {
    getDownloadURL(ref(storage, '/project-images/joshua-1.jpg'))
      .then((url) => {
        e.url = url
      })
    projectsList.push(

      <div className={`project`} key={e.title}>
        <h1>{e.title}</h1>
        <p>{e.description}</p>
        <img alt={`${e.title}`} src={e.url} style={{width: `200px`}}></img>
      </div>

    )
  });


  return(
    <div className={`projects-container`}>
      {projectsList}
    </div>
  );
}



Projects.defaultProps = {
  projects: []
}

Projects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Projects;