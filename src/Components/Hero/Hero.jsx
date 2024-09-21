import React from 'react'
import './Hero.css'
import image from '../../assets/picture.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resume from '../../assets/Latest Resume.pdf'

const Hero = () => {

   const handleClick = () => {
    window.open(resume, '_blank');
   }
  return (
    <div id='home' className='hero'>
      <img src={image} alt="" />
      <h1><span>I'm Suraj Negi,</span>Frontend Developer based in India.</h1>
      <p>I am a Frontend Developer based in Himachal Pradesh, India with a strong foundation in modern web technologies. I am actively seeking opportunities to apply my skills and contribute to innovative projects. I'm eager to join a dynamic team where I can grow and make an impact as I embark on my professional journey.</p>
      <div className='hero-action'>
        <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect with me</AnchorLink></div>
        <div className="hero-resume" onClick={handleClick}>My Resume</div>
      </div>
    </div>
  )
}

export default Hero
