import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
// import dotenv from "dotenv";


// dotenv.config(); // Charge les variables d'environnement de .env.local

const ContactForm = () => {
  const form = useRef();

//   useEffect(() => {
//     init(process.env.REACT_APP_ID); // Initialise EmailJS avec l'identifiant chargé depuis les variables d'environnement
//   }, []); // Utilisation d'un useEffect pour appeler init() une seule fois


  const sendEmail = (e) => {
    e.preventDefault();
    const formMess = document.querySelector(".formMessage");

    emailjs
      .sendForm(
        "service_sjl87kt",
        "template_jovtcmj",
        form.current
        // process.env.REACT_APP_ID
      )
      .then(
        (res) => {
          console.log(res.text);
          form.current.reset(); // pr réinitialiser les inputs
          formMess.innerHTML = "<p class='success'>Message envoyé !</p>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2500);
        },
        (error) => {
            console.log(error.text);
          formMess.innerHTML =
            "<p class='error'> Une erreur s'est produite, veuillez réessayer</p>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2500);
        }
      );
  };

  // Initialisation de EmailJS
  init("YHMH6-Bwqm78rkV87");

  return (
    <div className="form-container">
      <h2>Contactez-moi</h2>
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
