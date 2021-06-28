/* eslint-disable default-case */
import React, { useState } from "react";
import Controls from "./components/Controls";
import Information from "./components/Information";
import hbo from "./images/hbo.png";
import ibm from "./images/ibm.png";
import nasa from "./images/nasa.png";
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

const letter = {
  title: "Lettermark Logos",
  para: (
    <>
      <p>
        A Monogram or lettermark is a typography-based logo that's comprised of a few
        letters, usually a company's initials. The lettermark is all about simplicity
      </p>
      <p>
        By utilizing just a few letters, lettermark logos are effective at
        streamlining any company brand if they have a long name.
      </p>
    </>
  ),
  logos: [hbo, ibm, nasa],
};
