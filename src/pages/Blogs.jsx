import React from "react";

const Blogs = () => {
  return (
    <>
      <div className="containerallblogs">
        <div className="blogs-main-div">
          <div className="symbol-icon-blogs">
            <img src="/Scroll.png" alt="imghere" />
          </div>
          <div className="skills-title">Blogs</div>
          <p className="skills-title-para">
            My thoughts on technology and business, welcome to subscribe
          </p>
        </div>

        <div className="blogs-data-container">
          <div className="img-blogs"></div>
          <div className="blogs-data-container-2">
            <div className="bdc2-1">
              What does it take to become a web developer?
            </div>
            <div className="bdc2-2">
              Web development, also known as website development, encompasses <br />a
              variety of tasks and processes involved in creating websites for
              the internet…
            </div>
            <div className="bdc2-3">
              <span>Read more..</span>
            </div>
            <div className="bdc2-4">
              <span className="bdc2-4-1">web developer</span>
              <span className="bdc2-4-2">sapn2</span>
              <span className="bdc2-4-3">span3</span>
              <span className="bdc2-4-4">span4</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
