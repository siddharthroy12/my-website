import { Separator } from "@/components/ui/separator";
import supabase from "@/lib/supabase";
import Blogs from "./blogs";
import { getAllPosts } from "@/lib/posts";


async function getBlogList() {
  return getAllPosts();
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
