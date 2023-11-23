import React from "react";
import Navigation from "../components/Navigation";
import Mouse from "../components/Mouse";
import "../styles/contact.css";
import SocialNetWork from "../components/socialNetWork";
import SliderButtons from "../components/sliderButtons";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <>
      <Mouse />
      <Navigation />
      <main>
        <div className="contact">
          <SocialNetWork />
          <br />
          <ContactForm />
         
          <SliderButtons left={"/portfolio"} right={"/contact"} />

          {/* <footer className="footer">
            <h1>Footer</h1>
          </footer> */}
        </div>
      </main>
    </>
  );
};

export default Contact;
