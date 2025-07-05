import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import fs from "fs";
import path from "path";

import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Sketches",
  description: "My beautify sketches",
};

async function fetchLocalImages() {
  const imagesDirectory = path.join(process.cwd(), "public", "content", "sketches");
  
  try {
    const filenames = fs.readdirSync(imagesDirectory);
    const imageFiles = filenames.filter(name => 
      name.toLowerCase().endsWith('.webp')
    );
    
    return imageFiles.map(filename => `/content/sketches/${filename}`);
  } catch (error) {
    console.error("Error reading images directory:", error);
    return [];
  }
}

function GridItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="group relative flex h-48 items-end overflow-hidden rounded-lg shadow-lg md:h-80 cursor-pointer hover:shadow-xl transition-shadow">
      {children}
    </div>
  );
}

export default async function Sketches() {
  const imageUrls = await fetchLocalImages();

  return (
    <ScrollArea className="grow w-full h-full">
      <div className="max-w-[80rem] mx-auto px-8 py-8 grid grid-cols-2 gap-4 lg:grid-cols-3 md:gap-6 xl:gap-8">
        {imageUrls.map((url) => (
          <Dialog key={url}>
            <DialogTrigger asChild>
              <GridItem>
                <Image 
                  src={url} 
                  fill 
                  className="object-cover transition-transform group-hover:scale-105" 
                  alt="Sketch" 
                />
              </GridItem>
            </DialogTrigger>
            <DialogContent className="max-w-4xl w-[90vw] h-[90vh] p-2">
              <div className="relative w-full h-full">
                <Image
                  src={url}
                  fill
                  className="object-contain"
                  alt="Sketch - enlarged view"
                  sizes="90vw"
                />
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </ScrollArea>
  );
}