import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";


const TemplateForm = () => {
    const form = useRef();
  const [message, setMessage] = useState(""); // État pour gérer le message

  // Initialisation de EmailJS
  init("YHMH6-Bwqm78rkV87");

  const sendEmail = (e) => {
    e.preventDefault();
    const formMess = document.querySelector(".formMessage");

    emailjs
      .sendForm(
        "service_sjl87kt",
        "template_jovtcmj",
        form.current
      )
      .then(
        (res) => {
          console.log(res.text);
          form.current.reset(); // Pour réinitialiser les inputs
          setMessage("Message envoyé !"); // Définir le message de succès

          setTimeout(() => {
            setMessage(""); // Réinitialiser le message après un délai
          }, 2500);
        },
        (error) => {
          setMessage("Une erreur s'est produite, veuillez réessayer"); // Définir le message d'erreur

          setTimeout(() => {
            setMessage(""); // Réinitialiser le message après un délai
          }, 2500);
        }
      );
  };

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
      <div className="formMessage">
      {message && (
          <p className={message === "Message envoyé !" ? "success" : "error"}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default TemplateForm;