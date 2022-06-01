import React, { useRef, useState } from "react";

const FocusApp = () => {
  const [text, setText] = useState("");

  const inputRef = useRef();

  const handleFocus = () => {
    const input = inputRef.current;
    input.focus();
  };
  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></input>
      <button onClick={() => handleFocus()}>Focus</button>
    </div>
  );
};

export default FocusApp;
