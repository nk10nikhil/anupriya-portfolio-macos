import type { TerminalData } from "~/types";

const terminal: TerminalData[] = [
  {
    id: "about",
    title: "about",
    type: "folder",
    children: [
      {
        id: "about-bio",
        title: "bio.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div>
              Hi, I'm Anupriya Saini. I'm a B.Tech Information Technology student at
              GCET'27 with a CGPA of 8.5/10 (A+ Scholar with Distinction). I'm a Backend
              Developer, AI/ML Engineer, and Web3 enthusiast passionate about building
              intelligent and scalable solutions.
            </div>
          </div>
        )
      },
      {
        id: "about-interests",
        title: "interests.txt",
        type: "file",
        content:
          "Generative AI / Agentic AI / Web3 & DeFi / Cloud Architecture / Scalable Systems"
      },
      {
        id: "about-achievements",
        title: "achievements.txt",
        type: "file",
        content: (
          <ul className="list-disc ml-6">
            <li>
              🏆 SIH 2024 Participant - Built QR-based ticketing system for 3,000+
              attendees
            </li>
            <li>🎯 SheFi Scholar - Cohort 2025 (Season 14)</li>
            <li>✅ GenAI Powered Data Analytics Certified</li>
            <li>✅ Google Analytics & Generative AI Leader Certified</li>
            <li>✅ AWS Fundamentals & LangChain Specialist</li>
          </ul>
        )
      },
      {
        id: "about-contact",
        title: "contact.txt",
        type: "file",
        content: (
          <ul className="list-disc ml-6">
            <li>
              Email:{" "}
              <a
                className="text-blue-300"
                href="mailto:anupriyasaini2110@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                anupriyasaini2110@gmail.com
              </a>
            </li>
            <li>
              Github:{" "}
              <a
                className="text-blue-300"
                href="https://github.com/anupriyasaini21"
                target="_blank"
                rel="noreferrer"
              >
                @anupriyasaini21
              </a>
            </li>
            <li>
              LinkedIn:{" "}
              <a
                className="text-blue-300"
                href="https://www.linkedin.com/in/anupriyasaini21/"
                target="_blank"
                rel="noreferrer"
              >
                anupriyasaini21
              </a>
            </li>
            <li>
              Phone:{" "}
              <a
                className="text-blue-300"
                href="tel:+917505873151"
                target="_blank"
                rel="noreferrer"
              >
                +91 7505873151
              </a>
            </li>
          </ul>
        )
      }
    ]
  },
  {
    id: "about-dream",
    title: "my-vision.py",
    type: "file",
    content: (
      <div className="py-1">
        <div>
          <span className="text-yellow-400">while</span>{" "}
          <span className="text-blue-400">True</span>
          <span>:</span>
        </div>
        <div className="ml-9">
          <span className="text-blue-400">build</span>
          <span>(</span>
          <span className="text-green-400">"intelligent_solutions"</span>
          <span>)</span>
        </div>
        <div className="ml-9">
          <span className="text-blue-400">impact</span>
          <span className="text-yellow-400"> += </span>
          <span className="text-purple-400">1</span>
        </div>
      </div>
    )
  }
];

export default terminal;
