import React from "react";

import { Github2, Globe } from "./SvgFiles";

import ai from "../../public/ai-prompt-min.png";
import scriblle from "../../public/scribly-note.png";
import gitB from "../../public/Git-Battle-min.png";
import edit from "../../public/jupyter.png";
import kitten from "../../public/kittens.png";
const skills = [
  {
    id: 1,
    skill: "React",
  },

  {
    id: 2,
    skill: "Next Js",
  },

  {
    id: 3,
    skill: "Typescript",
  },
  {
    id: 4,
    skill: "Cypress",
  },
  {
    id: 5,
    skill: "JavaScript",
  },
  {
    id: 6,
    skill: "Redux",
  },
  {
    id: 7,
    skill: "HTML",
  },
  {
    id: 8,
    skill: "CSS3",
  },

  {
    id: 9,
    skill: "Node Js",
  },
  {
    id: 10,
    skill: "Restful Api",
  },
  {
    id: 11,
    skill: "Express",
  },

  {
    id: 12,
    skill: "Go",
  },
  {
    id: 13,
    skill: "Mongodb",
  },

  {
    id: 14,
    skill: "Postgresql",
  },
  {
    id: 15,
    skill: "SCSS",
  },
  {
    id: 16,
    skill: "Git",
  },
  {
    id: 17,
    skill: "Github",
  },
];

const proj1Array = [
  {
    id: 1,
    skill: "React",
  },
  {
    id: 2,
    skill: "TypeScript",
  },
  {
    id: 3,
    skill: "Mongodb",
  },
  {
    id: 4,
    skill: "Node Js",
  },
  {
    id: 5,
    skill: "Tailwind CSS",
  },
  {
    id: 6,
    skill: "Express Js",
  },
  {
    id: 7,
    skill: "Passport js",
  },
];

const proj2Array = [
  {
    id: 1,
    skill: "Go",
  },
  {
    id: 2,
    skill: "GoFiber",
  },
  {
    id: 3,
    skill: "React",
  },
  ,
  {
    id: 4,
    skill: "TypeScript",
  },
  {
    id: 5,
    skill: "Redis",
  },

  {
    id: 6,
    skill: "Redux",
  },
  {
    id: 7,
    skill: "Tailwind CSS",
  },
];

const proj3Array = [
  {
    id: 1,
    skill: "Next Js",
  },
  {
    id: 2,
    skill: "Node Js",
  },
  {
    id: 3,
    skill: "Express Js",
  },
  {
    id: 4,
    skill: "Socket.io",
  },
  {
    id: 5,
    skill: "Mongodb",
  },
  {
    id: 6,
    skill: "TypeScript",
  },

  {
    id: 7,
    skill: "Tailwind CSS",
  },
];

const proj4Array = [
  {
    id: 1,
    skill: "Next Js",
  },
  {
    id: 2,
    skill: "Mongodb",
  },
  {
    id: 4,
    skill: "Tailwind CSS",
  },
];

const proj5Array = [
  {
    id: 1,
    skill: "React",
  },

  {
    id: 4,
    skill: "CSS",
  },
];

const handleProjec1 = () => {
  window.open("https://scribly-note.vercel.app", "_blank");
};

const handleProjec2 = () => {
  window.open("https://exploding-kittens-ashen.vercel.app", "_blank");
};

const handleProjec3 = () => {
  window.open("https://jupyter-edit.vercel.app", "_blank");
};

const handleProjec4 = () => {
  window.open("https://graceful-vacherin-79994b.netlify.app", "_blank");
};

const handleProjec5 = () => {
  window.open("https://ai-promptus.vercel.app", "_blank");
};

const handleSource1 = () => {
  window.open("https://github.com/Raviikumar001/Scribly", "_blank");
};
const handleSource2 = () => {
  window.open("https://github.com/Raviikumar001/explodingKittens", "_blank");
};

const handleSource3 = () => {
  window.open("https://github.com/Raviikumar001/JupyterEdit", "_blank");
};
const handleSource4 = () => {
  window.open("https://github.com/Raviikumar001/gitbattle", "_blank");
};

const handleSource5 = () => {
  window.open("https://github.com/Raviikumar001/AIPromptus", "_blank");
};

