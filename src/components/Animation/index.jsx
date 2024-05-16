"use client";
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { FaHtml5, FaNodeJs, FaGithubSquare, FaSass } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import "react-quill/dist/quill.snow.css";
import { Tilt } from "react-tilt";
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
import ReactQuill from "react-quill";
import AboutPage from "./About";
import { IoLogoCss3 } from "react-icons/io5";

import "./App.css";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroSection from "../HeroSection";

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    title: "Food delivery Client Website",
    url: "https://food-fullstack-app-jd96.vercel.app/",
    image: "/food.png",
  },
  {
    title: "Food Delivery Admin Website",
    url: "https://food-fullstack-app-x62q.vercel.app/login",
    image: "/foodAdmin.png",
  },
  {
    title: "Zoya's Personal Portfolio Website",
    url: "https://portfoliozoya.vercel.app/",
    image: "/portfolio.png",
  },
  {
    title: "Food Delivery Backend Server",
    url: "https://food-fullstack-app.vercel.app/",
    image: "/food.png",
  },
  {
    title: "Income Tracker Website Frontend",
    url: "https://income-expense-hh4v.vercel.app/login",
    image: "/income.png",
  },
  {
    title: "Income Tracker Website Backend",
    url: "https://income-expense-gold.vercel.app/",
    image: "/income.png",
  },
  {
    title: "GLMS Pinecone",
    url: "https://intern-glms-dashboard-pinecone-studio.vercel.app/challenge-dashboard",
    image: "/glms.png",
  },
];

