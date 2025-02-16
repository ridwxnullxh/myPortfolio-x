import React from "react";
import { NavLink } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="py-8 md:py-12 lg:py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center bg-gradient-to-br from-blue-600 to-pink-700 text-transparent bg-clip-text mb-12">
          Privacy Policy
        </h1>

        <div className="space-y-8 px-4">
          <section className="bg-white rounded-lg shadow-lg p-6 md:p-8 space-y-4">
            <h2 className="text-2xl font-semibold text-blue-600">
              1. Information Collection
            </h2>
            <p className="text-gray-600">
              I collect only necessary information required for project
              communication and delivery:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Name and contact information</li>
              <li>Project requirements and specifications</li>
              <li>Communication records</li>
              <li>Payment information</li>
            </ul>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-6 md:p-8 space-y-4">
            <h2 className="text-2xl font-semibold text-blue-600">
              2. Use of Information
            </h2>
            <p className="text-gray-600">
              Your information is used solely for:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Project communication and delivery</li>
              <li>Providing requested services</li>
              <li>Processing payments</li>
              <li>Maintaining project records</li>
            </ul>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-6 md:p-8 space-y-4">
            <h2 className="text-2xl font-semibold text-blue-600">
              3. Data Protection
            </h2>
            <p className="text-gray-600">
              I implement industry-standard security measures to protect your
              information:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Secure data storage and transmission</li>
              <li>Limited access to personal information</li>
              <li>Regular security updates and monitoring</li>
              <li>Encrypted communication channels</li>
            </ul>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-6 md:p-8 space-y-4">
            <h2 className="text-2xl font-semibold text-blue-600">
              4. Information Sharing
            </h2>
            <p className="text-gray-600">
              Your information is never sold or shared with third parties except
              when:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Required by law</li>
              <li>Necessary for project delivery (with your consent)</li>
              <li>Processing payments through secure payment providers</li>
            </ul>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-6 md:p-8 space-y-4">
            <h2 className="text-2xl font-semibold text-blue-600">
              5. Your Rights
            </h2>
            <p className="text-gray-600">You have the right to:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Access your personal information</li>
              <li>Request data correction or deletion</li>
              <li>Withdraw consent for data processing</li>
              <li>Receive a copy of your data</li>
            </ul>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-6 md:p-8 space-y-4">
            <h2 className="text-2xl font-semibold text-blue-600">
              6. Contact Information
            </h2>
            <p className="text-gray-600">
              For any privacy-related concerns or requests, please contact me
              through the contact form. I will respond to your request within 48
              hours.
            </p>
          </section>

          <div className="text-center pt-8">
            <p className="text-gray-600 mb-6">
              Have questions about your privacy? Let's discuss!
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

export default Privacy;
