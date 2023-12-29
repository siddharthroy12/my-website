import { useEffect, useState } from "react";
import "./Folder.css";
import HoverAnimation from "./HoverAnimation";

type FolderProps = {
  name: string;
  opened?: boolean;
  onOpenedChanged?: (arg0: boolean) => void;
  autoOpen?: boolean;
  openTimeout?: number;
  items: Array<JSX.Element>;
};

function Folder({
  name,
  items,
  opened,
  openTimeout,
  autoOpen,
  onOpenedChanged,
}: FolderProps) {
  const [isOpen, setIsOpen] = useState<boolean>(
    opened === undefined ? false : opened,
  );
  const [baseKey, setBaseKey] = useState<string>("0");

  useEffect(() => {
    if (opened !== undefined) {
      setIsOpen(opened);
    }
  }, [opened]);

  useEffect(() => {
    if (autoOpen) {
      setTimeout(() => {
        setIsOpen(true);
      }, openTimeout);
    }
  }, [autoOpen, openTimeout]);

  useEffect(() => {
    if (onOpenedChanged) {
      onOpenedChanged(isOpen);
    }
  }, [isOpen]);

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
                      height: "17px",
                      borderBottom: "1px solid var(--line-color)",
                    }}
                  />
                </div>
                <div
                  style={{
                    paddingTop: "5px",
                    width: "100%",
                    paddingLeft: "5px",
                  }}
                >
                  {child}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Folder;