const Projects: React.FC = () => {
  return (
    <div className="mt-[5%] ml-10 mr-6 mb-5 md:ml-0 ">
      <div className=" md:mr-[10%] md:mt-[10%] md:ml-[15%] lg:mt-[10%]  lg:ml-[15%]">
        <p className="font-semibold text-blue-700">Skills & Tools</p>
        <div className="flex flex-wrap mt-4">
          {skills.map((skill) => (
            <div key={skill.id} className="p-2  border-2 border-sky-800 m-1 rounded-md text-blue-700 font-semibold">
              {skill.skill}
            </div>
          ))}
        </div>
      </div>

      <div className="">
        <p className="font-semibold text-blue-700 md:mt-[5%] md:ml-[15%] mt-6">Selected projects</p>
        <div className="mt-5 md:flex md:gap-2 md:ml-[8%] lg:flex lg:gap-2 lg:ml-[8%] md:flex-wrap md:justify-center">
          <div className="mt-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow  ">
            <a>
              <img className="rounded-t-lg" src={scriblle} alt="Scribly note" />
            </a>
            <div className="p-5">
              <a>
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 ">Scribly Note</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 ">A feature rich note-taking Web App,focusing on simplicity and seamless note-taking experience.</p>
              <div className="flex ">
                <button onClick={handleProjec1} className="flex items-center gap-1 border-2 border-blue-700 rounded-md p-1">
                  <Globe /> Live project
                </button>
                <button onClick={handleSource1} className="ml-1 flex items-center gap-1 border-2 border-blue-700 rounded-md p-1">
                  <Github2 /> View Source
                </button>
              </div>
              <div className="flex flex-wrap mt-4">
                {proj1Array.map((skill) => (
                  <div key={skill.id} className="p-2  border-2 border-sky-800 m-1 rounded-md text-blue-700 text-sm">
                    {skill.skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* // 2 card */}

          <div className="mt-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow  ">
            <a>
              <img className="rounded-t-lg" src={kitten} alt="jupyter edit" />
            </a>
            <div className="p-5">
              <a>
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 ">Exploding Kittens</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 ">Exploding Kittens card game.</p>
              <div className="flex ">
                <button onClick={handleProjec2} className="flex items-center gap-1 border-2 border-blue-700 rounded-md p-1">
                  <Globe /> Live project
                </button>
                <button onClick={handleSource2} className="ml-1 flex items-center gap-1 border-2 border-blue-700 rounded-md p-1">
                  <Github2 /> View Source
                </button>
              </div>
              <div className="flex flex-wrap mt-4">
                {proj2Array.map((skill) => (
                  <div key={skill?.id} className="p-2  border-2 border-sky-800 m-1 rounded-md text-blue-700 text-sm">
                    {skill?.skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* // 3 card */}

          <div className="mt-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow  ">
            <a>
              <img className="rounded-t-lg" src={edit} alt="jupyter edit" />
            </a>
            <div className="p-5">
              <a>
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 ">Jupyter Edit</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 ">A collaborate online document editor, Edit you ideas in real-time.</p>
              <div className="flex ">
                <button onClick={handleProjec3} className="flex items-center gap-1 border-2 border-blue-700 rounded-md p-1">
                  <Globe /> Live project
                </button>
                <button onClick={handleSource3} className="ml-1 flex items-center gap-1 border-2 border-blue-700 rounded-md p-1">
                  <Github2 /> View Source
                </button>
              </div>
              <div className="flex flex-wrap mt-4">
                {proj3Array.map((skill) => (
                  <div key={skill.id} className="p-2  border-2 border-sky-800 m-1 rounded-md text-blue-700 text-sm">
                    {skill.skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* //4 card */}
          <div className="mt-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow  ">
            <a>
              <img className="rounded-t-lg" src={gitB} alt="Ai promptus" />
            </a>
            <div className="p-5">
              <a>
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 ">GitHub Battle</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 ">Uses Github API for repository info. You can Battle two GitHub users.</p>
              <div className="flex ">
                <button onClick={handleProjec4} className="flex items-center gap-1 border-2 border-blue-700 rounded-md p-1">
                  <Globe /> Live project
                </button>
                <button onClick={handleSource4} className="ml-1 flex items-center gap-1 border-2 border-blue-700 rounded-md p-1">
                  <Github2 /> View Source
                </button>
              </div>
              <div className="flex flex-wrap mt-4">
                {proj5Array.map((skill) => (
                  <div key={skill.id} className="p-2  border-2 border-sky-800 m-1 rounded-md text-blue-700 text-sm">
                    {skill.skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 5rd Card           */}

          {/* <div className="mt-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow  ">
            <a>
              <img className="rounded-t-lg" src={ai} alt="Ai promptus" />
            </a>
            <div className="p-5">
              <a>
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 ">Ai promptus</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 ">Ai Promptus website, A Twitter like platform dedicated to creating and sharing Ai prompts.</p>
              <div className="flex ">
                <button onClick={handleProjec5} className="flex items-center gap-1 border-2 border-blue-700 rounded-md p-1">
                  <Globe /> Live project
                </button>
                <button onClick={handleSource5} className="ml-1 flex items-center gap-1 border-2 border-blue-700 rounded-md p-1">
                  <Github2 /> View Source
                </button>
              </div>
              <div className="flex flex-wrap mt-4">
                {proj5Array.map((skill) => (
                  <div key={skill.id} className="p-2  border-2 border-sky-800 m-1 rounded-md text-blue-700 text-sm">
                    {skill.skill}
                  </div>
                ))}
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
