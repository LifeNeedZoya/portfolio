"use client";
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { FaHtml5, FaNodeJs, FaGithubSquare, FaSass } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import {
  TbBrandNextjs,
  TbBrandTailwind,
  TbBrandJavascript,
} from "react-icons/tb";
import {
  SiDaisyui,
  SiExpress,
  SiMui,
  SiMongodb,
  SiMongoose,
  SiGit,
  SiTypescript,
} from "react-icons/si";

import { IoLogoCss3 } from "react-icons/io5";

import "./App.css";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroSection from "../HeroSection";

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    title: "Zoya's Personal Portfolio Website",
    url: "https://www.google.com/",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4fN8ZVn7L3ZS9FJntXEPS_3r2szgCJS6qjMUq4VbQYbsJ-APJJECeTtFFbwbSKd0RBT4&usqp=CAU",
  },
  {
    title: "Food delivery Client Website",
    url: "https://www.google.com/",
    image:
      "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
  },
  {
    title: "Food Delivery Admin Website",
    url: "https://www.google.com/",
    image:
      "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
  },
  {
    title: "Food Delivery Backend Server",
    url: "https://www.google.com/",
    image:
      "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
  },
  {
    title: "Income Tracker Website",
    url: "https://www.google.com/",
    image:
      "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
  },
];

