import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
        i am nilesh satote, BTech final year student, my specialization is computer science and engineering, i have deep interest in web development,
         and I'm enthusiastic about frontend development, 
         with experience like React js, javascript, HTML, CSS, Tailwind CSS,MUI. I'm eager to learn about new technology, and I'm significant to manage work load, I'm a quick learner. and enthusiast about technology.
        </p>

        <br />

      <div className="flex space-x-10 pt-5">

       <ul>
       <h1 className="text-4xl ">Core Skill</h1>
    <li>Data Structure</li>
    <li>ALgorithms</li>
    <li>Oops</li>
    <li>DBMS</li>
    <li>Computer Network</li>
  </ul>


  <ul>
       <h1 className="text-4xl ">Language</h1>
       <li>C</li>
      <li>C++</li>
      <li>SQL</li>
      <li>javascript</li>
  </ul>


  <ul>
      <h1 className="text-4xl">Frameworks</h1>
    <li>MERN Stack</li>
    <li>Tailwind CSS</li>
    <li>Redux</li>
    <li>Material-UI</li>
    
  </ul> 

  
  <ul>
  <h1 className="text-4xl">Developer Tools</h1>
    <li>GitHub</li>
    <li>VsCode</li>
  </ul> 
       </div>
        
      </div>
    </div>
  );
};

export default About;


