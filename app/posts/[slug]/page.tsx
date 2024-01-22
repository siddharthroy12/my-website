import supabase from "@/lib/supabase";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./markdown.scss";
import { Card } from "@/components/ui/card";

async function getPostMarkdown(slug: string) {
  const blog = await supabase
    .from("blogs")
    .select("slug, title, content, created_at")
    .eq("slug", slug);

  if (blog.data === null) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }

  return blog.data[0];
}

export default async function Post({ params }: { params: { slug: string } }) {
  const res = await getPostMarkdown(params.slug);
  const date = new Date(res.created_at);

  return (
    <div className="p-10">
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
        components={{
          pre: ({ children }) => {
            return (
              <Card className="overflow-auto w-full">
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
