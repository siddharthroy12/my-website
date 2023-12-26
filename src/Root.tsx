import Header from "./Header";
import { Outlet } from "react-router-dom";
import SiteNavigation from "./SiteNavigation";
function Root() {
  return (
    <>
      <Header />
      <div className="base-padding">
        <SiteNavigation />
        <br />
        <Outlet />
      </div>
    </>
  );
}

export default Root;
