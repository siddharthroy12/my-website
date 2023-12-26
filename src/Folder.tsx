import { useEffect, useState } from "react";
import "./Folder.css";
import HoverAnimation from "./HoverAnimation";
type FolderProps = {
  name: string;
  opened?: boolean;
  openTimeout?: number;
  items: Array<JSX.Element>;
};

function Folder({ name, items, opened, openTimeout }: FolderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [baseKey, setBaseKey] = useState<string>("0");

  useEffect(() => {
    if (opened) {
      setTimeout(() => {
        setIsOpen(true);
      }, openTimeout);
    }
  }, [opened]);

  return (
    <div className="folder">
      <div
        className={
          "folder-name " +
          (isOpen ? "folder-name-opened" : "folder-name-closed")
        }
        onClick={() => {
          setIsOpen((p) => !p);
          if (isOpen) {
            setTimeout(() => {
              setBaseKey(() => crypto.randomUUID());
            }, 100);
          }
        }}
      >
        {isOpen ? "[-] " : "[+] "}
        <HoverAnimation text={name} />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateRows: isOpen ? "1fr" : "0fr",
          transitionDuration: "100ms",
        }}
      >
        <div
          style={{
            overflow: "hidden",
          }}
        >
          {items.map((child, index) => {
            return (
              <div key={index + baseKey} style={{ display: "flex" }}>
                <div
                  style={{
                    flex: "0 0 36px",
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      width: "50%",
                      height: index === items.length - 1 ? "14px" : "100%",
                      borderRight: "1px solid var(--line-color)",
                    }}
                  ></div>
                  <div
                    style={{
                      width: "100%",
                      height: "14px",
                      borderBottom: "1px solid var(--line-color)",
                    }}
                  />
                </div>
                <div style={{ paddingTop: "3px", width: "100%" }}>{child}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Folder;
