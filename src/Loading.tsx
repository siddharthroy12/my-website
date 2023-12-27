import { useState, useEffect } from "react";

function Loading() {
  const [dots, setDots] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((p) => {
        if (p < 5) {
          return p + 1;
        } else {
          return 1;
        }
      });
    }, 200);

    return () => {
      clearInterval(interval);
    };
  }, []);

  let dotsText = "";
  for (let i = 0; i < dots; i++) {
    dotsText += ".";
  }

  return <>Loading{dotsText}</>;
}

export default Loading;
