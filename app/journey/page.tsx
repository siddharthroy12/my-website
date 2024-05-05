import { PlusIcon } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journey",
  description: "From being born to becoming developer",
};

const timeline = [
  {
    year: "2024",
    events: [
      {
        title: "Joined Algo One",
        description: "Developing full stack applications now with Python, React and Flutter.",
      },
    ],
  },
  {
    year: "2023",
    events: [
      {
        title: "Started working on a time tracker app.",
        description:
          "I needed a cross-platform app to track my work hours, so I started making one using Flutter.",
      },
      {
        title: "Contributed to a Open-Source game.",
        description: "Check out SM63Redux. It's an awesome Mario fan-game.",
      },
      {
        title: "Forked linux touchpad driver.",
        description:
          "My laptop has some hardware issues with the touchpad, so I had to modify the driver to make it usable. Thanks Dell 💩.",
      },
      {
        title: "Made games using PICO-8.",
        description:
          "Discovered an awesome virtual console for making pixel-art games using Lua.",
      },
    ],
  },
  {
    year: "2022",
    events: [
      {
        title: "Got my first job at Everlytics 🎉.",
        description:
          "Started as an intern, and after some time, became the frontend lead.",
      },
      {
        title: "Made touch typing test in C++.",
        description:
          "I wanted a fast offline version of MonkeyType, so I implemented it myself.",
      },
      {
        title: "Made full-stack MVP reddit clone.",
        description:
          "After learning MERN stack from Udemy. My first big project.",
      },
    ],
  },
  {
    year: "2021",
    events: [
      {
        title: "Made a game in C.",
        description: "A bullet-hell shooter game made using Raylib.",
      },
    ],
  },
  {
    year: "2020",
    events: [
      {
        title: "Started learning web development 👨‍💻.",
        description: "From FreeCodeCamp",
      },
    ],
  },
  {
    year: "2017",
    events: [
      {
        title: "Discovered programming and linux 👀.",
        description: "My programming journey begins here.",
      },
    ],
  },
  {
    year: "2003",
    events: [
      {
        title: "Born 👶.",
        description: "On 30th November.",
      },
    ],
  },
];

export default function Journey() {
  return (
    <div className="w-full py-20">
      <div className="px-8 max-w-4xl mx-auto w-full">
        <div className="w-full">
          <h1 className="text-3xl font-semibold mb-6">Journey</h1>
          <div className="flex flex-col items-stretch gap-12">
            {timeline.map((year) => (
              <div
                className="flex flex-col items-baseline gap-6 md:flex-row md:gap-12"
                key={year.year}
              >
                <div className="flex items-center">
                  <div className="font-semibold text-lg">{year.year}</div>
                  <hr className="my-0 ml-4 flex-1 border-dashed border-gray-200" />
                </div>
                <section>
                  {year.events.map((event, index) => (
                    <div
                      className="relative flex pb-8 last:pb-0"
                      key={event.title}
                    >
                      {index !== year.events.length - 1 ? (
                        <div className="absolute inset-0 flex w-6 items-center justify-center">
                          <div className="pointer-events-none h-full w-px border-l-[1px]"></div>
                        </div>
                      ) : null}
                      <div className="z-0 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary align-middle text-primary-foreground">
                        <PlusIcon width={16} height={16} />
                      </div>
                      <div className="flex-grow pl-8">
                        <div className="word-break-word flex flex-col">
                          <div className="font-semibold tracking-tight">
                            {event.title}
                          </div>
                          <div className="text-sm">{event.description}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </section>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
