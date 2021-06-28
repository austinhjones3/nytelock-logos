/* eslint-disable default-case */
import React from "react";
import "../styles/Information.css";

export default function Information({ info }) {
  return (
    <div id="info" className="row">
      <div className="col-6">
        <h2>{info.title}</h2>
        <div id="info-para">{info.para}</div>
      </div>
      <div className="col-6 d-flex" id="info-logos">
        {info.logos.map((logo) => (
          <img src={logo} alt="logo" className="logo-img" />
        ))}
      </div>
    </div>
  );
}
