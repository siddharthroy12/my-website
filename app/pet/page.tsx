"use client";
import supabase from "@/lib/supabase";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

function GridItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="group relative flex h-48 items-end overflow-hidden rounded-lg shadow-lg md:h-80">
      {children}
    </div>
  );
}

export default function Pet() {
  const [urls, setUrls] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    supabase.storage
      .from("husky-pictures")
      .list("")
      .then((res) => {
        let list: any[] = [];
        res.data?.forEach((file) => {
          list.push(
            supabase.storage.from("husky-pictures").getPublicUrl(file.name).data
              .publicUrl
          );
        });
        console.log("done");
        setUrls(list);
        setIsLoading(false);
      });
  }, []);
  return (
    <div className="max-w-[80rem] mx-auto px-8 py-20 grid grid-cols-2 gap-4 lg:grid-cols-3 md:gap-6 xl:gap-8">
      {isLoading
        ? [1, 2, 3, 4, 5, 6].map((i) => (
            <GridItem key={i}>
              <Skeleton className="w-full h-full" />
            </GridItem>
          ))
        : urls.map((url) => (
            <GridItem>
              <Image key={url} src={url} fill alt="Pet picture" />
            </GridItem>
          ))}
    </div>
  );
}
