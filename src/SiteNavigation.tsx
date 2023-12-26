import Folder from "./Folder";
import { Link } from "react-router-dom";
import HoverAnimation from "./HoverAnimation";
import { useState } from "react";

function SiteNavigation() {
  const [key, setKey] = useState(crypto.randomUUID());
  function renderDestination(to: string, text: string) {
    return (
      <div
        onClick={() => {
          setKey(crypto.randomUUID());
        }}
      >
        <Link to={to}>
          <HoverAnimation text={text} />
        </Link>
      </div>
    );
  }
  return (
    <Folder
      key={key}
      name="SITE NAVIGATION"
      items={[
        renderDestination("/", "Home"),
        renderDestination("/husky-pictures", "Pictures of my husky"),
        <Folder name="BLOGS" items={[<div>Coming soon</div>]} />,
        <Folder name="FUN" items={[<div>Comming soon</div>]} />,
      ]}
    />
  );
}

export default SiteNavigation;
