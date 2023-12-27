import useTitleStore from "./useTitleStore";
import { useEffect } from "react";
import "./HuskyPictures.css";

const ids = ["qZ5XKQv", "iVcHHZ6", "KZp2Bl5", "YAMSq6P", "DQYCRlL"];
const columns = 5;

function divideArrayIntoParts(n: number, arr: any[]) {
  if (n <= 0 || !Array.isArray(arr)) {
    return [arr];
  }

  const result = [];
  const length = arr.length;
  const partSize = Math.ceil(length / n);

  for (let i = 0; i < length; i += partSize) {
    result.push(arr.slice(i, i + partSize));
  }

  return result;
}

const dividedIds: string[][] = divideArrayIntoParts(columns, ids);
console.log(dividedIds);

function HuskyPictures() {
  const { setTitle } = useTitleStore();
  useEffect(() => {
    setTitle("MY BRATTY HUSKY");
  }, []);
  return (
    <>
      <p>She is cute but she bites hard.</p>
      <div className="husky-pictures">
        <div className="row">
          {dividedIds.map((column) => (
            <div className="column">
              {column.map((id) => (
                <img src={`https://i.imgur.com/${id}.png`} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HuskyPictures;
