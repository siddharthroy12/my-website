import { useEffect, useState } from "react";
import { setTitle } from "../../useTitleStore";
import "./Terminal.css";

function Terminal() {
  const [output, setOutput] = useState(
    "NOTE: This terminal is currently non functional",
  );
  const [input, setInput] = useState("");
  const prompt = "$";

  useEffect(() => {
    setTitle("Terminal");
  }, []);

  // Define commands here
  const commands: { [key: string]: (arg0?: string) => string | void } = {
    whoami: () => "Siddharth Roy",
    cd: (directory?: string) => {
      return `changed path to ${directory}`;
    },
    clear: () => {
      setOutput("");
    },
    "": () => {},
  };

  function resolveCommand() {
    setInput("");
    setOutput((p) => {
      let result: string | void = undefined;
      try {
        result = commands[input.trim()]();
      } catch (e) {
        result = `${input}: command not found`;
      }
      let output = "";
      if (p !== "") {
        output += p + "\n";
      }
      output += `${prompt} ${input}`;
      if (result !== undefined) {
        output += `\n${result}`;
      }
      return output;
    });
  }

  return (
    <div className="terminal">
      <style>
        {`
      .caret::after {
        content: '█';
        color: var(--text-color);
      }
     `}
      </style>
      <pre style={{ margin: 0 }}>{output}</pre>
      <div style={{ display: "flex" }}>
        <span>
          {`${prompt}`}
          &nbsp;
        </span>
        <span className="inputWrapper">
          <div
            className="caret"
            dangerouslySetInnerHTML={{
              __html: input.replaceAll(" ", "&nbsp;"),
            }}
          ></div>
          <input
            onBlur={(e) => {
              e.target.focus();
            }}
            autoFocus
            style={{ width: "100%" }}
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                resolveCommand();
              }
            }}
          />
        </span>
      </div>
    </div>
  );
}

export default Terminal;
