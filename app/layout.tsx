import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./navigation";
import { Separator } from "@/components/ui/separator";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { PanelBottomOpenIcon } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Siddharth Roy",
  description: "Frontend Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </body>
      <body
        className={cn(
          inter.className,
          "h-screen min-h-screen bg-background antialiased"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <div vaul-drawer-wrapper="" suppressHydrationWarning>
            <div className="relative flex flex-col min-h-screen flex-col bg-background">
              <div className="h-12 shrink-0 md:hidden ">
                <div className="h-full flex items-center px-2">
                  <Drawer>
                    <DrawerTrigger asChild>
                      <Button variant="ghost" className="w-[35px] h-[35px] p-0">
                        <PanelBottomOpenIcon />
                      </Button>
                    </DrawerTrigger>
                    <DrawerContent className="h-[80%]">
                      <Navigation />
                    </DrawerContent>
                  </Drawer>
                </div>
                <Separator />
              </div>
              <div className="flex md:h-screen h-[calc(100vh-48px)]">
                <div className="w-64 shrink-0 hidden md:block">
                  <Navigation />
                </div>
                <Separator orientation="vertical" />
                <ScrollArea className="grow">{children}</ScrollArea>
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
