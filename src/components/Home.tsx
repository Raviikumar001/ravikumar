import React from "react";
import { RoughNotation } from "react-rough-notation";
import { Github, Linkedin, Twitter, Arrow, Resume } from "./SvgFiles";
import ravi from "../../public/ravi.png";
import fyleLogo from "../../public/images.png";
import insoftLink from "../../public/insotlinklogo.jpeg";

const handleLinkedin = () => {
  window.open("https://www.linkedin.com/in/ravi-kumaar", "_blank");
};

const handleGithub = () => {
  window.open("https://github.com/Raviikumar001", "_blank");
};

const handleTwitter = () => {
  window.open("https://twitter.com/ravikumrz", "_blank");
};
const handleResume = () => {
  window.open(
    "https://drive.google.com/file/d/13fxurdGNK_jPPrvJOmP_lqGB3gHk_rRV/view?usp=sharing",
    "_blank"
  );
};

const Home: React.FC = () => {
  return (
    <div>
      <div className="mt-[16%] ml-10 md:mt-[10%] md:ml-[15%] lg:mt-[10%]  lg:ml-[15%]">
        <div className="md:flex md:justify-between  lg:flex lg:justify-between">
          <span className="font-inter  text-2xl md:text-3xl md:leading-relaxed leading-relaxed">
            Namaste 🙏 <br /> I'm Ravi, <br />
            <span className="charTrans">A Web Developer </span>
          </span>
          <img
            className=" md:mr-[10%] rounded-full md:shadow-lg  hidden md:block lg:mr-[20%]"
            src={ravi}
            alt="Ai promptus"
          />
        </div>

        <p className="text-lg mt- leading-relaxed mr-2 md:mr-[45%] md:text-xl  xl:mr-[50%]">
          I'm from Dehradun, India. I love building{" "}
          <RoughNotation
            show={true}
            animate={true}
            type="highlight"
            color="#ffd54f"
            animationDelay={100}
            animationDuration={600}
          >
            projects
          </RoughNotation>{" "}
          with{" "}
          <RoughNotation
            show={true}
            animate={true}
            type="highlight"
            color="#d6d4cd"
            animationDelay={1000}
            animationDuration={500}
          >
            beautiful,
          </RoughNotation>{" "}
          <RoughNotation
            show={true}
            animate={true}
            type="highlight"
            color="#8394e7"
            animationDelay={1000}
            animationDuration={500}
          >
            interfaces,
          </RoughNotation>
          {""}
          <br />
          <RoughNotation
            show={true}
            animate={true}
            type="highlight"
            color="#c0aa59"
            animationDelay={1400}
            animationDuration={800}
          >
            web apps
          </RoughNotation>{" "}
          and everything in between.
        </p>
        <div className="mt-3 md:flex md: items-center gap-7 md:mt-5">
          <div className="  rounded-md w-auto ">
            <button onClick={handleLinkedin}>
              <div className="flex justify-center items-center">
                <Linkedin />
                <p className="text-md">LinkedIn</p>
              </div>
            </button>
          </div>

          <div className="rounded-md ">
            <button onClick={handleGithub}>
              <div className="flex justify-center items-center">
                <Github />
                <p className="text-md">Github</p>
              </div>
            </button>
          </div>

          <div className="rounded-md ">
            <button onClick={handleTwitter}>
              <div className="flex justify-center items-center">
                <Twitter />
                <p className="text-md">Twitter</p>
              </div>
            </button>
          </div>

          <div className="rounded-md ">
            <button onClick={handleResume}>
              <div className="flex justify-center items-center">
                <Resume />
                <p className="text-md">Resume</p>
              </div>
            </button>
          </div>
        </div>
        <p className="md:mt-4 mt-4">
          Email 👉
          <RoughNotation
            type="underline"
            animate={true}
            animationDelay={2400}
            animationDuration={900}
            show={true}
            color="#bf360c"
          >
            <a href={`mailto:kumarraviabhi007@gmail.com`}>
              {" "}
              kumarraviabhi007@gmail.com{" "}
            </a>
          </RoughNotation>
        </p>
        <div>
          <div className="mt-[20%] md:flex md:mt-[10%]">
            <p className="text-blue-800 font-semibold md:inline-block">
              Work Experience
            </p>
            <div className="mt-5 mr-6 text-left md:mt-0 md:ml-[10%] md:mr-[20%] lg:mr-[20%] lg:ml-[5%] xl:mr-[10%] w-full border bg-white border-gray-100 p-4 rounded-md">
              <div className="w-full md:flex md:justify-between">
                <div className="flex gap-3 w-full">
                  <img
                    className=" rounded-full md:shadow-lg h-10"
                    src={fyleLogo}
                    alt="fyle logo"
                  />
                  <div>
                    <p className="text-lg font-semibold">Fyle</p>
                    <p>Engineering Intern</p>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-gray-400">June 2024 - Nov 2024</p>
                </div>
              </div>
              <br />
              <div className="w-full md:flex md:justify-between">
                <div className="flex gap-3 w-full">
                  <img
                    className=" rounded-full md:shadow-lg h-10"
                    src={insoftLink}
                    alt="insoftlink logo"
                  />
                  <div>
                    <p className="text-lg font-semibold">InsoftLink Software</p>
                    <p>Frontend developer</p>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-gray-400">Oct 2023 - Jan 2024</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-[20%] md:flex md:mt-[10%]">
            <p className="text-blue-800 font-semibold md:inline-block">
              Education
            </p>
            <div className="mt-5 mr-6 text-left md:mt-0 md:ml-[10%] md:mr-[20%] lg:mr-[20%] lg:ml-[5%] xl:mr-[10%]">
              <p className="md:inline-block">
                I have recently graduated from{" "}
                <b>
                  {" "}
                  Uttarakhand Technical University(2023) with Bachelor's in CS
                </b>
                <br />
                <br />
                As a web developer passionate about bridging the gap between
                engineering and design. My primary goal is to develop
                applications that are both{" "}
                <RoughNotation
                  show={true}
                  animate={true}
                  type="highlight"
                  color="#CCC8AA"
                  animationDelay={1400}
                  animationDuration={800}
                >
                  scalable
                </RoughNotation>{" "}
                and{" "}
                <RoughNotation
                  show={true}
                  animate={true}
                  type="highlight"
                  color="#6b6fdb"
                  animationDelay={1400}
                  animationDuration={800}
                >
                  efficient,
                </RoughNotation>{" "}
                ensuring a seamless user experience.I'm well-versed in{" "}
                <RoughNotation
                  show={true}
                  animate={true}
                  type="highlight"
                  color="#F4E869"
                  animationDelay={1400}
                  animationDuration={800}
                >
                  frontend,
                </RoughNotation>{" "}
                and{" "}
                <RoughNotation
                  show={true}
                  animate={true}
                  type="highlight"
                  color="#E5C3A6  "
                  animationDelay={1400}
                  animationDuration={800}
                >
                  <span> backend</span>{" "}
                </RoughNotation>{" "}
                development, ready to tackle new challenges and make meaningful
                contributions to your team. Excited about the opportunities
                ahead!
                <br />
                <br />
                I'm, currently looking for a role as a developer.
                <RoughNotation
                  show={true}
                  animate={true}
                  type="circle"
                  color="#12486B"
                  animationDelay={1000}
                  animationDuration={500}
                  strokeWidth={1}
                >
                  <span className="font-semibold">Hire me. </span>
                </RoughNotation>
                <span
                  className="block mt-3 cursor-pointer underline decoration-sky-500 decoration-4"
                  onClick={handleResume}
                >
                  View my resume <Arrow />{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
