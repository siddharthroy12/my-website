import "./Header.css";
import HoverAnimation from "./HoverAnimation";
import { Link as RouterLink } from "react-router-dom";
import useTitleStore from "./useTitleStore";
import Face from "./Face";

function Header() {
  const { title } = useTitleStore();
  return (
    <div className="header">
      <RouterLink to="/" className="header-site-logo">
        <Face />
      </RouterLink>
      <div
        style={{
          display: "inline-block",
          fontWeight: "bold",
          color: "white",
          padding: "0 10px",
          textTransform: "uppercase",
        }}
      >
        <HoverAnimation text={title} />
        <span style={{ color: "#818181" }}>_</span>
      </div>
      <div></div>
    </div>
  );
}

export default Header;
