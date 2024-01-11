import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white flex items-center justify-center"
    >
      <div className="max-w-screen-lg p-4 mx-auto">
        <div className="pb-8">
          <p className="text-2xl md:text-4xl lg:text-5xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-base md:text-xl lg:text-2xl mt-8">
          I am Nilesh Satote, a BTech final year student specializing in
          computer science and engineering. I have a deep interest in web
          development, particularly in frontend development. My experience
          includes React JS, Node JS, Express JS, MongoDB, JavaScript, HTML,
          CSS, Tailwind CSS, and Material-UI. I am eager to learn about new
          technologies, and I am adept at managing workloads as a quick learner
          and technology enthusiast.
        </p>
      </div>
    </div>
  );
};

export default About;
