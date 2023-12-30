import { useEffect, useState } from "react";

function Face() {
  const [blink, setBlink] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setBlink(true);
      setTimeout(() => {
        setBlink(false);
      }, 100);
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return <code>{blink ? "-_-" : "◉_◉"}</code>;
}

export default Face;
