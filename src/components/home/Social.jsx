import React from 'react'

const Social = () => {
  return (
    <div className='home__socialIcons'>
        <a href="https://www.linkedin.com/in/dmitryvelichko/" rel="noreferrer" className='home__social-icon' target='_blank'>
            <i className="uil uil-linkedin"></i>
        </a>

        <a href="https://www.youtube.com/channel/UCMoXZFDHxWvNQHYfTo2nyPA/videos" rel="noreferrer" className='home__social-icon' target='_blank'>
            <i className="uil uil-youtube"></i>
        </a>

        <a href="https://github.com/DmitryVelichko" rel="noreferrer" className='home__social-icon' target='_blank'>
            <i className="uil uil-github"></i>
        </a>
    </div>
  )
}

export default Social