const AnimateGraph = () => {
  const [background, setBackground] = useState("#262626");
  const headerRef = useRef(null);

  const revealRefs = useRef([]);
  revealRefs.current = [];

  useEffect(() => {
    gsap.to(headerRef.current, {
      backgroundColor: background,
      duration: 1,
      ease: "none",
    });
  }, [background]);

  useEffect(() => {
    gsap.from(headerRef.current, {
      autoAlpha: 0,
      ease: "none",
      delay: 1,
    });

    revealRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          autoAlpha: 0,
        },
        {
          duration: 1,
          autoAlpha: 1,
          ease: "none",
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: "top center+=100",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <div className="App">
      <div className="w-screen h-screen text-white">
        <HeroSection />
      </div>
      <main className="App-main">
        <div
          className="App-section"
          ref={addToRefs}
          style={{
            background: "#8623f0",
            color: "white",
            borderRadius: "20px",
          }}
        >
          <h2 className="font-serif justify-center flex text-4xl  ">
            My Expertise
          </h2>
          <div className=" flex justify-center flex-col">
            <h3 className="border lg:p-6 md:mx-[20%] my-2  ">
              Passionate about Web development. Over half year of development
              experience in HTML, CSS, JS, React and NextJS frameworks.
            </h3>
            <h3 className="lg:flex border-y-4 border-pink-200 pt-10 pb-10 md:mx-[20%] lg:font-extrabold lg:text-xl">
              I am Fullstack developer based in Ulaan-baatar. Nowadays i am
              student in Pinecone academy
            </h3>
          </div>
        </div>
        <div
          className="App-section"
          ref={addToRefs}
          style={{
            background: "#8623f0",
            color: "white",
            borderRadius: "20px",
          }}
        >
          <div className="flex justify-evenly w-full items-center">
            <ul className="">
              <li>React</li>
              <li>
                <FaReact className="lg:w-40 lg:h-40 md:max-w-20 md:max-h-20  w-14 h-14 " />
              </li>
            </ul>
            <ul className=" ">
              <li>Next.JS</li>
              <li>
                <TbBrandNextjs className="lg:w-40 lg:h-40 md:max-w-20 md:max-h-20  w-14 h-14" />
              </li>
            </ul>
            <ul className="   ">
              <li>CSS</li>
              <li>
                <IoLogoCss3 className="lg:w-40 lg:h-40 md:max-w-20 md:max-h-20  w-14 h-14" />
              </li>
            </ul>
            <ul className="">
              <li>HTML</li>
              <li>
                <FaHtml5 className="lg:w-40 lg:h-40 md:max-w-20 md:max-h-20 w-14 h-14" />
              </li>
            </ul>
            <ul className="">
              <li>JS</li>
              <li>
                <TbBrandJavascript className="lg:w-40 lg:h-40 md:max-w-20 md:max-h-20  w-14 h-14" />
              </li>
            </ul>
          </div>
        </div>
        <div
          className="App-section"
          ref={addToRefs}
          style={{
            background: "#8623f0",
            color: "white",
            borderRadius: "20px",
          }}
        >
          <div className="flex justify-evenly  w-full items-center">
            <ul className="   ">
              <li>Tailwind</li>
              <li>
                <TbBrandTailwind className="lg:w-25 lg:h-25 md:max-w-20 md:max-h-20  w-14 h-14 " />
              </li>
            </ul>
            <ul className="   ">
              <li>daisyUI</li>
              <li>
                <SiDaisyui className="lg:w-25 lg:h-25 md:max-w-20 md:max-h-20  w-14 h-14 " />
              </li>
            </ul>

            <ul className="">
              <li>MUI</li>
              <li>
                <SiMui className="lg:w-25 lg:h-25 md:max-w-20 md:max-h-20  w-14 h-14 " />
              </li>
            </ul>
            <ul className="">
              <li>Sass</li>
              <li>
                <FaSass className="lg:w-25 lg:h-25 md:max-w-25 md:max-h-25  w-14 h-14 " />
              </li>
            </ul>
          </div>
        </div>
        <div
          className="App-section"
          ref={addToRefs}
          style={{
            background: "#8623f0",
            color: "white",
            borderRadius: "20px",
          }}
        >
          <div
            id="aboutId"
            className="flex md:gap-5 py-10  font-extrabold md:text-xl text-lg  justify-evenly"
          >
            <ul className="">
              <li>ExpressJS</li>
              <li>
                <SiExpress className="lg:w-20 lg:h-20 md:max-w-20 md:max-h-20  w-14 h-14 " />
              </li>
            </ul>
            <ul className=" ">
              <li>NODE.JS</li>
              <li>
                <FaNodeJs className="lg:w-20 lg:h-20 md:max-w-20 md:max-h-20  w-14 h-14" />
              </li>
            </ul>
            <ul className=" ">
              <li>PostGreSQL</li>
              <li>
                <FaHtml5 className="lg:w-20 lg:h-20 md:max-w-20 md:max-h-20  w-14 h-14" />
              </li>
            </ul>
            <ul className="">
              <li>GITHUB</li>
              <li>
                <FaGithubSquare className="lg:w-20 lg:h-20 md:max-w-20 md:max-h-20  w-14 h-14" />
              </li>
            </ul>
          </div>
        </div>
        <div
          className="App-section"
          ref={addToRefs}
          style={{
            background: "#8623f0",
            color: "white",
            borderRadius: "20px",
          }}
        >
          <div className="flex justify-evenly  w-full items-center">
            <ul className="">
              <li>GIT</li>
              <li>
                <SiGit className="lg:w-20 lg:h-20 md:max-w-20 md:max-h-20  w-14 h-14" />
              </li>
            </ul>
            <ul className="">
              <li>Mongo DB</li>
              <li>
                <SiMongodb className="lg:w-20 lg:h-20 md:max-w-20 md:max-h-20  w-14 h-14" />
              </li>
            </ul>
            <ul className="">
              <li>Mongoose</li>
              <li>
                <SiMongoose className="lg:w-20 lg:h-20 md:max-w-20 md:max-h-20  w-14 h-14" />
              </li>
            </ul>
            <ul className="">
              <li>TypeScript</li>
              <li>
                <SiTypescript className="lg:w-20 lg:h-20 md:max-w-20 md:max-h-20  w-14 h-14" />
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-2 ">
          {sections.map(({ title, image, url }, i) => (
            <div
              className="App-section"
              key={i}
              ref={addToRefs}
              style={{ width: "100%" }}
            >
              <div className="card md:w-96 lg:w-[550px] shadow-xl bg-base-100 ">
                <figure className="px-5 pt-5">
                  <img
                    src={image}
                    width={"100%"}
                    alt="Shoes"
                    className="rounded-xl"
                  />
                </figure>
                <div className="card-body items-center text-center text-purple-700">
                  <h2 className="card-title">{title}</h2>
                  <div className="  ">
                    <button className="btn btn-primary  text-white">
                      <Link href={url}>Go To Project {`${url}`}</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AnimateGraph;
