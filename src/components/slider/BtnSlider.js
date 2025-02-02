import React from "react";
import "./slider.scss";
import leftArrow from "./icons/left-arrow.svg";
import rightArrow from "./icons/right-arrow.svg";

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img alt="arrow" src={direction === "next" ? rightArrow : leftArrow} />
    </button>
  );
}