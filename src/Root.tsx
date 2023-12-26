import Header from "./Header";
import { Outlet } from "react-router-dom";
function Root() {
  return (
    <>
      <Header />
      <div className="base-padding">
        <Outlet />
      </div>
    </>
  );
}

export default Root;
