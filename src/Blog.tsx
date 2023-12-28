import { useEffect, useMemo } from "react";
import { useLoaderData } from "react-router-dom";
import useTitleStore from "./useTitleStore";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import HoverAnimation from "./HoverAnimation";
import Meta from "./Meta";

function getFirstSentence(inputString: string) {
  const splits = inputString.split("\n");
  let index = 0;
  let match = null;

  while (!match && index < splits.length) {
    match = splits[index].match(/^.*?[.!?](?:\s|$)/);
    index++;
  }

  if (match) {
    return match[0].trim();
  } else {
    return "";
  }
}

function getFirstImage(markdownString: string) {
  // Regular expression to match the first image URL in Markdown
  const imageRegex = /!\[.*?\]\((.*?)\)/;

  // Match the first image using the regular expression
  const match = markdownString.match(imageRegex);

  // Check if a match is found
  if (match && match[1]) {
    // Extract the URL from the matched result
    const imageUrl = match[1];
    return imageUrl;
  } else {
    // Return empty string if no image is found
    return "";
  }
}

function Blog() {
  const { title, content, created_at }: any = useLoaderData();
  const date = new Date(created_at);

  const firstSentence = useMemo(() => {
    return getFirstSentence(content);
  }, [content]);

  const firstImage = useMemo(() => {
    return getFirstImage(content);
  }, [content]);

  const { setTitle } = useTitleStore();

  useEffect(() => {
    setTitle(title);
  }, [title]);

  return (
    <>
      <Meta title={title} description={firstSentence} image={firstImage} />
      <p>
        Created at:{" "}
        {`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}
      </p>
      <Markdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: (props) => {
            const { node, ...rest } = props;
            return (
              <a href={rest.href} target="_blank" rel="noreferrer">
                {/* @ts-ignore */}
                <HoverAnimation text={rest.children} />
              </a>
            );
          },
        }}
      >
        {content}
      </Markdown>
    </>
  );
}

export default Blog;
