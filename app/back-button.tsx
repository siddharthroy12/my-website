"use client";
import { PanelBottomOpenIcon, ArrowLeft } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function BackButton() {
  const pathname = usePathname();

  if (pathname === "/") {
    return <div></div>;
  }
  let backpath: string | string[] = pathname.split("/");
  backpath.pop();
  backpath = backpath.join("/");

  if (backpath === "") {
    backpath = "/";
  }

  return (
    <Button variant="ghost" className="w-[35px] h-[35px] p-0" asChild>
      <Link href={backpath}>
        <ArrowLeft />
      </Link>
    </Button>
  );
}
