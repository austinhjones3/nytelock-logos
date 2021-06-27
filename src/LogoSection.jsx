import React, { useState } from "react";
import Controls from "./components/Controls";
import Information from "./components/Information";

export default function LogoSection() {
  const [active, setActive] = useState(null);
  return (
    <>
      <Controls setActive={setActive} />
      <Information active={active} />
    </>
  );
}
