import Header from "./Header";
import { Outlet } from "react-router-dom";
import SiteNavigation from "./SiteNavigation";
import { Analytics } from "@vercel/analytics/react";

function Root() {
  return (
    <>
      <Analytics />
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
