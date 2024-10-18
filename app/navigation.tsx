"use client";

import {
  HomeIcon,
  PenLineIcon,
  RouteIcon,
  DogIcon,
  FlowerIcon,
  TwitterIcon,
  InstagramIcon,
  GithubIcon,
  LinkedinIcon,
  ArrowUpRightIcon,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { DrawerClose } from "@/components/ui/drawer";
import { ForwardRefExoticComponent } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ThemeSwitcher from "./theme-switcher";
import { useEffect } from "react";

const socials = {
  twitter: "https://bsky.app/profile/siddharthroy.com",
  instagram: "https://www.instagram.com/cybrchad/",
  linkedin: "https://www.linkedin.com/in/reactoverflow/",
  github: "https://github.com/siddharthroy12",
};

function ShortcutHint({ children, active }: { active: boolean, children: React.ReactNode }) {
  return (
    <Badge
      variant={active ? 'default' : 'secondary'}
      className={`h-5 w-5 place-content-center rounded border text-xs font-medium transition-colors duration-200 lg:grid`}
    >
      {children}
    </Badge>
  );
}

function NavigationLink({
  name,
  shortcut,
  icon,
  link,
  inDrawer,
}: {
  name: string;
  shortcut: number;
  icon: ForwardRefExoticComponent<any>;
  link: string;
  inDrawer: boolean;
}) {
  const Icon = icon;
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    addEventListener("keydown", (event) => {
      if (event.key === shortcut.toString()) {
        router.push(link);
      }
    });
  });
  let active = false;
  if (link === "/") {
    active = pathname === link;
  } else {
    active = pathname.includes(link);
  }

  const output = (
    <Button
      variant="ghost"
      asChild
      className={`w-full justify-start text-left px-2 ${active ? "bg-accent" : ""
        }`}
    >
      <Link href={link}>
        <Icon className="h-4 mr-2" />
        <div className="flex justify-between w-full">
          {name}
          <ShortcutHint active={active}>{shortcut}</ShortcutHint>
        </div>
      </Link>
    </Button>
  );

  if (inDrawer) {
    return <DrawerClose asChild>{output}</DrawerClose>;
  }

  return output;
}

function SocialLink({
  name,
  link,
  icon,
}: {
  name: string;
  link: string;
  icon: ForwardRefExoticComponent<any>;
}) {
  const Icon = icon;
  return (
    <Button variant="ghost" className="w-full px-2" asChild>
      <a
        href={link}
        target="_blank"
        className="flex justify-between text-left w-full items-center"
      >
        <div className="flex">
          <Icon className="h-4 mr-2" />
          <p>{name}</p>
        </div>
        <ArrowUpRightIcon className="w-4" />
      </a>
    </Button>
  );
}

type NavigationProps = {
  inDrawer: boolean;
};

export default function Navigation({ inDrawer }: NavigationProps) {
  return (
    <ScrollArea className="p-2 h-full">
      <Link
        href="/"
        className="inline-flex items-center justify-start whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground w-full h-9 py-6 px-2 mb-2 flex justify-start text-left"
      >
        <div>
          <p>Siddharth Roy</p>
          <p className="text-muted-foreground">Software Dev</p>
        </div>
      </Link>
      <nav className="flex flex-col gap-1">
        <NavigationLink
          name="Home"
          shortcut={1}
          icon={HomeIcon}
          link="/"
          inDrawer={inDrawer}
        />
        <NavigationLink
          name="Posts"
          shortcut={2}
          icon={PenLineIcon}
          link="/posts"
          inDrawer={inDrawer}
        />
        <NavigationLink
          name="Journey"
          shortcut={3}
          icon={RouteIcon}
          link="/journey"
          inDrawer={inDrawer}
        />
        <NavigationLink
          name="My Pet"
          shortcut={4}
          icon={DogIcon}
          link="/pet"
          inDrawer={inDrawer}
        />
        <NavigationLink
          name="Fun"
          shortcut={5}
          icon={FlowerIcon}
          link="/fun"
          inDrawer={inDrawer}
        />
      </nav>
      <Separator className="my-2" />
      <p className="text-muted-foreground text-xs p-2">Socials</p>
      <div className="flex flex-col gap-1">
        <SocialLink name="BlueSky" link={socials.twitter} icon={TwitterIcon} />
        <SocialLink
          name="Instagram"
          link={socials.instagram}
          icon={InstagramIcon}
        />
        <SocialLink name="Github" link={socials.github} icon={GithubIcon} />
      </div>

      <Separator className="my-2" />
      <p className="text-muted-foreground text-xs p-2">Settings</p>
      <ThemeSwitcher />
    </ScrollArea>
  );
}
