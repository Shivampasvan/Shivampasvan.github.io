import React from "react";
import geek from "../assests/digitaro.png";
import lens from "../assests/flippers.png";
import cal from "../assests/cal.png";
import { SiNetlify } from "react-icons/si";
import gojo from "../assests/staycation.png";
import { AiFillGithub } from "react-icons/ai";
import { HStack } from "@chakra-ui/react";

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
              <h5 className="project-title">SmartCart (eBay Clone)</h5>
              <p className="project-description">
                It is an e-commerce website where users can buy and sell items.
              </p>
              <p className="project-tech-stack">
                Tech-Stack : React, Redux, JavaScript, HTML, CSS, Chakra UI,
                Material UI, React Router.
              </p>
              <HStack>
                <div className="project-deployed-link">
                  <a
                    href="https://smart-cart-tejaspedge.vercel.app/"
                    target="_blank"
                  >
                    <i>
                      <SiNetlify />
                    </i>
                  </a>
                </div>
                <div className="project-github-link">
                  <a
                    href="https://github.com/Shivampasvan/SmartCart"
                    target="_blank"
                    id="project-deployed-link"
                  >
                    <i>
                      <AiFillGithub />
                    </i>
                  </a>
                </div>
              </HStack>
            </div>
          </div>

          <div className="project-card">
            <img src={geek} alt="" />
            <div className="layer">
              <h5 className="project-title">Buyify (Amazon Clone)</h5>
              <p className="project-description">
                The company provides products such as apparel, beauty and health
                products, electronics, toys, and tools.
              </p>
              <p className="project-tech-stack">
                Tech-Stack : React, Redux, Node.js, Express, MongoDB, HTML, CSS,
                JavaScript, Material UI, Chakra UI, Mongoose.
              </p>
              <HStack>
                <div className="project-deployed-link">
                  <a
                    href="https://peaceful-liger-051912.netlify.app/"
                    target="_blank"
                  >
                    <i>
                      <SiNetlify />
                    </i>
                  </a>
                </div>
                <div className="project-github-link">
                  <a
                    href="https://github.com/Shivampasvan/Buyify"
                    target="_blank"
                    id="project-deployed-link"
                  >
                    <i>
                      <AiFillGithub />
                    </i>
                  </a>
                </div>
              </HStack>
            </div>
          </div>

          <div className="project-card">
            <img src={cal} alt="" />
            <div className="layer">
              <h5 className="project-title">SmartBuyers (Geekbuying Clone)</h5>
              <p className="project-description">
                It is an e-commerce website where user can purchase electronic
                items.
              </p>
              <p className="project-tech-stack">
                Tech-Stack : React, HTML, CSS, GitHub, Chakra UI, Material UI,
                Vercel
              </p>
              <HStack>
                <div className="project-deployed-link">
                  <a href="https://smartbuyers.vercel.app/" target="_blank">
                    <i>
                      <SiNetlify />
                    </i>
                  </a>
                </div>
                <div className="project-github-link">
                  <a
                    href="https://github.com/Shivampasvan/SmartBuyers"
                    target="_blank"
                    id="project-deployed-link"
                  >
                    <i>
                      <AiFillGithub />
                    </i>
                  </a>
                </div>
              </HStack>
            </div>
          </div>

          <div className="project-card">
            <img src={gojo} alt="" />
            <div className="layer">
              <h5 className="project-title">E-News (NDTV Clone)</h5>
              <p className="project-description">
                It is a news website that provides the latest news from the
                globe related to national, international, sports, science,
                economy, etc.
              </p>
              <p className="project-tech-stack">
                Tech-Stack : HTML, CSS, JavaScript
              </p>
              <HStack>
                <div class="project-deployed-link">
                  <a
                    href="https://taupe-madeleine-6af3ab.netlify.app/"
                    target="_blank"
                  >
                    <i>
                      <SiNetlify />
                    </i>
                  </a>
                </div>
                <div className="project-github-link">
                  <a
                    href="https://github.com/Shivampasvan/E-News"
                    target="_blank"
                    id="project-deployed-link"
                  >
                    <i>
                      <AiFillGithub />
                    </i>
                  </a>
                </div>
              </HStack>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
