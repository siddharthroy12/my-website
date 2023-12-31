import { useEffect, useState } from "react";

function Face() {
  const [blink, setBlink] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      startBlink();
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  function startBlink() {
    setBlink(true);
    setTimeout(() => {
      setBlink(false);
    }, 100);
  }

  const eye = blink ? "-" : "O";
  const mouth = "‿";

  return (
    <code
      onMouseEnter={startBlink}
      onTouchStart={startBlink}
      onClick={startBlink}
    >
      {eye}
      <span style={{ fontFamily: "sans-serif", fontSize: "10px" }}>
        {mouth}
      </span>
      {eye}
    </code>
  );
}

export default Face;
