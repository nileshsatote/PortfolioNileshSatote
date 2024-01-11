import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import z1 from "../components/assets/z1.jpg";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="bg-gradient-to-b from-black via-black to-gray-800 w-full min-h-screen flex items-center justify-center"
    >
      <div className="max-w-screen-md mx-auto p-4 md:p-8">
        <div className="md:flex md:flex-row-reverse items-center">
          <div className="md:w-2/5">
            <img
              src={z1}
              alt="my profile"
              className="rounded-2xl mx-auto w-full md:w-2/5 lg:w-96 xl:w-96 duration-500 hover:scale-105"
            />
          </div>
          <div className="md:w-3/5 md:pr-8">
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white pt-3">
              I'm a MERN Stack Developer
            </h2>
            <p className="text-gray-500 py-4">
              I am a fresher, building and designing software. Currently, I love
              to work on web applications using technologies like React,
              Tailwind, MUI, AWS.
            </p>
            <div>
              <Link
                to="portfolio"
                smooth
                duration={500}
                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              >
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-1" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
