import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import supabase from "@/lib/supabase";
import BlogEntry from "./blog-entry";

export const revalidate = 0;

async function getBlogList() {
  let res = await supabase.from("blogs").select("title, slug, created_at");
  let list: { title: string; slug: string; createdAt: string }[] = [];
  res.data?.forEach((row) => {
    list.push({
      title: row.title,
      slug: row.slug,
      createdAt: row.created_at,
    });
  });
  return list;
}

export default async function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const blogs = await getBlogList();
  return (
    <div className="flex md:h-screen h-[calc(100vh-48px)]">
      <div className="w-80 shrink-0 hidden md:block">
        <ScrollArea>
          <div className="sticky top-0 z-10 border-b px-5 py-3 text-sm font-semibold tracking-tight">
            Posts
          </div>
          <div className="p-2 flex flex-col gap-2">
            {blogs.map((blog) => (
              <BlogEntry key={blog.slug} {...blog} />
            ))}
          </div>
        </ScrollArea>
      </div>
      <Separator orientation="vertical" />
      <div className="overflow-auto">
        {/* <ScrollArea>{children}</ScrollArea> */}
        {children}
      </div>
    </div>
  );
}
