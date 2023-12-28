import Bio from "./Bio";
import MyStuffs from "./MyStuffs";
import useTitleStore from "./useTitleStore";
import { useEffect } from "react";
import Meta from "./Meta";

function Home() {
  const { setTitle } = useTitleStore();
  useEffect(() => {
    setTitle("SIDDHARTH ROY");
  }, []);

  return (
    <>
      <Meta
        title="Siddharth Roy"
        description="Yet another guy who loves programming. Lives with a husky"
        image="/favicon.png"
      />
      <Bio />
      <br />
      <MyStuffs />
    </>
  );
}

export default Home;
