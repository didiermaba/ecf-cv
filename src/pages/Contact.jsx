import React from "react";
import Navigation from "../components/Navigation";
import Mouse from "../components/Mouse";
import "../styles/contact.css";
import SocialNetWork from "../components/socialNetWork";
import SliderButtons from "../components/sliderButtons";
import ContactForm from "../components/ContactForm";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { motion } from "framer-motion";

const Contact = () => {
  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: 300,
    }
  };
  return (
    <div className="elt">
      <Mouse />
      <Navigation />
      <main>
        <motion.div initial="out" animate="in" exit="out" variants={pageTransition} className="contact">
          <SocialNetWork />
          <br />
          <ContactForm />

          <SliderButtons left={"/portfolio"} />
          <div className="contact-infos">
            <div className="address">
              <div className="content">
                <h4>Adresse</h4>
                <p>5 Rue de la Tour</p>
                <p>78360 Montesson</p>
              </div>
            </div>
            <div className="phone">
              <div className="content">
                <h4>Téléphone</h4>
                <CopyToClipboard text="0628810362" className="hover">
                  <p
                    style={{ cursor: "pointer" }}
                    className="clipboard"
                    onClick={() => alert("Téléphone copié !")}
                  >
                    06 28 81 03 62
                  </p>
                </CopyToClipboard>
              </div>
            </div>
            <div className="email">
              <div className="content">
                <h4>Email</h4>
                <CopyToClipboard text="mabadidier@gmail.com" className="hover">
                  <p
                    style={{ cursor: "pointer" }}
                    className="clipboard"
                    onClick={() => alert("Adresse email copiée ! ")}
                  >
                    mabadidier@gmail.com
                  </p>
                </CopyToClipboard>
              </div>
            </div><br />
            <div className="credits">
            <p>
              Copyright 2023 &middot; Développé par <a href="#">Didier MABA</a>{" "}
            </p>
          </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Contact;
