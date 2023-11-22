import React from "react";
import Navigation from "../components/Navigation";
import Mouse from "../components/Mouse";
import "../styles/contact.css"

const Contact = () => {
  return (
    <>
      <Navigation />
      <div className="wrapper">
        <article className="main">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            tempore sapiente in sint repellat expedita suscipit excepturi
            assumenda atque quam quibusdam, delectus dolores animi consequuntur
            modi. Dolorum quo enim porro!
          </p>
        </article>

        <footer className="footer">
          <h1>Footer</h1>
        </footer>
        <Mouse />
      </div>
    </>
  );
};

export default Contact;
