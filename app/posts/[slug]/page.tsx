import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./markdown.scss";
import { Card } from "@/components/ui/card";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { duotoneSea } from "react-syntax-highlighter/dist/cjs/styles/prism";
import rehypeRaw from "rehype-raw";
import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";

// Generate static params for all posts
export async function generateStaticParams() {
  const posts = getAllPostSlugs()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}


export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
  }
}

export default async function Post({ params }: { params: { slug: string } }) {
  const res = await getPostBySlug(params.slug);

   if (!res) {
    notFound()
  }

  
  const date = new Date(res.date);

 
  return (
    <div className="p-10" suppressHydrationWarning>
      <h1 className="mt-10 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {res.title}
      </h1>
      <p className="text-muted-foreground mb-5">{`${date.toLocaleString(
        "default",
        {
          month: "long",
        }
      )} ${date.getDate()}, ${date.getFullYear()}`}</p>
      <Markdown
        className="markdown"
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          code(props) {
            const { children, className, node, ...rest } = props;
            const match = /language-(\w+)/.exec(className || "");
            let language = "markdown";
            if (match) {
              language = match[1];
            }
            return (
              <div className="bg-zinc-950 dark:bg-zinc-900 inline-block rounded px-2 text-teal-100">
                {/* @ts-ignore */}
                <SyntaxHighlighter
                  {...rest}
                  PreTag="div"
                  children={String(children).replace(/\n$/, "")} // eslint-disable-line
                  language={language}
                  style={duotoneSea}
                  useInlineStyles
                  customStyle={{
                    fontFamily: "monospace",
                    background: "none",
                    padding: 0,
                    margin: 0,
                    border: "none",
                    color: "rgb(186 230 253)",
                    textShadow: "none",
                    boxShadow: "none",
                    overflow: "unset",
                    display: "inline-block",
                  }}
                  codeTagProps={{ style: { background: "none" } }}
                />
              </div>
            );
          },
          pre({ children }) {
            return (
              <Card className="overflow-auto p-5 rounded-lg bg-zinc-950 dark:bg-zinc-900 w-full">
                <pre>{children}</pre>
              </Card>
            );
          },
        }}
      >
        {res.content}
      </Markdown>
    </div>
  );
}
