import "./Header.css";
import HoverAnimation from "./HoverAnimation";

function Header() {
  return (
    <div className="header base-padding">
      <div
        style={{ display: "inline-block", fontWeight: "bold", color: "white" }}
      >
        <HoverAnimation text="SIDDHARTH ROY" />
        <span style={{ color: "#818181" }}>_</span>
      </div>
    </div>
  );
}

export default Header;
