import { Separator } from "@/components/ui/separator";
import supabase from "@/lib/supabase";
import Blogs from "./blogs";

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
      <Blogs blogs={blogs} />
      <Separator orientation="vertical" />
      <div className="overflow-auto w-full">{children}</div>
    </div>
  );
}
