type LinkProps = {
  link: string;
  text: string;
};

import HoverAnimation from "./HoverAnimation";

function Link({ link, text }: LinkProps) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <HoverAnimation text={text} />
    </a>
  );
}

export default Link;
