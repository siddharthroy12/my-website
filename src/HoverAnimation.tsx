import DecodeAnimation, { DecodeAnimationRef } from "react-decode-animation";
import { useRef } from "react";

type HoverAnimationProps = {
  text: string;
};

function HoverAnimation({ text }: HoverAnimationProps) {
  const animationRef = useRef<DecodeAnimationRef>(null);

  return (
    <span
      style={{ display: "inline-block" }}
      onMouseEnter={() => {
        animationRef.current?.reset();
        setTimeout(() => {
          animationRef.current?.play();
        }, 0);
      }}
    >
      <DecodeAnimation
        ref={animationRef}
        text={text}
        interval={30}
        autoplay
        customCharacters="{}/\'()[]<>-+_&*&^%$#@#!"
      />
    </span>
  );
}

export default HoverAnimation;
