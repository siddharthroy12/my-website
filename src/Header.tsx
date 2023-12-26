import "./Header.css";
import HoverAnimation from "./HoverAnimation";
import { Link as RouterLink } from "react-router-dom";
import useTitleStore from "./useTitleStore";
import { useEffect, useState } from "react";

function Header() {
  const [titleKey, setTitleKey] = useState(crypto.randomUUID());
  const { title } = useTitleStore();
  useEffect(() => {
    setTitleKey(crypto.randomUUID());
  }, [title]);
  return (
    <div className="header">
      <RouterLink to="/" className="header-site-name">
        <img src="/favicon.png" alt="site icon" />
      </RouterLink>
      <div
        style={{
          display: "inline-block",
          fontWeight: "bold",
          color: "white",
          padding: "0 10px",
        }}
      >
        <HoverAnimation key={titleKey} text={title} />
        <span style={{ color: "#818181" }}>_</span>
      </div>
      <div></div>
    </div>
  );
}

export default Header;