const defaultOptions = {
  reverse: false,
  max: 35,
  perspective: 1000,
  scale: 1.1,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};
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
      <div className="App-section" ref={addToRefs}>
        <AboutPage />
      </div>
      <main className="App-main">
        <div
          className="App-section"
          ref={addToRefs}
          style={{
            color: "white",
            borderRadius: "20px",
          }}
        >
          <div className="flex justify-evenly w-full items-center">
            <Tilt options={defaultOptions}>
              <ul className="backdrop-blur-sm bg-blue-800 p-6 rounded-full">
                <li>React</li>
                <li>
                  <FaReact className="lg:w-40 lg:h-40 md:max-w-20 md:max-h-20  w-14 h-14 " />
                </li>
              </ul>
            </Tilt>
            <Tilt options={defaultOptions}>
              <ul className="backdrop-blur-sm bg-blue-800 p-6 rounded-full">
                <li>Next.JS</li>
                <li>
                  <TbBrandNextjs className="lg:w-40 lg:h-40 md:max-w-20 md:max-h-20  w-14 h-14" />
                </li>
              </ul>
            </Tilt>
            <Tilt options={defaultOptions}>
              <ul className="backdrop-blur-sm bg-blue-800 p-6 rounded-full">
                <li>CSS</li>
                <li>
                  <IoLogoCss3 className="lg:w-40 lg:h-40 md:max-w-20 md:max-h-20  w-14 h-14" />
                </li>
              </ul>
            </Tilt>
            <Tilt options={defaultOptions}>
              <ul className="backdrop-blur-sm bg-blue-800 p-6 rounded-full">
                <li>HTML</li>
                <li>
                  <FaHtml5 className="lg:w-40 lg:h-40 md:max-w-20 md:max-h-20 w-14 h-14" />
                </li>
              </ul>
            </Tilt>

            <Tilt options={defaultOptions}>
              <ul className="backdrop-blur-sm bg-blue-800 p-6 rounded-full">
                <li>JS</li>
                <li>
                  <TbBrandJavascript className="lg:w-40 lg:h-40 md:max-w-20 md:max-h-20  w-14 h-14" />
                </li>
              </ul>
            </Tilt>
          </div>
        </div>
        <div
          className="App-section"
          ref={addToRefs}
          style={{
            color: "white",
            borderRadius: "20px",
          }}
        >
          <div className="flex justify-evenly  w-full items-center">
            <Tilt options={defaultOptions}>
              <ul className="backdrop-blur-sm bg-blue-800 p-6 rounded-full">
                <li>Tailwind</li>
                <li>
                  <TbBrandTailwind className="lg:w-25 lg:h-25 md:max-w-20 md:max-h-20  w-14 h-14 " />
                </li>
              </ul>
            </Tilt>
            <Tilt options={defaultOptions}>
              <ul className="backdrop-blur-sm bg-blue-800 p-6 rounded-full">
                <li>daisyUI</li>
                <li>
                  <SiDaisyui className="lg:w-25 lg:h-25 md:max-w-20 md:max-h-20  w-14 h-14 " />
                </li>
              </ul>
            </Tilt>

            <Tilt options={defaultOptions}>
              <ul className="backdrop-blur-sm bg-blue-800 p-6 rounded-full">
                <li>MUI</li>
                <li>
                  <SiMui className="lg:w-25 lg:h-25 md:max-w-20 md:max-h-20  w-14 h-14 " />
                </li>
              </ul>
            </Tilt>

            <Tilt options={defaultOptions}>
              <ul className="backdrop-blur-sm bg-blue-800 p-6 rounded-full">
                <li>Sass</li>
                <li>
                  <FaSass className="lg:w-25 lg:h-25 md:max-w-25 md:max-h-25  w-14 h-14 " />
                </li>
              </ul>
            </Tilt>
          </div>
        </div>
        <div
          className="App-section"
          ref={addToRefs}
          style={{
            color: "white",
            borderRadius: "20px",
          }}
        >
          <div
            id="aboutId"
            className="flex md:gap-5 py-10  font-extrabold md:text-xl text-lg  justify-evenly"
          >
            <Tilt options={defaultOptions}>
              <ul className="backdrop-blur-sm bg-blue-800 p-6 rounded-full">
                <li>ExpressJS</li>
                <li>
                  <SiExpress className="lg:w-20 lg:h-20 md:max-w-20 md:max-h-20  w-14 h-14 " />
                </li>
              </ul>
            </Tilt>
            <Tilt options={defaultOptions}>
              <ul className="backdrop-blur-sm bg-blue-800 p-6 rounded-full">
                <li>NODE.JS</li>
                <li>
                  <FaNodeJs className="lg:w-20 lg:h-20 md:max-w-20 md:max-h-20  w-14 h-14" />
                </li>
              </ul>
            </Tilt>
            <Tilt options={defaultOptions}>
              <ul className="backdrop-blur-sm bg-blue-800 p-6 rounded-full">
                <li>PostGreSQL</li>
                <li>
                  <FaHtml5 className="lg:w-20 lg:h-20 md:max-w-20 md:max-h-20  w-14 h-14" />
                </li>
              </ul>
            </Tilt>

            <Tilt options={defaultOptions}>
              <ul className="backdrop-blur-sm bg-blue-800 p-6 rounded-full">
                <li>GITHUB</li>
                <li>
                  <FaGithubSquare className="lg:w-20 lg:h-20 md:max-w-20 md:max-h-20  w-14 h-14" />
                </li>
              </ul>
            </Tilt>
          </div>
        </div>
        <div
          className="App-section"
          ref={addToRefs}
          style={{
            color: "white",
            borderRadius: "20px",
          }}
        >
          <div className="flex justify-evenly  w-full items-center">
            <Tilt options={defaultOptions}>
              <ul className="backdrop-blur-sm bg-blue-800 p-6 rounded-full">
                <li>GIT</li>
                <li>
                  <SiGit className="lg:w-20 lg:h-20 md:max-w-20 md:max-h-20  w-14 h-14" />
                </li>
              </ul>
            </Tilt>

            <Tilt options={defaultOptions}>
              <ul className="backdrop-blur-sm bg-blue-800 p-6 rounded-full">
                <li>Mongo DB</li>
                <li>
                  <SiMongodb className="lg:w-20 lg:h-20 md:max-w-20 md:max-h-20  w-14 h-14" />
                </li>
              </ul>
            </Tilt>
            <Tilt options={defaultOptions}>
              <ul className="backdrop-blur-sm bg-blue-800 p-6 rounded-full">
                <li>Mongoose</li>
                <li>
                  <SiMongoose className="lg:w-20 lg:h-20 md:max-w-20 md:max-h-20  w-14 h-14" />
                </li>
              </ul>
            </Tilt>
            <Tilt options={defaultOptions}>
              <ul className="backdrop-blur-sm bg-blue-800 p-6 rounded-full">
                <li>TypeScript</li>
                <li>
                  <SiTypescript className="lg:w-20 lg:h-20 md:max-w-20 md:max-h-20  w-14 h-14" />
                </li>
              </ul>
            </Tilt>
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
              <div className="card md:w-96 lg:w-[550px] shadow-xl bg-base-100 overflow-auto ">
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
                      <Link href={url}>Go To Project </Link>
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
