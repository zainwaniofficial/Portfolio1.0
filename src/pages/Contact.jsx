import React from 'react'

const Contact = () => {
  return (

    <>
    
    <div className='contact-maindiv'>

     <div className="symbol-icon-contact-div">
      <img src="/Scroll.png" alt="imghere" />
    
    </div>
      <div className='skills-title'>Contact</div>
      <p className='skills-title-para'>I’m currently available for freelance work</p>
      

      <div className="msg-container-contact">
            Send me a message
        </div>

        </div>
      <div class="contact-container">

       

  <form class="contact-form">
    <div class="form-row">
      <div class="form-group">
        <label>Your name *</label>
        <input type="text" placeholder="Enter your name" />
      </div>
      <div class="form-group">
        <label>Your email *</label>
        <input type="email" placeholder="Enter your email" />
      </div>
    </div>
    <div class="form-group full-width">
      <label>Your message *</label>
      <textarea placeholder="Enter your needs"></textarea>
    </div>
    <button type="submit" class="submit-btn">
      Send Message
    </button>
  </form>
</div>

    
    </>
  )
}

export default Contact
