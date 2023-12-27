import HoverAnimation from "./HoverAnimation";
import dog from "./dog.txt?raw";
import { Link } from "react-router-dom";

function AreYouLost() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <pre>{dog}</pre>
      <br />
      <Link to="/">
        <HoverAnimation text="Are you lost kid? You should go home." />
      </Link>
    </div>
  );
}

export default AreYouLost;
