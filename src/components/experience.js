import React from "react";

import html from "../components/assets/html.png"
import css from "../components/assets/css.png"
import javascript from "../components/assets/javascript.png"
import react from "../components/assets/react.png"
import github from "../components/assets/github.png"
import MUI from "../components/assets/mui.jpg"
import MERN from "../components/assets/mern.jpg"
import tailwind from "../components/assets/tailwind.png"
const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-blue-600",
    },
   
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },

    {
       id:6,
       src:github,
       title:"GITHUB",
       style: "shadow-gray-300",
    },
    {
      id: 7,
      src: MUI,
      title: "MUI",
      style: "shadow-orange-500",
    },
    {
      id: 8,
      src: MERN,
      title: "MERN",
      style: "shadow-blue-600",
    },
   
   
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen text-white py-12 relative"
    >
      <div className="max-w-screen-lg mx-auto p-4">
        <div>
          <p className="text-3xl md:text-5xl lg:text-6xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-4 md:py-6 text-lg md:text-xl lg:text-2xl">
            These are the technologies I've worked with
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 text-center">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`bg-gray-900 text-gray-200 shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 py-4 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-12 md:w-16 mx-auto mb-2" />
              <p className="text-xs md:text-sm lg:text-base font-semibold">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
