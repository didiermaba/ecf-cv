import React from "react";
import "../styles/socialNetWork.css"


const SocialNetWork = () => {
    const anim = () => {
        const icons = document.querySelectorAll(".social-network a");

        icons.forEach((link) => {
            link.addEventListener("mouseover", (e) => {
              link.style.transform = `translate(${e.offsetX - 20}px, ${
                e.offsetY - 13
              }px )`;
            });
      
            link.addEventListener("mouseleave", () => {
              link.style.transform ="";
            })
          });
    }
  return (
    <div className="social-network">
      <ul className="content">
        <a
          href="https://www.linkedin.com/in/didier-maba-a7b725255/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
          onMouseOver={anim}
        >
          <li>
            <i className="fab fa-linkedin"></i>
          </li>
        </a>

        <a
          href="https://twitter.com/DidierMaba"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
          onMouseOver={anim}
        >
          <li>
            <i className="fab fa-twitter"></i>
          </li>
        </a>

        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
          onMouseOver={anim}
        >
          <li>
            <i className="fab fa-instagram"></i>
          </li>
        </a>
        <a
          href="https://github.com/didiermaba"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
          onMouseOver={anim}
        >
          <li>
            <i className="fab fa-github"></i>
          </li>
        </a>
      </ul>
    </div>
  );
};

export default SocialNetWork;
