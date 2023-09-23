import React from "react";
import { RoughNotation } from "react-rough-notation";
import { Github, Linkedin, Twitter, Arrow } from "./SvgFiles";

const Home: React.FC = () => {
  return (
    <div>
      <div className="mt-[16%] ml-10">
        <span className="font-inter  text-2xl leading-relaxed">
          Namaste 🙏 <br /> I'm Ravi, <br />
          <span className="charTrans">A Web Developer </span>
        </span>

        <p className="text-lg mt-5 leading-relaxed mr-2">
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
          , and everything in between.
        </p>
        <div className="mt-3">
          <div className="  rounded-md w-auto">
            <button>
              <div className="flex justify-center items-center">
                <Linkedin />
                <p className="text-md">LinkedIn</p>
              </div>
            </button>
          </div>

          <div className="rounded-md ">
            <button>
              <div className="flex justify-center items-center">
                <Github />
                <p className="text-md">Github</p>
              </div>
            </button>
          </div>

          <div className="rounded-md ">
            <button>
              <div className="flex justify-center items-center">
                <Twitter />
                <p className="text-md">Twitter</p>
              </div>
            </button>
          </div>
          <p>
            Email 👉
            <RoughNotation
              type="underline"
              animate={true}
              animationDelay={2400}
              animationDuration={900}
              show={true}
              color="#bf360c"
            >
              kumarraviabhi007@gmail.com
            </RoughNotation>
          </p>
        </div>

        <div>
          <div className="mt-[20%]">
            <p className="text-blue-800 font-semibold">Background</p>
            <div className="mt-5 mr-6 text-left ">
              <p>
                I have recently graduated from{" "}
                <b> Institute of Technology, Gopeshwar</b>, after completing
                Bachelor of Techynology in Computer Science.
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
                ensuring a seamless user experience.I'm well-versed in {" "}
                
                <RoughNotation
                  show={true}
                  animate={true}
                  type="highlight"
                  color="#F4E869"
                  animationDelay={1400}
                  animationDuration={800}
                >
                  front-end,
                </RoughNotation>
                
                
               

                {" "}
                and {" "}
               <RoughNotation  show={true}
                  animate={true}
                  type="highlight"
                  color="#F4E869"
                  animationDelay={1400}
                  animationDuration={800} ><span> backend</span>  </RoughNotation>  
               {" "}  development, ready to tackle new
                challenges and make meaningful contributions to your team.
                Excited about the opportunities ahead!
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
                <p className="mt-3 cursor-pointer">View my resume <Arrow /> </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
