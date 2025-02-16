import React from "react";
import { NavLink } from "react-router-dom";
import profile from "../assets/images/pfp.png";
import dotsBlue from "../assets/images/dots-blue.png";
import dotsWhite from "../assets/images/dots-white.png";

const Home = () => {
  return (
    <div className="space-y-12 py-8 md:py-12 lg:py-16">
      <section className="space-y-8 md:space-y-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <p className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-600 to-pink-700 rounded-full text-white text-sm md:text-base">
              Design &middot; Architecture &middot; Development
            </p>
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl text-zinc-600">
                My name is Osuolale Ridwanullah
              </h2>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-br from-blue-600 to-pink-700 text-transparent bg-clip-text">
                I am a Professional Software Engineer
              </h1>
            </div>

            <div className="flex flex-col text-xl md:flex-row lg:px-0 md:mb-24 lg:mb-0 md:justify-center lg:justify-start">
              <NavLink
                className="font-medium text-white bg-blue-700 hover:bg-blue-800 transition duration-300 border w-full py-3 align-middle rounded-md md:w-[200px] md:p-6 md:h-[80px] md:mr-10"
                to="/resume"
              >
                Resume
              </NavLink>

              <NavLink
                className="font-medium text-black bg-white hover:bg-black hover:text-white transition duration-300 border border-black w-full py-3 rounded-md mt-3 md:m-0 mb-10 md:w-[200px] md:p-6 md:h-[80px]"
                to="/projects"
              >
                Projects
              </NavLink>
            </div>
          </div>

          {/* Right Div */}
          <div>
            <div className="bg-gradient-to-br from-blue-600 to-pink-700 rounded-xl h-[75vw] w-[75vw] relative max-h-[40rem] max-w-[40rem] mx-auto md:max-h-[30rem] md:max-w-[30rem] lg:h-[35vw] lg:w-[35vw]">
              <img
                className="overflow-x-visible absolute max-h-[50rem] bottom-0"
                src={profile}
                alt="profile"
              />
              <div>
                <img
                  className="absolute overflow-visible md:max-h-[10rem] h-[7rem] top-5 -right-8"
                  src={dotsBlue}
                  alt="dots"
                />
              </div>
              <div>
                <img
                  className="absolute overflow-visible md:max-h-[10rem] h-[7rem] top-8 right-2"
                  src={dotsWhite}
                  alt="dots"
                />
              </div>
              <div>
                <img
                  className="absolute overflow-visible md:max-h-[10rem] h-[7rem] bottom-0 -left-10"
                  src={dotsBlue}
                  alt="dots"
                />
              </div>
              <div>
                <img
                  className="absolute overflow-visible md:max-h-[10rem] h-[7rem] bottom-8 left-5"
                  src={dotsWhite}
                  alt="dots"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="py-12 bg-zinc-100">
        <div className="px-8">
          <div className="text-center my-12 px-6 lg:px-80">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-pink-700 text-transparent md:text-5xl md:font-semibold bg-clip-text py-4 lg:font-bold">
              About Me
            </h1>
            <h3 className="pt-2 pb-4 text-2xl font-thin">
              My name is Osuolale Ridwanullah Babatunde.
            </h3>
            <p className="text-base font-thin mb-5 leading-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              pariatur eaque reprehenderit beatae nulla excepturi error enim
              exercitationem recusandae accusamus. Id, amet eius fugiat voluptas
              ab sequi, in praesentium non amet dias provident nam.
            </p>
            <div className="flex justify-center items-center">
              <NavLink to="https://github.com/ridwxnullxh" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="40"
                  viewBox="0 0 30 30"
                >
                  <defs>
                    <linearGradient
                      id="grad1"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop
                        offset="0%"
                        style={{ stopColor: "#1e30f3", stopOpacity: 1 }}
                      />
                      <stop
                        offset="100%"
                        style={{ stopColor: "#db1e84", stopOpacity: 1 }}
                      />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#grad1)"
                    d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"
                  />
                </svg>
              </NavLink>

              <NavLink
                className="ml-5"
                to="https://shorturl.at/Dxb0R"
                target="_blank"
              >
                <svg
                  width="30"
                  viewBox="0 0 24 24"
                  id="meteor-icon-kit__solid-linkedin"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id="grad2"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop
                        offset="0%"
                        style={{ stopColor: "#1e30f3", stopOpacity: 1 }}
                      />
                      <stop
                        offset="100%"
                        style={{ stopColor: "#db1e84", stopOpacity: 1 }}
                      />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#grad2)"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22.2857 0H1.70893C0.766071 0 0 0.776786 0 1.73036V22.2696C0 23.2232 0.766071 24 1.70893 24H22.2857C23.2286 24 24 23.2232 24 22.2696V1.73036C24 0.776786 23.2286 0 22.2857 0ZM7.25357 20.5714H3.69643V9.11786H7.25893V20.5714H7.25357ZM5.475 7.55357C4.33393 7.55357 3.4125 6.62679 3.4125 5.49107C3.4125 4.35536 4.33393 3.42857 5.475 3.42857C6.61071 3.42857 7.5375 4.35536 7.5375 5.49107C7.5375 6.63214 6.61607 7.55357 5.475 7.55357ZM20.5875 20.5714H17.0304V15C17.0304 13.6714 17.0036 11.9625 15.1821 11.9625C13.3286 11.9625 13.0446 13.4089 13.0446 14.9036V20.5714H9.4875V9.11786H12.9V10.6821H12.9482C13.425 9.78214 14.5875 8.83393 16.3179 8.83393C19.9179 8.83393 20.5875 11.2071 20.5875 14.2929V20.5714Z"
                  />
                </svg>
              </NavLink>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
