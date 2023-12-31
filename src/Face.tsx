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

  return (
    <code
      onMouseEnter={startBlink}
      onTouchStart={startBlink}
      onClick={startBlink}
    >
      {blink ? "-‿-" : "◉‿◉"}
    </code>
  );
}

export default Face;
