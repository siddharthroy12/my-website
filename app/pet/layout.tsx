import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Pet",
  description: "A bratty husky",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
