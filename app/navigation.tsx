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
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { ForwardRefExoticComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeSwitcher from "./theme-switcher";
import { useState, useEffect } from "react";

const socials = {
  twitter: "https://twitter.com/reactoverflow",
  instagram: "https://www.instagram.com/cybrchad/",
  linkedin: "https://www.linkedin.com/in/reactoverflow/",
  github: "https://github.com/siddharthroy12",
};

function ShortcutHint({ children }: { children: React.ReactNode }) {
  return (
    <Badge
      variant="outline"
      className="h-5 w-5 place-content-center rounded border text-xs font-medium text-gray-500 transition-colors duration-200 lg:grid"
      style={{ background: "hsl(var(--secondary))" }}
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
}: {
  name: string;
  shortcut: number;
  icon: ForwardRefExoticComponent<any>;
  link: string;
}) {
  const Icon = icon;

  return (
    <Link
      className="inline-flex items-center justify-start whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground w-full h-9 py-2 px-2 mb-2  w-full flex justify-start text-left"
      href={link}
    >
      <Icon className="h-4 mr-2" />
      <div className="flex justify-between w-full">
        {name}
        {/* <ShortcutHint>{shortcut}</ShortcutHint> */}
      </div>
    </Link>
  );
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
    <Button variant="ghost" className="w-full px-2">
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

export default function Navigation() {
  return (
    <ScrollArea className="p-2 h-full">
      <Link
        href="/"
        className="inline-flex items-center justify-start whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground w-full h-9 py-6 px-2 mb-2 flex justify-start text-left"
      >
        <Image
          width={40}
          height={40}
          src="/author.jpeg"
          alt="Picture of the author"
          className="mr-4 rounded-full"
        />
        <div>
          <p>Siddharth Roy</p>
          <p className="text-muted-foreground">Frontend Enginner</p>
        </div>
      </Link>
      <nav>
        <NavigationLink name="Home" shortcut={1} icon={HomeIcon} link="/" />
        <NavigationLink
          name="Posts"
          shortcut={2}
          icon={PenLineIcon}
          link="/posts"
        />
        <NavigationLink
          name="Journey"
          shortcut={3}
          icon={RouteIcon}
          link="/journey"
        />
        <NavigationLink name="My Pet" shortcut={4} icon={DogIcon} link="/pet" />
        <NavigationLink name="Fun" shortcut={4} icon={FlowerIcon} link="/fun" />
      </nav>
      <Separator className="my-2" />
      <p className="text-muted-foreground text-xs p-2">Socials</p>
      <SocialLink name="Twitter" link={socials.twitter} icon={TwitterIcon} />
      <SocialLink
        name="Instagram"
        link={socials.instagram}
        icon={InstagramIcon}
      />
      <SocialLink name="Github" link={socials.github} icon={GithubIcon} />
      <SocialLink name="LinkedIn" link={socials.linkedin} icon={LinkedinIcon} />
      <Separator className="my-2" />
      <p className="text-muted-foreground text-xs p-2">Settings</p>
      <ThemeSwitcher />
    </ScrollArea>
  );
}
