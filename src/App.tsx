import "./App.css";
import Header from "./Header";
import Bio from "./Bio";
import Folder from "./Folder";
import HoverAnimation from "./HoverAnimation";
import Link from "./Link";

function App() {
  return (
    <>
      <Header />
      <Bio />
      <div className="base-padding">
        <Folder
          name="MY STUFF"
          items={[
            <Folder
              name="WORK HISTORY"
              items={[
                <div>
                  <Link link="https://www.everlytics.io/" text="Everlytics" />{" "}
                  [Frontend Developer] (2021 - Current)
                </div>,
              ]}
            />,
            <Folder
              name="PROJECTS"
              items={[
                <div>
                  <Link
                    link="https://github.com/siddharthroy12/timebrew"
                    text="Timebrew"
                  />{" "}
                  [Desktop, Android] (Flutter) - A personal time tracker
                </div>,
                <div>
                  <Link
                    link="https://github.com/siddharthroy12/Agrus"
                    text="Agrus"
                  />{" "}
                  [Web] (MERN) - A simple and stupid reddit clone
                </div>,
                <div>
                  <Link
                    link="https://github.com/siddharthroy12/recoded"
                    text="Recoded"
                  />{" "}
                  [Web] (React) - Make recordings of your code
                </div>,
                <div>
                  <Link
                    link="https://github.com/siddharthroy12/Gravity-Sandbox"
                    text="Gravity Standbox"
                  />{" "}
                  [Web] (TypeScript) - 2D Newtonian gravity simulator
                </div>,
                <div>
                  <Link
                    link="https://github.com/siddharthroy12/TouchTyper"
                    text="Touch Typer"
                  />{" "}
                  [Desktop, Web] (C++, Raylib) - Touch Typing Test on OpenGL
                </div>,
                <div>
                  <Link
                    link="https://www.lexaloffle.com/bbs/?pid=111184"
                    text="Rockets"
                  />{" "}
                  [PICO-8] (LUA) - Dodge rockets in retro style
                </div>,
                <div>
                  <Link
                    link="https://big-text-meme-generator.vercel.app/"
                    text="Big Text Meme generator"
                  />{" "}
                  [Web] (React) - Have you seen those funny big texts on{" "}
                  <s>Twitter</s> X?
                </div>,
                <div>
                  <Link
                    link="https://github.com/siddharthroy12/raylib-cmake-template"
                    text="Raylib CMake Template"
                  />{" "}
                  [Desktop, Web] - Start coding in C/C++ using Raylib in a
                  minute
                </div>,

                <div>
                  <Link
                    link="https://github.com/siddharthroy12/Hypersonic"
                    text="Hypersonic"
                  />{" "}
                  [Desktop, Web] (C++) - 3D space shooter demo
                </div>,
              ]}
            />,
            <Folder
              name="SOCIAL LINKS"
              items={[
                <div>
                  <Link link="https://twitter.com/reactoverflow" text="X" />
                </div>,
                <div>
                  <Link
                    link="https://www.linkedin.com/in/reactoverflow/"
                    text="LinkedIn"
                  />
                </div>,
                <div>
                  <Link
                    link="https://www.instagram.com/cybrchad/"
                    text="Instagram"
                  />
                </div>,
              ]}
            />,
            <Link link="./Resume.pdf" text="Resume" />,
          ]}
        />
      </div>
    </>
  );
}

export default App;
