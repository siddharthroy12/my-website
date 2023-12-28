import useTitleStore from "../useTitleStore";
import { useEffect, useState, useMemo } from "react";
import supabase from "../supabaseClient";
import Loading from "../Loading";
import "./HuskyPictures.css";
import Meta from "../Meta";
import { useMaxWidth } from "../useMaxWidth";

function divideArray(array: any[], maxSize: number) {
  if (!Array.isArray(array) || typeof maxSize !== "number" || maxSize <= 0) {
    throw new Error("Invalid input");
  }

  const result = [];
  for (let i = 0; i < array.length; i += maxSize) {
    const part = array.slice(i, i + maxSize);
    result.push(part);
  }

  return result;
}

function rotateMatrix(matrix: any[][]) {
  if (
    !Array.isArray(matrix) ||
    matrix.length === 0 ||
    !Array.isArray(matrix[0])
  ) {
    return [];
  }

  const numRows = matrix.length;
  const numCols = matrix[0].length;

  // Transpose the matrix (swap rows with columns)
  const transposedMatrix: any[][] = Array.from({ length: numCols }, () => []);

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      transposedMatrix[j][i] = matrix[i][j];
    }
  }

  // Reverse each row to get the final rotated matrix
  const rotatedMatrix = transposedMatrix.map((row) => row.reverse());

  return rotatedMatrix;
}

function HuskyPictures() {
  const { setTitle } = useTitleStore();
  const [urls, setUrls] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const isFourColumn = !useMaxWidth(800);

  useEffect(() => {
    setTitle("MY BRATTY HUSKY");
    supabase.storage
      .from("husky-pictures")
      .list("")
      .then((res) => {
        let list: any[] = [];
        res.data?.forEach((file) => {
          list.push(
            supabase.storage.from("husky-pictures").getPublicUrl(file.name).data
              .publicUrl,
          );
        });
        setUrls(list);
        setIsLoading(false);
      });
  }, []);

  const matrix = useMemo(() => {
    return rotateMatrix(divideArray(urls, isFourColumn ? 4 : 2));
  }, [isFourColumn]);

  console.log(matrix);

  return (
    <>
      <Meta
        title="My bratty husky"
        description="Adorable pictures of my bratty husky"
        image="https://txpncpayffizjcvvaupf.supabase.co/storage/v1/object/public/husky-pictures/KZp2Bl5.webp"
      />
      <p>She is cute but she bites hard.</p>
      {isLoading ? <Loading /> : null}
      <div className="husky-pictures">
        <div className="row">
          {matrix.map((column) => (
            <div className="column">
              {column.map((url) => (
                <img src={url} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HuskyPictures;
