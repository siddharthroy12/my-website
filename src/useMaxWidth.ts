import { useState, useEffect } from "react";

function useMaxWidth(maxWidth: number): boolean {
  const [isMaxWidthReached, setIsMaxWidthReached] = useState<boolean>(false);

  useEffect(() => {
    const root = document.getElementById("root");

    const handleResize = () => {
      if (root) {
        if (root.clientWidth <= maxWidth) {
          setIsMaxWidthReached(true);
        } else {
          setIsMaxWidthReached(false);
        }
      }
    };

    // Initial check
    handleResize();

    const resizeObserver = new ResizeObserver(handleResize);
    if (root) resizeObserver.observe(root);

    // Cleanup the event listener when the component unmounts
    return () => {
      resizeObserver.disconnect();
    };
  }, [maxWidth]);

  return isMaxWidthReached;
}

export { useMaxWidth };
