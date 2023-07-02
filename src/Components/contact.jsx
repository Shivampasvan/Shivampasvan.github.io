import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";

const Contact = () => {
  return (
    <>
      <section className="nav-link contact" id="contact">
        <div className="nav-link-contact">
          <h2>
            Contact <span>Me!</span>
          </h2>
          <h4>
            Talent wins games, but teamwork and intelligence win championships.
          </h4>
          <p>
            Fill the form to connect if any query{" "}
            <i className="fas fa-smile"></i>
          </p>
          <div className="list">
            <li id="contact-phone">
              <a
                href="https://api.whatsapp.com/send?phone=+918006376765"
                target="_blank"
              >
                +91-8006376765
              </a>
            </li>
            <li>
              <a
                href="mailto:shivampasvan@gmail.com"
                id="contact-email"
                target="_blank"
              >
                shivampasvan@gmail.com{" "}
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/shivampasvan/"
                id="contact-linkedin"
              >
                {" "}
                Linkedin : Shivam Pasvan
              </a>
            </li>
          </div>
          <div className="contact-icons">
            <a
              id="contact-github"
              href="https://github.com/Shivampasvan"
              target="_blank"
            >
              <i>
                <AiFillGithub />
              </i>
            </a>

            <a
              id="contact-linkedin"
              href="https://www.linkedin.com/in/shivampasvan/"
              target="_blank"
            >
              <i>
                <BsLinkedin />
              </i>
            </a>
          </div>
        </div>

        <div className="contact-form">
          <form>
            <input type="name" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email Address" required />
            <input type="" placeholder="Your Mobile Number" required />
            <textarea
              name=""
              id=""
              cols="35"
              rows="10"
              placeholder="How Can I Help You"
              required
            ></textarea>
            <input
              type="submit"
              value="Send Message"
              className="submit"
              required
            />
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
