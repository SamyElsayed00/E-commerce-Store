import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import profile from "../assets/profile.jpg";

const AboutUs = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center w-full">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Our Story
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We're passionate about bringing you the best selection of
              clothing, electronics, and everything in between.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-700 ${
                isMounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                At our core, we believe that everyone deserves access to quality
                products at fair prices. We've built our e-commerce platform to
                bring you a carefully curated selection of clothing,
                electronics, and lifestyle products that enhance your daily
                life.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Our team works tirelessly to ensure that every product meets our
                high standards for quality, functionality, and style. We're
                committed to creating a shopping experience that's enjoyable,
                convenient, and trustworthy.
              </p>
            </div>
            <div
              className={`transition-all duration-700 delay-300 ${
                isMounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 h-full">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 dark:text-blue-400 mb-2">
                      10K+
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">
                      Happy Customers
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 dark:text-blue-400 mb-2">
                      500+
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">
                      Products
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 dark:text-blue-400 mb-2">
                      50+
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">
                      Brands
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 dark:text-blue-400 mb-2">
                      24/7
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">
                      Support
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              These principles guide everything we do, from product selection to
              customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className={`bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm dark:shadow-md transition-all duration-500 ${
                isMounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Quality Assurance
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Every product in our catalog undergoes rigorous quality checks
                to ensure it meets our standards.
              </p>
            </div>

            <div
              className={`bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm dark:shadow-md transition-all duration-500 delay-200 ${
                isMounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-green-600 dark:text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Customer First
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our customers are at the heart of everything we do. Your
                satisfaction is our top priority.
              </p>
            </div>

            <div
              className={`bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm dark:shadow-md transition-all duration-500 delay-400 ${
                isMounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-purple-600 dark:text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Innovation
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We continuously improve our platform and product offerings to
                provide the best shopping experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl flex-col">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We're a diverse group of passionate individuals dedicated to
              making your shopping experience exceptional.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Samy Elsayed", role: "Founder & CEO", url: profile },
              { name: "Ziad Hany", role: "Head of Product" },
              { name: "Ziad Mohamed", role: "Tech Lead" },
              { name: "Mahomud Khater", role: "Customer Success" },
            ].map((member, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-sm dark:shadow-md transition-all duration-500 ${
                  isMounted
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className=" bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <img src={profile} alt="" className="" />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600 dark:bg-blue-800">
        <div className="container mx-auto max-w-7xl text-center gap-x-5">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Shopping?
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8 ">
            Explore our wide selection of clothing, electronics, and more. Find
            exactly what you're looking for.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-white text-blue-600 hover:bg-blue-50 font-medium rounded-lg px-6 py-3 transition-colors duration-200"
          >
            Shop Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
