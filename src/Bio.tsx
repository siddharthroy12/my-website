import "./Bio.css";
import Link from "./Link";
import { Link as RouterLink } from "react-router-dom";
import HoverAnimation from "./HoverAnimation";

function Bio() {
  return (
    <div className="bio">
      <p>
        Yet another guy who loves programming. Lives with a{" "}
        <RouterLink to="husky-pictures">
          <HoverAnimation text="husky" />
        </RouterLink>
        .
      </p>
      <p>
        Currently making IAoT Dashboards at{" "}
        <Link link="https://www.everlytics.io/" text="Everlytics" />.
      </p>
      <br />
      <p>
        <span className="imp-text">
          <HoverAnimation text="LIKES" />:
        </span>{" "}
        Making Apps on web and mobile and game programming
      </p>
      <p>
        <span className="imp-text">
          <HoverAnimation text="LANGUAGES/FRAMEWORKS" />:
        </span>{" "}
        Python, JavaScript/Typescript, React, Dart, Flutter
      </p>
    </div>
  );
}

export default Bio;
