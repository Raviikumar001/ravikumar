import React from "react";
import { RoughNotation } from "react-rough-notation";
import { Github, Linkedin, Twitter } from "./SvgFiles";







const Home: React.FC = () => {
  return (
    <div>
      <div className="mt-[16%] ml-10">
        <span className="font-inter  text-2xl leading-relaxed">
          Namaste 🙏  <br /> I'm Ravi,  <br/><span className="charTrans">A Web Developer </span> 
        </span>

        <p className="text-lg mt-5 leading-relaxed">
          I'm from Dehradun, I love building {" "}
          <RoughNotation show={true} animate={true} type="highlight" color="#ffd54f" animationDelay={100} animationDuration={600}>
          projects 

          </RoughNotation>{" "}
          with{" "}
          <RoughNotation show={true} animate={true} type="highlight" color="#d6d4cd" animationDelay={1000} animationDuration={500} >
          beautiful interfaces,
          </RoughNotation>{" "}
         <RoughNotation show={true} animate={true} type="highlight" color="#c0aa59" animationDelay={1400} animationDuration={800} >
         web apps
         </RoughNotation>{" "}
          
          , and everything in between.
        </p>
        <div className="mt-3">
          <div className="  rounded-md w-auto">
            <button>
              <div className="flex justify-center items-center">
                <Linkedin />
                <p className="text-sm">LinkedIn</p>
              </div>
            </button>
          </div>

          <div className="rounded-md ">
            <button>
              <div className="flex justify-center items-center">
                <Github />
                <p className="text-sm">Github</p>
              </div>
            </button>
          </div>

          <div className="rounded-md ">
            <button>
              <div className="flex justify-center items-center">
                <Twitter />
                <p className="text-sm">Twitter</p>
              </div>
            </button>
          </div>
          <p>Email 👉 
          <RoughNotation type="underline" animate={true} animationDelay={2400} animationDuration={900} show={true} color="#bf360c">
          
             kumarraviabhi007@gmail.com
        
          </RoughNotation>
          </p>
        </div>


        <div>
          <div className="mt-[20%]">
            <p>Background</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
