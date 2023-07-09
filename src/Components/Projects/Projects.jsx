import React from "react";
import "./Projects.css";
import ebay from "../../Assets/ebay.png"
import amazon from "../../Assets/amazon.png"
import geek from "../../Assets/geek.png"
import ndtv from "../../Assets/ndtv.png"

import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
import { SiRedux } from "react-icons/si"
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different" data-aos="fade-right">
          Projects
        </h2>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={ebay}
                  alt="SmartCart"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h3>eBay (Clone)</h3>
              <p>
                ebay was one of the first companies to create and market an
                Internet Web site to match buyers and sellers of goods and
                services. The company, which caters to individual sellers
                and small businesses, is a market leader in e-commerce
                worldwide.
              </p>
              <div>
                <FaReact />
                <SiHtml5 />
                <IoLogoJavascript />
                <SiNodedotjs />
                <SiRedux />
              </div>
              <div>
                <a
                  href="https://smart-cart-tejaspedge.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Shivampasvan/SmartCart"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={amazon}
                  alt="Amazon"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h3>Amazon (Clone)</h3>
              <p>
                Amazon.com is a vast Internet-based enterprise that sells
                books, music, movies, housewares, electronics, toys, and
                many other goods, either directly or as the middleman
                between other retailers and Amazon.com's millions of
                customers.
              </p>
              <div>
                <IoLogoJavascript />
                <FaReact />
                <SiNodedotjs />
                <SiExpress />
                <SiMongodb />
              </div>
              <div>
                <a
                  href="https://peaceful-liger-051912.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Shivampasvan/Buyify"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                src={geek}
                  alt="GeekBuying Clone"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h3>Geekbuying (Clone) </h3>
              <p>
                We at Geekbuying are all about making our customers' lives
                comfortable and smarter. If you are looking for
                the latest and the greatest product in categories like smart
                home and outdoor gadgets, Geekbuying is where you should be!
              </p>
              <div>
                <SiHtml5 />
                <IoLogoJavascript />
              <FaReact />
                <SiRedux />
              </div>
              <div>
                <a
                  href="https://smartbuyers.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Shivampasvan/SmartBuyers"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={ndtv}
                  alt="NDTV"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h3>NDTV News (Clone)</h3>
              <p>
                New Delhi Television Ltd is an Indian news media company
                focusing on broadcast and digital news publication. The
                company is considered to be a legacy brand that pioneered
                independent news broadcasting in India.
              </p>
              <div>
                <SiJavascript />
                <SiHtml5 />
                <DiCss3 />
              </div>
              <div>
                <a
                  href="https://taupe-madeleine-6af3ab.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Shivampasvan/E-News"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
