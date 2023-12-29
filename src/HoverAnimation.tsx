import { useEffect, useRef, useState } from "react";

const randomChars = ["_", "&", "*", "0", "$", "!", "+", "-"];

function getRandomElement(arr: any[]) {
  if (arr.length === 0) {
    return undefined; // Return undefined for an empty array
  }

  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function limitedInterval(
  func: (arg0: number) => void,
  delay: number,
  limit: number,
) {
  let count = 0;

  const intervalId = setInterval(() => {
    func(count);
    count++;

    if (count >= limit) {
      clearInterval(intervalId);
    }
  }, delay);
}

type HoverAnimationProps = {
  text: string;
};

function HoverAnimation({ text }: HoverAnimationProps) {
  const [currentText, setCurrentText] = useState(text);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }
    playAnimation();
    intervalRef.current = setInterval(() => {
      if (Math.random() >= 0.95) {
        playAnimation();
      }
    }, 5000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text]);

  function playAnimation() {
    const frames: string[][] = [];
    let framesLength = 12;
    for (let i = 0; i < text.length; i++) {
      const list = [];
      for (let j = 0; j < framesLength - 1; j++) {
        const isRandom = Math.random() >= j / framesLength + 0.5;
        if (isRandom) {
          list.push(getRandomElement(randomChars));
        } else {
          list.push(text[i]);
        }
      }
      list.push(text[i]);
      frames.push(list);
    }
    let frameIndex = 0;
    limitedInterval(
      () => {
        setCurrentText((prev) => {
          if (prev.length < text.length) {
            prev += " ".repeat(text.length - prev.length);
          } else {
            prev = prev.slice(0, text.length);
          }

          const split = prev.split("");

          for (let i = 0; i < frames.length; i++) {
            if (frames[i][frameIndex]) {
              split[i] = frames[i][frameIndex];
            }
          }

          frameIndex++;

          return split.join("");
        });
      },
      60,
      framesLength,
    );
  }

  return (
    <code
      style={{ display: "inline-block" }}
      onMouseEnter={() => {
        playAnimation();
      }}
    >
      {currentText}
    </code>
  );
}

export default HoverAnimation;
