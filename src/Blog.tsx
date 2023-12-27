import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import useTitleStore from "./useTitleStore";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

function Blog() {
  const { title, content, created_at }: any = useLoaderData();
  const date = new Date(created_at);

  const { setTitle } = useTitleStore();

  useEffect(() => {
    setTitle(title);
  }, [title]);

  return (
    <>
      <p>
        Created at:{" "}
        {`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}
      </p>
      <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
    </>
  );
}

export default Blog;
