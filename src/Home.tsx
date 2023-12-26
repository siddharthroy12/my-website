import Bio from "./Bio";
import MyStuffs from "./MyStuffs";
import useTitleStore from "./useTitleStore";
import { useEffect } from "react";

function Home() {
  const { setTitle } = useTitleStore();
  useEffect(() => {
    setTitle("SIDDHARTH ROY");
  }, []);

  return (
    <>
      <Bio />
      <br />
      <MyStuffs />
    </>
  );
}

export default Home;
