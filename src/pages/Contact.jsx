import React from "react";

const Contact = () => {
  return (
    <div className="py-8 md:py-12 lg:py-16">
      <div className="max-w-2xl mx-auto">
        <div className="bg-zinc-100 rounded-lg p-6 md:p-8 lg:p-10 space-y-8">
          <div className="space-y-4 text-center">
            <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-pink-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            </div>
            <h1 className="text-2xl md:text-3xl font-semibold">Get in Touch</h1>
            <p className="text-lg text-gray-600">Let's work together!</p>
          </div>
          <form className="space-y-4">
            <input
              className="w-full px-4 py-3 text-sm md:text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              type="text"
              name="fullname"
              placeholder="Full-name"
              required
            />
            <input
              className="w-full px-4 py-3 text-sm md:text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              type="email"
              name="email"
              placeholder="Email address"
              required
            />
            <input
              className="w-full px-4 py-3 text-sm md:text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              type="tel"
              name="phone"
              placeholder="Phone number"
              required
            />
            <textarea
              className="w-full px-4 py-3 text-sm md:text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none h-[150px]"
              name="message"
              placeholder="Message"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full px-4 py-3 text-sm md:text-base rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
