import React from "react";
import "../styles/Controls.css";
import { SiWix } from "react-icons/si";
import { FaRedditAlien, FaFootballBall, FaPuzzlePiece } from "react-icons/fa";
import { CgFormatItalic } from "react-icons/cg";
import { AiFillChrome } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { letter, word, picture, abstract, mascot, combo } from "./data";

export default function Controls({ setInfo }) {
  function changeActive({ target }) {}

  return (
    <div id="controls">
      <div id="controls-header">
        <div id="controls-text">
          <p>
            <span id="p-bullet">• </span>
            HOW DO I KNOW WHICH LOGO STYLE IS RIGHT FOR ME?
          </p>
          <h1>Different Types of Logo Styles</h1>
        </div>
        <div id="controls-contact">
          <button className="btn">
            <div id="contact-us">Contact Us</div>
            <div id="circle">
              <BsArrowRight />
            </div>
          </button>
        </div>
      </div>
      <div id="btn-suite">
        <button
          onClick={(event) => {
            setInfo(() => letter);
            changeActive(event);
          }}
        >
          <div className="btn-content">
            <div className="icon">
              <CgFormatItalic />
            </div>
            Lettermark
            <br />
            Logos
          </div>
        </button>
        <button
          onClick={(event) => {
            setInfo(() => word);
            changeActive(event);
          }}
        >
          <div className="btn-content ">
            <div className="icon">
              <SiWix />
            </div>
            Wordmark
            <br />
            Logos
          </div>
        </button>
        <button
          onClick={(event) => {
            setInfo(() => picture);
            changeActive(event);
          }}
        >
          <div className="btn-content">
            <div className="icon">
              <FaFootballBall />
            </div>
            Pictorial Mark
            <br />
            Logos
          </div>
        </button>
        <button
          onClick={(event) => {
            setInfo(() => abstract);
            changeActive(event);
          }}
        >
          <div className="btn-content">
            <div className="icon">
              <AiFillChrome />
            </div>
            Abstract Mark
            <br />
            Logos
          </div>
        </button>
        <button
          onClick={(event) => {
            setInfo(() => mascot);
            changeActive(event);
          }}
        >
          <div className="btn-content">
            <div className="icon">
              <FaRedditAlien />
            </div>
            Mascot
            <br />
            Logos
          </div>
        </button>
        <button
          onClick={(event) => {
            setInfo(() => combo);
            changeActive(event);
          }}
        >
          <div className="btn-content">
            <div className="icon">
              <FaPuzzlePiece />
            </div>
            Combination
            <br />
            Logos
          </div>
        </button>
      </div>
    </div>
  );
}
