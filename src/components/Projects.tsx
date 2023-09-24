import React from "react";

import { Github2, Globe } from "./SvgFiles";

import ai from "../../public/ai-prompt-min.png";
import scriblle from "../../public/scribly-note-min.png";
import gitB from "../../public/Git-Battle-min.png";
const skills = [
  {
    id: 1,
    skill: "HTML",
  },
  {
    id: 2,
    skill: "CSS3",
  },
  {
    id: 3,
    skill: "JavaScript",
  },
  {
    id: 4,
    skill: "React",
  },
  {
    id: 5,
    skill: "Redux",
  },
  {
    id: 6,
    skill: "Node Js",
  },
  {
    id: 7,
    skill: "Restful Api",
  },
  {
    id: 8,
    skill: "Express",
  },
  {
    id: 9,
    skill: "Typescript",
  },
  {
    id: 10,
    skill: "SCSS",
  },
  {
    id: 11,
    skill: "Git",
  },
  {
    id: 12,
    skill: "Github",
  },
  {
    id: 13,
    skill: "Vs Code",
  },
];

const proj1Array = [
  {
    id: 1,
    skill: "React",
  },
  {
    id: 2,
    skill: "Mongodb",
  },
  {
    id: 3,
    skill: "Node Js",
  },
  {
    id: 4,
    skill: "Tailwind CSS",
  },
  {
    id: 5,
    skill: "Express Js",
  },
];

const proj2Array = [
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

const proj3Array = [
    {
      id: 1,
      skill: "React",
    },
   
    {
      id: 4,
      skill: "CSS",
    },
  ];

const Projects: React.FC = () => {
  return (
    <div className="mt-[5%] ml-10 mr-6">
      <div>
        <p className="font-semibold text-blue-700">Skills & Tools</p>
        <div className="flex flex-wrap mt-4">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="p-2  border-2 border-sky-800 m-1 rounded-md text-blue-700 font-semibold"
            >
              {skill.skill}
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="font-semibold text-blue-700 mt-3">Selected projects</p>
        <div className="mt-5">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg" src={scriblle} alt="Scribly note" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                  Scribly Note
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                A feature rich note-taking Web App,focusing on simplicity and
                seamless note-taking experience.
              </p>
              <div className="flex ">
                <button className="flex items-center gap-1 border-2 border-blue-700 rounded-md p-1">
                  <Globe /> Live project
                </button>
                <button className="ml-1 flex items-center gap-1 border-2 border-blue-700 rounded-md p-1">
                  <Github2 /> View Source
                </button>
              </div>
              <div className="flex flex-wrap mt-4">
                {proj1Array.map((skill) => (
                  <div
                    key={skill.id}
                    className="p-2  border-2 border-sky-800 m-1 rounded-md text-blue-700 text-sm"
                  >
                    {skill.skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

{/* //2 card */}
          <div className="mt-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg" src={ai} alt="Ai promptus" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                Ai promptus
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Ai Promptus website, A Twitter like platform dedicated to creating and sharing Ai prompts.

              </p>
              <div className="flex ">
                <button className="flex items-center gap-1 border-2 border-blue-700 rounded-md p-1">
                  <Globe /> Live project
                </button>
                <button className="ml-1 flex items-center gap-1 border-2 border-blue-700 rounded-md p-1">
                  <Github2 /> View Source
                </button>
              </div>
              <div className="flex flex-wrap mt-4">
                {proj2Array.map((skill) => (
                  <div
                    key={skill.id}
                    className="p-2  border-2 border-sky-800 m-1 rounded-md text-blue-700 text-sm"
                  >
                    {skill.skill}
                  </div>
                ))}
              </div>
            </div>
          </div>


              {/* 3rd Card           */}

              <div className="mt-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg" src={gitB} alt="Ai promptus" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                GitHub Battle
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Uses Github API for repository info. You can Battle two GitHub users.


              </p>
              <div className="flex ">
                <button className="flex items-center gap-1 border-2 border-blue-700 rounded-md p-1">
                  <Globe /> Live project
                </button>
                <button className="ml-1 flex items-center gap-1 border-2 border-blue-700 rounded-md p-1">
                  <Github2 /> View Source
                </button>
              </div>
              <div className="flex flex-wrap mt-4">
                {proj3Array.map((skill) => (
                  <div
                    key={skill.id}
                    className="p-2  border-2 border-sky-800 m-1 rounded-md text-blue-700 text-sm"
                  >
                    {skill.skill}
                  </div>
                ))}
              </div>
            </div>
          </div>




        </div>
      </div>
    </div>
  );
};

export default Projects;
