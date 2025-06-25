"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BlogEntry({
  title,
  date,
  slug,
}: {
  title: string;
  date: string;
  slug: string;
}) {
  const pathname = usePathname();
  const dateObject = new Date(date);

  return (
    <Button
      variant="ghost"
      className={`flex-col text-left h-[auto] items-start w-full py-2 px-2 ${
        pathname.includes(slug) ? "bg-accent" : ""
      }`}
      asChild
    >
      <Link href={`/posts/${slug}`}>
        <p className="font-medium mb-2 text-wrap whitespace-normal">{title}</p>
        <p className="text-muted-foreground">{`${dateObject.toLocaleString(
          "default",
          {
            month: "long",
          }
        )} ${dateObject.getDate()}, ${dateObject.getFullYear()}`}</p>
      </Link>
    </Button>
  );
}
