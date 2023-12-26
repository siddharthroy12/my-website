import "./Bio.css";
import Link from "./Link";

function Bio() {
  return (
    <div className="bio base-padding">
      <p>Yet another guy who loves programming. Lives with a husky.</p>
      <p>
        Currently making IAoT Dashboards at{" "}
        <Link link="https://www.everlytics.io/" text="Everlytics" />.
      </p>
      <br />
      <p>
        <span className="imp-text">LIKES:</span> Making Apps on web and mobile
        and game programming
      </p>
      <p>
        <span className="imp-text">LANGUAGES/FRAMEWORKS:</span>{" "}
        JavaScript/Typescript, React, Dart, Flutter, Java, LibGDX
      </p>
    </div>
  );
}

export default Bio;
