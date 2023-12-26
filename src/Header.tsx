import "./Header.css";
import HoverAnimation from "./HoverAnimation";
import { Link as RouterLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <img src="/favicon.png" alt="site icon" />
      <div
        style={{
          display: "inline-block",
          fontWeight: "bold",
          color: "white",
          padding: "0 10px",
        }}
      >
        <RouterLink to="/" className="header-site-name">
          <HoverAnimation text="SIDDHARTH ROY" />
        </RouterLink>
        <span style={{ color: "#818181" }}>_</span>
      </div>
      <div></div>
    </div>
  );
}

export default Header;
