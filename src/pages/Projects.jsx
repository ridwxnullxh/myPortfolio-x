import React from "react";
import { NavLink } from "react-router-dom";
import dummyImg from "../assets/images/dummyimg.png";

const Projects = () => {
  return (
    <div className="space-y-12 py-8 md:py-12 lg:py-16">
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center bg-gradient-to-br from-blue-600 to-pink-700 text-transparent bg-clip-text">
        Projects
      </h1>

      <div className="space-y-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-6">
            <img
              className="w-full h-64 md:h-full object-cover"
              src={dummyImg}
              alt="Project screenshot"
            />
            <div className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold">Project Name 1</h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas consectetur, hic ducimus in ut quia molestiae fugit
                recusandae quasi, ipsa corporis? Ipsam voluptate debitis nostrum
                reiciendis molestias, dolores incidunt in?
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-6">
            <img
              className="w-full h-64 md:h-full object-cover"
              src={dummyImg}
              alt="Project screenshot"
            />
            <div className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold">Project Name 2</h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas consectetur, hic ducimus in ut quia molestiae fugit
                recusandae quasi, ipsa corporis? Ipsam voluptate debitis nostrum
                reiciendis molestias, dolores incidunt in?
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-gradient-to-br from-blue-600 to-pink-700 rounded-lg py-12 md:py-16 lg:py-20 px-6 text-center text-white">
        <div className="text-center sm:px-16 md:px-20">
          <h1 className="text-4xl font-bold text-white px-4 mb-10 lg:text-6xl">
            Let's Build Something Together
          </h1>
          <NavLink
            className="border border-white rounded-lg px-12 py-4 font-bold lg:mt-8 text-white hover:bg-white hover:text-black transition duration-300"
            to="/contact"
          >
            Contact Me
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Projects;
