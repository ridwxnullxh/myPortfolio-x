import React from "react";
import { NavLink } from "react-router-dom";

const Terms = () => {
  return (
    <div className="py-8 md:py-12 lg:py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center bg-gradient-to-br from-blue-600 to-pink-700 text-transparent bg-clip-text mb-12">
          Terms & Conditions
        </h1>

        <div className="space-y-8 px-4">
          <section className="bg-white rounded-lg shadow-lg p-6 md:p-8 space-y-4">
            <h2 className="text-2xl font-semibold text-blue-600">
              1. Professional Services Agreement
            </h2>
            <p className="text-gray-600">
              By engaging my services, you agree to enter into a professional
              relationship where I will provide software engineering services
              according to the agreed-upon terms and specifications.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-6 md:p-8 space-y-4">
            <h2 className="text-2xl font-semibold text-blue-600">
              2. Project Scope & Deliverables
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Clear project requirements must be provided in writing</li>
              <li>Timeline and milestones will be mutually agreed upon</li>
              <li>Regular progress updates and communication</li>
              <li>Deliverables will be specified in the project contract</li>
            </ul>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-6 md:p-8 space-y-4">
            <h2 className="text-2xl font-semibold text-blue-600">
              3. Payment Terms
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>50% upfront payment to commence work</li>
              <li>Remaining 50% upon project completion</li>
              <li>
                Additional features or revisions will be billed separately
              </li>
              <li>Payment methods: Bank transfer, PayPal, or as agreed</li>
            </ul>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-6 md:p-8 space-y-4">
            <h2 className="text-2xl font-semibold text-blue-600">
              4. Intellectual Property
            </h2>
            <p className="text-gray-600">
              Upon full payment, you will receive full intellectual property
              rights to the delivered code. However, I reserve the right to use
              generic code snippets and techniques in future projects.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-6 md:p-8 space-y-4">
            <h2 className="text-2xl font-semibold text-blue-600">
              5. Confidentiality
            </h2>
            <p className="text-gray-600">
              I commit to maintaining strict confidentiality regarding your
              project details, business information, and any sensitive data
              shared during our collaboration.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-6 md:p-8 space-y-4">
            <h2 className="text-2xl font-semibold text-blue-600">
              6. Project Timeline
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Timelines will be established at project start</li>
              <li>
                Delays due to client feedback or changes may extend timeline
              </li>
              <li>Regular updates on progress and potential delays</li>
            </ul>
          </section>

          <div className="text-center pt-8">
            <p className="text-gray-600 mb-6">
              Ready to start working together? Get in touch!
            </p>
            <NavLink
              to="/contact"
              className="inline-block bg-gradient-to-r from-blue-600 to-pink-700 text-white font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition duration-300"
            >
              Contact Me
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
