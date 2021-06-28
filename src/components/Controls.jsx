import React, { useEffect, useState } from "react";
import "../styles/Controls.css";
import { SiWix } from "react-icons/si";
import { FaRedditAlien, FaFootballBall, FaPuzzlePiece } from "react-icons/fa";
import { CgFormatItalic } from "react-icons/cg";
import { AiFillChrome } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { letter, word, picture, abstract, mascot, combo } from "./data";
import $ from "jquery";

export default function Controls({ setInfo }) {
  const [active, setActive] = useState("letter");

  useEffect(changeActive, [active]);
  function changeActive() {
    const clickedButton = $(`#${active}`);
    const buttons = $("#btn-suite > button");
    for (let btn of buttons) {
      $(btn).removeClass("selected");
    }
    clickedButton.addClass("selected");
  }

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
          id="letter"
          onClick={() => {
            setInfo(() => letter);
            setActive(() => "letter");
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
          id="word"
          z
          onClick={() => {
            setInfo(() => word);
            setActive(() => "word");
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
          id="picture"
          onClick={() => {
            setInfo(() => picture);
            setActive(() => "picture");
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
          id="abstract"
          onClick={() => {
            setInfo(() => abstract);
            setActive(() => "abstract");
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
          id="mascot"
          onClick={() => {
            setInfo(() => mascot);
            setActive(() => "mascot");
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
          id="combo"
          onClick={() => {
            setInfo(() => combo);
            setActive(() => "combo");
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
