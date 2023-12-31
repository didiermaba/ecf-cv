import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/sliderButtons.css";

const SliderButtons = (props) => {
  console.log(props);
  return (
    <div className="slider-bottom">
      {props.left && (
        <NavLink to={props.left} className="left hover">
          <span>&#10092;</span>
        </NavLink>
      )}
      {props.right && (
        <NavLink to={props.right} className="right hover">
          <span>&#10093;</span>
        </NavLink>
      )}
    </div>
  );
};

export default SliderButtons;
