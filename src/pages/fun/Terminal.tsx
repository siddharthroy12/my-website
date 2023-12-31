import { useEffect, useState, useRef } from "react";
import { setTitle } from "../../useTitleStore";
import "./Terminal.css";

function Terminal() {
  const [output, setOutput] = useState("");
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [caretPosition, setCaretPosition] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

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
    help: () => {
      const text = `This is a fantasy terminal which has lots of fun commands to try out
and this may or may not be used to access very securely protected admin panel ;)

clear                ; Clear the screen
whoami               ; Who am I?
commit-hash          ; Get the hash of the commit this website is built on
      `;
      return text;
    },
    "commit-hash": () => import.meta.env.COMMIT_HASH,
    history: () => history.join("\n"),
    clear: () => {
      setOutput("");
    },
    "": () => {},
  };

  function resolveCommand() {
    setInput("");
    setOutput((p) => {
      let result: string | void = undefined;
      if (input.length) {
        setHistory((p) => {
          p.push(input);
          return p;
        });
        setHistoryIndex(history.length);
      }
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
      if (result !== undefined && result.length) {
        result = result.trim();
        output += `\n${result}`;
      }
      return output;
    });
  }

  window.scrollTo(0, document.body.scrollHeight);

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
      <pre style={{ margin: 0, textWrap: "wrap" }}>{output}</pre>
      <div style={{ display: "flex" }}>
        <span>
          {`${prompt}`}
          &nbsp;
        </span>
        <span className="inputWrapper">
          <div
            className="caret"
            dangerouslySetInnerHTML={{
              __html: "a".repeat(caretPosition),
            }}
          ></div>
          <input
            ref={inputRef}
            onBlur={(e) => {
              e.target.focus();
            }}
            autoCorrect="off"
            autoComplete="off"
            autoCapitalize="off"
            autoFocus
            style={{ width: "100%" }}
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            onKeyDown={(e) => {
              setTimeout(() => {
                setCaretPosition(inputRef.current?.selectionStart ?? 0);
              }, 0);
              if (e.key === "Enter") {
                resolveCommand();
              } else if (e.key === "ArrowUp") {
                if (history.length) {
                  setInput(history[historyIndex]);
                  setCaretPosition(history[historyIndex].length);
                  e.preventDefault();
                  setHistoryIndex((p) => {
                    if (p > 0) {
                      return p - 1;
                    } else {
                      return p;
                    }
                  });
                }
              } else if (e.key === "ArrowDown") {
                e.preventDefault();
                if (history.length) {
                  setHistoryIndex((p) => {
                    if (p < history.length - 1) {
                      return p + 1;
                    } else {
                      return p;
                    }
                  });
                  if (historyIndex < history.length - 1) {
                    setInput(history[historyIndex + 1]);
                    setCaretPosition(history[historyIndex + 1].length);
                  }
                }
              }
            }}
          />
        </span>
      </div>
    </div>
  );
}

export default Terminal;
