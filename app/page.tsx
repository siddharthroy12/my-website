import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowUpRightIcon } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Siddharth Roy",
  description: "Frontend Engineer",
};

const projects = [
  {
    title: "Timebrew",
    description: "A personal time tracker",
    link: "https://github.com/siddharthroy12/timebrew",
  },
  {
    title: "Agrus",
    description: "A simple and stupid reddit clone",
    link: "https://github.com/siddharthroy12/Agrus",
  },
  {
    title: "Recoded",
    description: "Make recordings of your code",
    link: "https://github.com/siddharthroy12/recoded",
  },
  {
    title: "Gravity sandbox",
    description: "2D Newtonian gravity simulator",
    link: "https://github.com/siddharthroy12/recoded",
  },
  {
    title: "Touch Typer",
    description: "Touch Typing Test on OpenGL",
    link: "https://github.com/siddharthroy12/TouchTyper",
  },
  {
    title: "Rockets",
    description: "Dodge rockets in retro style",
    link: "https://www.lexaloffle.com/bbs/?pid=111184",
  },
  {
    title: "Big Text Meme generator",
    description: "Generate FUNNY BIG TEXTS",
    link: "https://big-text-meme-generator.vercel.app/",
  },
  {
    title: "Raylib CMake Template",
    description: "Start making games using C/C++ and Raylib in a minute",
    link: "https://github.com/siddharthroy12/raylib-cmake-template",
  },
  {
    title: "Hypersonic",
    description: "3D space shooter demo",
    link: "https://github.com/siddharthroy12/Hypersonic",
  },
];

export default function Home() {
  return (
    <ScrollArea className="grow w-full h-full">
      <main className="max-w-[50rem] mx-auto px-8 py-20">
        <p className="mb-8">
          A developer who builds all kinds of software, including web apps, mobile apps, CLI tools, automation scripts, and even dumb games.
        </p>
        <h2 className="mt-8 mb-4 text-xl font-semibold">Projects</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Title</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="text-right">Link</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((project) => (
              <TableRow key={project.title}>
                <TableCell className="font-medium">{project.title}</TableCell>
                <TableCell>{project.description}</TableCell>
                <TableCell className="text-right">
                  <a
                    href={project.link}
                    target="_blank"
                    className="flex underline justify-end"
                  >
                    Open <ArrowUpRightIcon className="w-[20px]" />
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </main>
    </ScrollArea>
  );
}
