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
    title: "Food delivery Client Website",
    url: "https://food-fullstack-app-jd96.vercel.app/",
    image:
      "https://media.istockphoto.com/id/1485674929/photo/woman-asian-professional-nutritionist-busy-working-and-checking-data-from-a-tablet-with-a.jpg?s=1024x1024&w=is&k=20&c=vKKx-fQq4IkQAe8d9f7Mngy_qO2x2E3hT8AWyDGsJfg=",
  },
  {
    title: "Food Delivery Admin Website",
    url: "https://food-fullstack-app-x62q.vercel.app/login",
    image:
      "https://images.unsplash.com/photo-1632406898177-95f7acd8854f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFkbWlufGVufDB8fDB8fHww",
  },
  {
    title: "Zoya's Personal Portfolio Website",
    url: "https://portfoliozoya.vercel.app/",
    image:
      "https://media.istockphoto.com/id/515749452/photo/portfolio.jpg?s=612x612&w=0&k=20&c=clEx211k1R0tVdbMTlWy140856BwThWl65LhiV4O3jQ=",
  },
  {
    title: "Food Delivery Backend Server",
    url: "https://food-fullstack-app.vercel.app/",
    image:
      "https://plus.unsplash.com/premium_photo-1661726637770-fefe253c10e8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZCUyMGRlbGl2ZXJ5fGVufDB8fDB8fHww",
  },
  {
    title: "Income Tracker Website Frontend",
    url: "https://income-expense-hh4v.vercel.app/login",
    image:
      "https://media.istockphoto.com/id/1215466881/vector/dark-minimal-slides-presentation-background-template-business-presentation-template.jpg?s=612x612&w=0&k=20&c=diAge2wYDq9Q8oJgUWM1gPXhMcNFZCacqTpYBbr05yo=",
  },
  {
    title: "Income Tracker Website Backend",
    url: "https://income-expense-gold.vercel.app/",
    image:
      "https://media.istockphoto.com/id/1215466881/vector/dark-minimal-slides-presentation-background-template-business-presentation-template.jpg?s=612x612&w=0&k=20&c=diAge2wYDq9Q8oJgUWM1gPXhMcNFZCacqTpYBbr05yo=",
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
