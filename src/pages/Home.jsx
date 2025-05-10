import React from 'react'


const Home = () => {
 
  return (
    <>
    <div className="home-container">
        <div className="home-child">
            <h1>Developer</h1>
            <div className="hchild-cont">
              <div className='hccp'>
                <div className="home-c-photo"></div>
                <p className='hccpn'>Sinan</p>
                  <p className="hccpp">Full-Stack-Developer</p>
                  <ul class="info">
      <li> <i class="fas fa-envelope"></i>abduzrahman_sinan@hotmail.com</li>
      <li>  <i class="fas fa-map-marker-alt"></i> Turkey</li>
      <li> <i class="fas fa-business-time"></i>Full-time / Freelancer</li>
      <li> <i class="fas fa-globe"></i><a href="https://www.sinantokmak.com">www.sinantokmak.com</a></li>
    </ul>

    <div class="skills">
      <span class="badge html">HTML</span>
      <span class="badge css">CSS</span>
      <span class="badge js">JS</span>
      <span class="badge react">REACT</span>
    </div>

  
    <a href="/tmw.pdf" download class="download-btn">Download CV
    <i class="fas fa-download"></i></a>
              </div>
              <div className='hccn'>
                <h1>Hey<br />I'm <span>Sinan</span> <br /> Full-stack developer</h1>
                <p>I help business grow by crafting amazing web experiences. If you’re looking for a developer that likes to get stuff done,</p>
                <p className="talk">Let's Talk <i class="fas fa-envelope talk-mail-icon"></i></p>
              </div>
              <div className='hccl'>
               <p> <span>4</span>Programming Languages</p>
               <p> <span>6</span>Development Tools</p>
               <p> <span>8</span>Years of Experience</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home
