import { useState, useEffect } from "react";

function useMaxWidth(maxWidth: number): boolean {
  const [isMaxWidthReached, setIsMaxWidthReached] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= maxWidth) {
        setIsMaxWidthReached(true);
      } else {
        setIsMaxWidthReached(false);
      }
    };

    // Initial check
    handleResize();

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [maxWidth]);

  return isMaxWidthReached;
}

export { useMaxWidth };
