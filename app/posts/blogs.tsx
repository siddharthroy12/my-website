"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import BlogEntry from "./blog-entry";
import { usePathname } from "next/navigation";
type BlogsProps = {
  blogs: {
    title: string;
    slug: string;
    date: string;
  }[];
};

export default function Blogs({ blogs }: BlogsProps) {
  const pathname = usePathname();
  const onPostsPage = pathname.split("/").filter((s) => s.length).length === 1;
  return (
    <div
      className={`shrink-0 ${
        onPostsPage ? "w-full md:w-80" : "w-80 hidden md:block"
      }`}
    >
      <ScrollArea>
        <div className="sticky hidden md:block top-0 z-10 border-b px-5 py-3 text-sm font-semibold tracking-tight">
          Posts
        </div>
        <div className="p-2 flex flex-col gap-2">
          {blogs.map((blog) => (
            <BlogEntry key={blog.slug} {...blog} />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
