import React, { useEffect, useRef, useState } from "react";

const RenderApp = () => {
  const [test, setTest] = useState("");
  const rendersRef = useRef(1);

  useEffect(() => {
    rendersRef.current++;
  });
  return (
    <div>
      <input
        type="text"
        value={test}
        onChange={(e) => {
          setTest(e.target.value);
        }}
      ></input>
      <h1>Renders: {rendersRef.current}</h1>
    </div>
  );
};

export default RenderApp;
