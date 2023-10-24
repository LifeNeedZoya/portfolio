import React from "react";
import { FaReacteurope } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
const Expertise = () => {
  return (
    <div className=" bg-[var(--darkModeColor)] text-white  w-screen h-screen  ">
      <h2 className="font-serif justify-center   flex text-4xl">
        My Expertise
      </h2>
      <div className="xl:w-[1100] flex justify-center flex-col">
        <h3 className="border lg:p-6 md:mx-[20%] my-2  ">
          Passionate about UI/UX. Over 4 years of development experience in
          HTML, CSS, JS, React and NextJS frameworks.
        </h3>
        <h3 className="border lg:p-6 md:mx-[20%] my-2 ">
          And has passion about App-development react-native etc{" "}
        </h3>
        <div className="border-t-4   border-pink-200 md:mx-[20%]">
          <p className="mt-5 text-lg my-10">
            I am Fullstack developer based in Ulaan-baatar .Nowadays i am
            student in Pinecone academy{" "}
          </p>
        </div>
        <div className="border-y-4   border-pink-200 md:mx-[20%]">
          <p className="mt-5 text-lg my-10 ">
            I am Fullstack developer based in Ulaan-baatar .Nowadays i am
            student in Pinecone academy{" "}
          </p>
        </div>
      </div>
      <div className="flex border-pink-400 mt-5 md:mx-[20%] font-extrabold text-xl">
        <ul className="lg:w-[400px] border-pink-50 xl:gap-10 gap-3   ">
          <li>React</li>
          <li>
            <FaReacteurope className="lg:w-14 lg:h-12 " />
          </li>
        </ul>
        <ul className="lg:w-[400px] border-pink-50 xl:gap-10 gap-3  ">
          <li>Next.JS</li>
          <li>
            <TbBrandNextjs className="lg:w-14 lg:h-12" />
          </li>
        </ul>
        <ul className="lg:w-[400px] border-pink-50 xl:gap-10 gap-3 ">
          <li>Node.JS</li>
          <li>
            <FaNodeJs className="lg:w-14 lg:h-12" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Expertise;
