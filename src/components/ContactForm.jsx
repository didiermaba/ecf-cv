import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import config from "../../config";
// import { init } from "@emailjs/browser";
// import dotenv from "dotenv";


// dotenv.config(); // Charge les variables d'environnement de .env.local

const ContactForm = () => {
  const form = useRef();

  // useEffect(() => {
  //   init(process.env.REACT_APP_ID); // Initialise EmailJS avec l'identifiant chargé depuis les variables d'environnement
  // }, []); // Utilisation d'un useEffect pour appeler init() une seule fois

  useEffect(() => {
    emailjs.init('YHMH6-Bwqm78rkV87');
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    const formMess = document.querySelector(".formMessage");

    emailjs
      .sendForm(
        "service_sjl87kt",
        "template_jovtcmj",
        form.current,
        config.REACT_APP_ID // Utilisation de la clé API depuis la configuration
        // process.env.REACT_APP_ID
      )
      .then(
        (res) => {
          console.log(res.text);
          form.current.reset(); // pr réinitialiser les inputs
          formMess.innerHTML = "<p className='success'>Message envoyé !</p>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2500);
        },
        (error) => {
            console.log(error.text);
          formMess.innerHTML =
            "<p className='error'> Une erreur s'est produite, veuillez réessayer</p>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2500);
        }
      );
  };
 

  return (
    <div className="form-container">
      <h1>Contactez-moi</h1><br />
      <form ref={form} onSubmit={sendEmail} className="form-content">
        <label>Nom</label>
        <input type="text" name="name" required autoComplete="off" id="name" />
        <label>Email</label>
        <input
          type="email"
          name="email"
          required
          autoComplete="off"
          id="email"
        />
        <label>Message</label>
        <textarea name="message" required id="mess" />
        <input type="submit" value="Envoyer" className="hover button" />
      </form>
      <div className="formMessage"></div>
    </div>
  );
};

export default ContactForm;
