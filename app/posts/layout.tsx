import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex md:h-screen h-[calc(100vh-48px)]">
      <div className="w-96 shrink-0 hidden md:block">
        <ScrollArea>
          <div className="sticky top-0 z-10 border-b px-5 py-3 text-sm font-semibold tracking-tight">
            Posts
          </div>
        </ScrollArea>
      </div>
      <Separator orientation="vertical" />
      {children}
    </div>
  );
}
