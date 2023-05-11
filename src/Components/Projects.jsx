import React from "react";
import geek from "../assests/digitaro.PNG";
import lens from "../assests/flippers.PNG";
import cal from "../assests/cal.png";
import { SiNetlify } from "react-icons/si";
import gojo from "../assests/staycation.PNG";
import { AiFillGithub } from "react-icons/ai";

const Projects = () => {
  return (
    <>
      <section id="projects">
        <div className="main-text">
          <h2>
            <span>My </span>Projects
          </h2>
        </div>

        <div className="nav-link projects" id="nav-link-projects">
          <div className="project-card">
            <img src={lens} alt="" />
            <div className="layer">
              <h5 className="project-title">Visula Design</h5>
              <p className="project-description">
              Famous Footwear is a nationwide chain of retail stores in the United States dealing in branded footwear, generally at prices discounted from manufacturer's suggested prices. The chain is a division of the St. Louis-based Caleres and had more than 1,125 stores in 2010
              </p>
              <p className="project-tech-stack">
                Tech-Stack : REACT, JS, HTML, CSS, Chakra
              </p>
              <div className="project-deployed-link">
                <a href="https://famousfootwear-2syfk4gfp-1995neha18.vercel.app/" target="_blank">
                  <i>
                    <SiNetlify />
                  </i>
                </a>
              </div>
              <div className="project-github-link">
                <a
                  href="https://github.com/1995Neha18/glorious-calendar-2511/tree/main/famousfootwear"
                  target="_blank"
                  id="project-deployed-link"
                >
                  <i>
                    <AiFillGithub />
                  </i>
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <img src={geek} alt="" />
            <div className="layer">
              <h5 className="project-title">Visula Design</h5>
              <p className="project-description">
              Reliance Digital is an Indian consumer electronics retailer. It is a subsidiary of Reliance Retail, a wholly owned subsidiary of Reliance Industries. 
              </p>
              <p className="project-tech-stack">Tech-Stack : HTML , CSS, JS</p>
              <div className="project-deployed-link">
                <a
                  href="https://lively-quokka-b8e36b.netlify.app/"
                  target="_blank"
                >
                  <i>
                    <SiNetlify />
                  </i>
                </a>
              </div>
              <div className="project-github-link">
                <a
                  href="https://github.com/1995Neha18/proud-tooth-7984"
                  target="_blank"
                  id="project-deployed-link"
                >
                  <i>
                    <AiFillGithub />
                  </i>
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <img src={cal} alt="" />
            <div className="layer">
              <h5 className="project-title">Visula Design</h5>
              <p className="project-description">
               An E-commerce website including the overall CRUD operations, created this website with the help of React-Redux & json-server.
              </p>
              <p className="project-tech-stack">Tech-Stack</p>
              <div className="project-deployed-link">
                <a
                  href="https://admirable-panda-d420f4.netlify.app/"
                  target="_blank"
                >
                  <i>
                    <SiNetlify />
                  </i>
                </a>
              </div>
              <div className="project-github-link">
                <a
                  href="https://github.com/Shahid77137/gleaming-experience-7292"
                  target="_blank"
                  id="project-deployed-link"
                >
                  <i>
                    <AiFillGithub />
                  </i>
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <img src={gojo} alt="" />
            <div className="layer">
              <h5 className="project-title">Visula Design</h5>
              <p className="project-description">
              Staycation is a travel fare aggregator website and travel metasearch engine. The website is owned by Orbitz Worldwide, Inc., a subsidiary of Expedia Group. It is headquartered in the Citigroup Center, Chicago, Illinois.
              </p>
              <p className="project-tech-stack">Tech-Stack : HTML, CSS, JS</p>
              <div class="project-deployed-link">
                <a
                  href="https://stayccationcom.netlify.app/"
                  target="_blank"
                >
                  <i>
                    <SiNetlify />
                  </i>
                </a>
              </div>
              <div className="project-github-link">
                <a
                  href="https://github.com/1995Neha18/likely-secretary-3214"
                  target="_blank"
                  id="project-deployed-link"
                >
                  <i>
                    <AiFillGithub />
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
