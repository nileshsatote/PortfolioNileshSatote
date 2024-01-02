import React, { Component } from "react";
import arrayDestruct from "../components/assets/portfolio/arrayDestruct.jpg";
import OIP from '../components/assets/portfolio/OIP.jpg'
import Novice from '../components/assets/portfolio/novice.jpg'
import Cicd from '../components/assets/portfolio/cicd.jpg'
import Pportfolio from '../components/assets/portfolio/portfolio.jpg'
import Attendo from '../components/assets/portfolio/attendo.jpg'
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: OIP,
      Name:"Weather App"
    },
    {
      id: 2,
      src: Novice,
      Name:"Novice Trainer"
    },
    {
      id: 3,
      src: Cicd,
      Name:"CICD"
    },
    {
      id: 4,
      src: Pportfolio,
      Name:"Portfolio"
    },
    {
      id: 5,
      src: Attendo,
      Name:"Attendo"
    },
    {
      id: 6,
      src: arrayDestruct,
      Name:"ArrayDestruct"
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full md:h-50 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, Name}) => (
            <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  
                {Name}
                </button>
                <button className="px-6 py-3 w-1/2 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
