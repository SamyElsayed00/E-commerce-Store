import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you for your message! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center w-full">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Get In Touch
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Have questions about our products or need assistance? We're here
              to help you with anything you need.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div
              className={`transition-all duration-700 ${
                isMounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white transition-colors duration-200"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white transition-colors duration-200"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white transition-colors duration-200"
                  >
                    <option value="">Select a subject</option>
                    <option value="product-inquiry">Product Inquiry</option>
                    <option value="order-support">Order Support</option>
                    <option value="shipping">Shipping Question</option>
                    <option value="returns">Returns & Exchanges</option>
                    <option value="general">General Question</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white transition-colors duration-200"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-blue-400 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div
              className={`transition-all duration-700 delay-300 ${
                isMounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
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
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      Our Address
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      123 Commerce Street
                      <br />
                      Suite 100
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
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
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      Phone Number
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      +1 (555) 123-4567
                      <br />
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Mon-Fri from 8am to 6pm
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0">
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      Email Address
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      support@yourstore.com
                      <br />
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        We reply within 24 hours
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Quick Help
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      Order Tracking
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Track your order in real-time from your account dashboard.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      Returns & Exchanges
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      We offer 30-day returns on most items. See our return
                      policy for details.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      Shipping Info
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Free shipping on orders over $50. Express delivery
                      available.
                    </p>
                  </div>
                </div>
                <Link
                  to="/faq"
                  className="inline-block mt-4 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-sm transition-colors duration-200"
                >
                  Visit FAQ Page →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Customer Support Hours
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our dedicated support team is available to assist you during these
              hours.
            </p>
          </div>

          <div className="max-w-md mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-sm dark:shadow-md p-6">
            <div className="space-y-4">
              {[
                { day: "Monday - Friday", hours: "8:00 AM - 9:00 PM EST" },
                { day: "Saturday", hours: "9:00 AM - 6:00 PM EST" },
                { day: "Sunday", hours: "10:00 AM - 4:00 PM EST" },
              ].map((schedule, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700 last:border-b-0"
                >
                  <span className="font-medium text-gray-900 dark:text-white">
                    {schedule.day}
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    {schedule.hours}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p className="text-sm text-blue-700 dark:text-blue-300 text-center">
                <strong>Emergency Support:</strong> Available 24/7 for
                order-related issues
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-orange-600 dark:bg-blue-800">
        <div className="container mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Can't Find What You Need?
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Check out our comprehensive FAQ section or browse our help center
            for instant answers to common questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/faq"
              className="inline-block bg-white text-blue-600 hover:bg-blue-50 font-medium rounded-lg px-6 py-3 transition-colors duration-200"
            >
              Visit FAQ
            </Link>
            <Link
              to="/shop"
              className="inline-block border-2 border-white text-white hover:bg-white hover:text-blue-600 font-medium rounded-lg px-6 py-3 transition-colors duration-200"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
