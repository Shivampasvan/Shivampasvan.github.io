import React from "react";
import me from "../assests/photo.jpg";
import CV from "../assests/cv.pdf";

const About = () => {
  return (
    <>
      <section className="about section" id="about">
        <div
          className="about-img"

        >
          <img
            className="home-img"
            src={me} alt="home-image"

          />
        </div>
        <div className="nav-link about">
          <h1
            style={{
              fontSize: "55px",
              paddingBottom: "10px",
            }}
          >
            About <span>Me</span>
          </h1>
          {/* <h2 id="user-detail-name">
            I'm <span>Neha Sahu</span> 
          </h2> */}

          {/* <h4>Mern Developer</h4> */}
          <p id="user-detail-intro" style={{ letterSpacing: "1px", fontSize: "22px" }}>
            An Inquisitive solution-driven Full Stack Web Developer(MERN). Having 1200+ hours of hands-on experience in coding and developing real-world web applications with TechStack like HTML, CSS, JavaScript, React, TypeScript, Redux, NodeJS, MongoDB & Mongoose. Passionate about learning new technologies and methodologies.
          </p>
          <br />
          <button id="resume-button-2" style={{ marginTop: "5px" }}>
            <a
              href={CV}
              download="pdf"
              id="resume-link-2"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1kkba3IRIWZ7W77s2AZ040myrHEOJVOmh/view?usp=share_link"
                )
              }
            >
              <span>
                <i className="bx bx-download"></i>
              </span>
              Resume
            </a>
          </button>
        </div>
      </section>
    </>
  );
};

export default About;
