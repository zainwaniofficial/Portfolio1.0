import React from 'react'

const About = () => {
  return (
<div className='about-maindiv'>

    <div className="symbol-icon">
      <img src="/Scroll.png" alt="imghere" />
    </div>
    <div className="abt-container">
      
      <div className="abt-title">
          <p className="abt-me">About Me</p>
          <p className="abt-me-described">
          <span className='abt-me-hello'>Hello!</span> <br /> My name is Sinan and I specialize in web developement that utilizes <span>HTML, CSS, JS,</span> and <span>REACT</span> etc. <br /> I am a highly motivated individual and eternal optimist dedicated to writing clear, concise, robust code that works. Striving to never stop learning and improving. <br />When I'm not coding, I am <span>writing bolgs</span>, reading, or picking up some new hands-on art project like <span>photography</span>. <br />I like to have my perspective and belief systems challenged so that I see the world through new eyes.
          </p>
      </div>
      <div className="abt-img"></div>
    </div>
      </div>
   
  )
}

export default About
