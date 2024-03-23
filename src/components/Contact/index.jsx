"use client";
import React, { useRef, useState } from "react";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const [success, setSuccess] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_h01xtai",
        "template_egpseiv",
        form.current,
        "Pj6rCxp6cUQWBHKbb"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess("sent");
        },
        (error) => {
          console.log(error.text);
          setSuccess("not sent");
        }
      );
  };

  return (
    <div className="bg-gradient-to-b from-[#2f27ce] to-pink-[#0e0e20]">
      <div className=" container mx-auto w-screen md:w-[800px]  grid grid-cols-1  text-white lg:p-10 ">
        <h1 className="font-semibold text-4xl text-center">Contact Me</h1>
        <div className="">
          <div className="mt-6 select-text  text-balance text-center">
            <p>
              Contact Us Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam
              <span className="text-green-500 block text-lg">
                A message will be sent directly to this person, So sent with
                caution
              </span>
            </p>
          </div>
          <div className="sm:flex mt-10 text-center">
            <div className="border sm:flex-1 ">
              <h3 className="font-bold">Contact</h3>
              <p className="text-#996A75 font-sans">
                <span className="text-pink-500">
                  Phone Number: 976-85650090
                </span>{" "}
                <br />{" "}
                <span className="">
                  <span className="text-pink-500">Email:</span>{" "}
                  Zoya.budee@gmail.com
                </span>
              </p>
            </div>
          </div>
        </div>
        <form
          className="bg-[var(--darkModeColor)]  p-6 mt-11"
          id="userForm"
          ref={form}
          onSubmit={sendEmail}
        >
          <h3>Leave a Message</h3>
          <div className="md:flex gap-2 w-11/12  ">
            <input
              type="text"
              name="from_name"
              required
              id=""
              placeholder="Your Name"
              className="  border rounded p-1 text-black block w-full my-1 "
            />
            <input
              type="email"
              name="user_email"
              required
              id=""
              placeholder="Your Email"
              className="  rounded p-1 block w-full my-1"
            />
          </div>
          <input
            type="text"
            name="Heading"
            required
            id=""
            placeholder="Subject "
            className="my-6
          w-11/12 rounded p-1 
          "
          />
          <textarea
            type="text"
            required
            name="message"
            placeholder="Write a message"
            className="w-11/12 rounded p-1 text-black "
          />
          <button
            className="bg-[var(--primaryColor)]  p-2 rounded"
            type="submit"
            form="userForm"
          >
            Send a message
          </button>

          {success == "sent"
            ? "Email is sent successfully. We will contact you soon"
            : success == "not sent"
            ? "email did not send "
            : ""}
        </form>
      </div>
    </div>
  );
};

export default Contact;
