"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function PageTitle() {
  const [title, setTitle] = useState("");
  const pathname = usePathname();
  useEffect(() => {
    setTimeout(() => {
      setTitle(document.title);
    }, 0);
  }, [pathname]);
  return title;
}
