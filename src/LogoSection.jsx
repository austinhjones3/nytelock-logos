import React, { useState } from "react";
import Controls from "./components/Controls";
import Information from "./components/Information";

export default function LogoSection() {
  const [active, setActive] = useState("letter");
  return (
    <div className="d-flex flex-column mx-auto justify-content-center">
      <div className="mt-5">
        <Controls setActive={setActive} />
      </div>
      <div className="mt-5">
        <Information active={active} />
      </div>
    </div>
  );
}
