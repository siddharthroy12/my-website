import supabase from "@/lib/supabase";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Pet",
  description: "A bratty husky",
};

async function fetchLinks() {
  const res = await supabase.storage.from("husky-pictures").list("");

  let list: any[] = [];
  res.data?.forEach((file) => {
    list.push(
      supabase.storage.from("husky-pictures").getPublicUrl(file.name).data
        .publicUrl
    );
  });

  return list;
}

function GridItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="group relative flex h-48 items-end overflow-hidden rounded-lg shadow-lg md:h-80">
      {children}
    </div>
  );
}

export default async function Pet() {
  const urls = await fetchLinks();

  return (
    <ScrollArea className="grow w-full h-full">
      <div className="max-w-[80rem] mx-auto px-8 py-8 grid grid-cols-2 gap-4 lg:grid-cols-3 md:gap-6 xl:gap-8">
        {urls.map((url) => (
          <GridItem key={url}>
            <Image src={url} fill className="object-cover" alt="Pet picture" />
          </GridItem>
        ))}
      </div>
    </ScrollArea>
  );
}
