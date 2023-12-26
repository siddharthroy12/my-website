import "./Bio.css";
import Link from "./Link";
import HoverAnimation from "./HoverAnimation";

function Bio() {
  return (
    <div className="bio">
      <p>Yet another guy who loves programming. Lives with a husky.</p>
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
        JavaScript/Typescript, React, Dart, Flutter, Java, LibGDX
      </p>
    </div>
  );
}

export default Bio;
