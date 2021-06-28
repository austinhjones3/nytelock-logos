/* eslint-disable default-case */
import React, { useState } from "react";
import Controls from "./components/Controls";
import Information from "./components/Information";
import { letter } from "./components/data";

export default function LogoSection() {
  const [info, setInfo] = useState(letter);

  return (
    <div className="d-flex flex-column mx-auto justify-content-center">
      <div className="mt-5">
        <Controls setInfo={setInfo} />
      </div>
      <div className="mt-5">
        <Information info={info} />
      </div>
    </div>
  );
}
