import React from "react";
// import resume from "../assets/resume/resume.pdf";
import { NavLink } from "react-router-dom";
// import { FaDownload } from "react-icons/fa";

const Resume = () => {
  return (
    <main className="md:px-36 my-12">
      <div className="px-6 lg:mx-auto xl:w-[90%]">
        <h1 className="font-bold pb-2 text-3xl md:text-6xl mb-10 bg-gradient-to-br from-blue-600 to-pink-700 text-transparent bg-clip-text text-center">
          Resume
        </h1>
        <div>
          <div className="flex flex-row justify-center items-center mb-2 md:justify-between md:mb-6">
            <h1 className="text-blue-600 text-2xl font-bold">Experience</h1>

            <NavLink
              className="font-normal text-white bg-blue-700 hover:bg-blue-800 transition duration-300 py-4 px-6 rounded-md md:w-[200px] md:py-4 md:px-4"
              href="https://shorturl.at/Dxb0R"
              download
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 inline-block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>{" "}
              Download Resume
            </NavLink>
          </div>

          <div className="px-10 py-12 rounded-xl mb-9 bg-white flex flex-col shadow-lg lg:flex-row lg:items-center">
            <div className="p-6 lg:p-2 mb-6 lg:mb-0 bg-zinc-200 text-center rounded-lg lg:w-[70%] lg:text-left">
              <h2 className="text-blue-600 text-[18px] mb-2 font-bold">
                2019-Present
              </h2>
              <h3 className="font-medium">Web Developer</h3>
              <p className="font-light">Stark Industries, Los Angeles, CA</p>
            </div>
            <div className="lg:p-8">
              <p className="font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam explicabo dolore consequuntur consectetur perferendis
                repudiandae, possimus ducimus ut, fuga placeat labore numquam
                iste quas at! Doloremque quasi repellat ratione laborum aliquam!
                Quod voluptate delectus culpa?
              </p>
            </div>
          </div>

          <div className="px-10 py-12 rounded-xl mb-9 bg-white flex flex-col shadow-lg lg:flex-row lg:items-center">
            <div className="p-6 lg:p-2 mb-6 lg:mb-0 bg-zinc-200 text-center rounded-lg lg:w-[70%] lg:text-left">
              <h2 className="text-blue-600 text-[18px] mb-2 font-bold">
                2017-2019
              </h2>
              <h3 className="font-medium">SEM Specialist</h3>
              <p className="font-light">Wayne Enterprises, Gotham City NY</p>
            </div>
            <div className="lg:p-8">
              <p className="font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam explicabo dolore consequuntur consectetur perferendis
                repudiandae, possimus ducimus ut, fuga placeat labore numquam
                iste quas at! Doloremque quasi repellat ratione laborum aliquam!
                Quod voluptate delectus culpa?
              </p>
            </div>
          </div>

          <h1 className="text-pink-600 text-3xl font-medium pb-5">Education</h1>

          <div className="px-10 py-12 rounded-xl mb-9 bg-white flex flex-col shadow-lg lg:flex-row lg:items-center">
            <div className="p-6 lg:p-2 mb-6 lg:mb-0 bg-zinc-200 text-center rounded-lg lg:w-[70%] lg:text-left">
              <h2 className="text-pink-600 text-[18px] mb-2 font-bold">
                2019-2024
              </h2>
              <h3 className="font-medium">Federal University, Oye-Ekiti</h3>
              <p className="font-light italic">
                Bachelor's, Sociology & Anthropology
              </p>
            </div>
            <div className="lg:p-8">
              <p className="font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam explicabo dolore consequuntur consectetur perferendis
                repudiandae, possimus ducimus ut, fuga placeat labore numquam
                iste quas at! Doloremque quasi repellat.
              </p>
            </div>
          </div>

          <div className="px-10 py-12 rounded-xl mb-9 bg-white flex flex-col shadow-lg lg:flex-row lg:items-center">
            <div className="p-6 lg:p-2 mb-6 lg:mb-0 bg-zinc-200 text-center rounded-lg lg:w-[70%] lg:text-left">
              <h2 className="text-pink-600 text-[18px] mb-2 font-bold">
                2014-2017
              </h2>
              <h3 className="font-medium">EACOED MHS, Oyo State</h3>
              <p className="font-light italic">
                Secondary Leaving Certificate, Arts & Humanities
              </p>
            </div>
            <div className="lg:p-8">
              <p className="font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam explicabo dolore consequuntur consectetur perferendis
                repudiandae, possimus ducimus ut, fuga placeat labore numquam
                iste quas at! Doloremque quasi repellat.
              </p>
            </div>
          </div>

          <div className="px-10 py-12 mb-9 bg-white shadow-lg rounded-xl flex flex-col">
            <div className="flex items-center mb-8">
              <div className="flex items-center justify-center size-14 w-14 rounded-lg bg-gradient-to-br from-blue-500 to-pink-500 mr-5 px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-8 text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z"
                    clipRule="evenodd"
                  />
                  <path d="m10.076 8.64-2.201-2.2V4.874a.75.75 0 0 0-.364-.643l-3.75-2.25a.75.75 0 0 0-.916.113l-.75.75a.75.75 0 0 0-.113.916l2.25 3.75a.75.75 0 0 0 .643.364h1.564l2.062 2.062 1.575-1.297Z" />
                  <path
                    fillRule="evenodd"
                    d="m12.556 17.329 4.183 4.182a3.375 3.375 0 0 0 4.773-4.773l-3.306-3.305a6.803 6.803 0 0 1-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 0 0-.167.063l-3.086 3.748Zm3.414-1.36a.75.75 0 0 1 1.06 0l1.875 1.876a.75.75 0 1 1-1.06 1.06L15.97 17.03a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h1 className="bg-gradient-to-br from-blue-600 to-pink-700 text-transparent bg-clip-text text-3xl font-bold">
                Professional Skills
              </h1>
            </div>
            <div className="md:grid md:grid-cols-3 md:grid-rows-2 gap-x-5 gap-y-1">
              <div className="p-6 mb-6 bg-zinc-100 rounded-lg">
                <h2>SEO/SEM Marketing</h2>
              </div>
              <div className="p-6 mb-6 bg-zinc-100 rounded-lg">
                <h2>Statistical Analysis</h2>
              </div>
              <div className="p-6 mb-6 bg-zinc-100 rounded-lg">
                <h2>Web Development</h2>
              </div>
              <div className="p-6 mb-6 bg-zinc-100 rounded-lg">
                <h2>Problem Solving</h2>
              </div>
              <div className="p-6 mb-6 bg-zinc-100 rounded-lg">
                <h2>Data Interpretation & Analysis</h2>
              </div>
              <div className="p-6 mb-6 bg-zinc-100 rounded-lg">
                <h2>User Interface Design</h2>
              </div>
            </div>
            <div className="flex items-center mb-8">
              <div className="flex items-center justify-center size-14 w-14 rounded-lg bg-gradient-to-br from-blue-500 to-pink-500 px-3 mr-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-8 text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h1 className="bg-gradient-to-br from-blue-600 to-pink-700 text-transparent bg-clip-text text-3xl font-bold">
                Languages and Tools
              </h1>
            </div>
            <div className="md:grid md:grid-cols-3 md:grid-rows-2 gap-x-5 gap-y-1">
              <div className="p-6 mb-6 bg-zinc-100 rounded-lg">
                <h2>HTML & CSS</h2>
              </div>
              <div className="p-6 mb-6 bg-zinc-100 rounded-lg">
                <h2>JavaScript</h2>
              </div>
              <div className="p-6 mb-6 bg-zinc-100 rounded-lg">
                <h2>React</h2>
              </div>
              <div className="p-6 mb-6 bg-zinc-100 rounded-lg">
                <h2>CorelDraw</h2>
              </div>
              <div className="p-6 mb-6 bg-zinc-100 rounded-lg">
                <h2>Adobe Illustrator</h2>
              </div>
              <div className="p-6 mb-6 bg-zinc-100 rounded-lg">
                <h2>Adobe Photoshop</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Resume;
