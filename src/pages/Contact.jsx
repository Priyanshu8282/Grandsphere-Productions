import React, { useState } from "react";
import { motion } from "framer-motion"; // For animations
import emailjs from "emailjs-com"; // For sending emails
import { toast, Toaster } from "react-hot-toast"; // For toast notifications

function Contact() {
  const interests = [
    "Creative Services",
    "Digital Marketing",
    "Event Management",
    "Print, POSM & Promo Product Sourcing",
    "Retail Channel Management",
    "Video Production",
  ];

  const [selectedInterests, setSelectedInterests] = useState([]);

  const toggleInterest = (interest) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_die9307", // Replace with your EmailJS service ID
        "template_qk1e32a", // Replace with your EmailJS template ID
        e.target,
        "zWaJxBEjFPbt12kal" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!"); // Success toast
        },
        (error) => {
          toast.error("Failed to send message. Please try again."); // Error toast
        }
      );

    e.target.reset(); // Reset the form after submission
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} /> {/* Toast container */}
      <motion.section
        className="py-16 bg-white text-black"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          {/* Heading */}
          <motion.h2
            className="text-4xl font-extrabold text-center mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contact Us
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We'd love to hear from you! Please fill out the form below.
          </motion.p>

          {/* Interests Section */}
          <motion.div
            className="mb-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg font-semibold mb-4">I'm interested in</p>
            <div className="flex flex-wrap justify-center gap-3">
              {interests.map((interest, index) => (
                <motion.button
                  key={index}
                  className={`px-4 py-2 border rounded-full transition-all ${
                    selectedInterests.includes(interest)
                      ? "bg-black text-white"
                      : "border-black text-black hover:bg-black hover:text-white"
                  }`}
                  onClick={() => toggleInterest(interest)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {interest}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Form Section */}
          <motion.div
            className="p-8 rounded-lg shadow-lg max-w-2xl mx-auto border border-gray-200"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <form className="space-y-6" onSubmit={sendEmail}>
              {/* Input Fields */}
              {[
                { id: "name", label: "Name", type: "text" },
                { id: "email", label: "Email", type: "email" },
                { id: "organization", label: "Organization", type: "text" },
                { id: "contact", label: "Contact no.", type: "tel" },
              ].map(({ id, label, type }) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <label htmlFor={id} className="block text-sm font-medium">
                    {label} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type={type}
                    id={id}
                    name={id}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-black focus:border-black"
                    required
                  />
                </motion.div>
              ))}

              {/* How Did You Hear About Us */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <label htmlFor="hear-about" className="block text-sm font-medium">
                  How did you hear about us? <span className="text-red-500">*</span>
                </label>
                <select
                  id="hear-about"
                  name="hear_about"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-black focus:border-black"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="client">I’m a former GP client</option>
                  <option value="employee">I’m a former GP employee</option>
                  <option value="referral">Referral</option>
                  <option value="google">Google</option>
                  <option value="event">Event</option>
                  <option value="linkedIn">LinkedIn</option>
                </select>
              </motion.div>

              {/* Tell Me More Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <label htmlFor="tell-me-more" className="block text-sm font-medium">
                  Tell us more about your needs or project
                </label>
                <textarea
                  id="tell-me-more"
                  name="message"
                  rows="4"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-black focus:border-black"
                  placeholder="Provide additional details here..."
                ></textarea>
              </motion.div>

              {/* Consent Checkbox */}
              <motion.div
                className="flex items-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <input
                  type="checkbox"
                  id="consent"
                  className="h-4 w-4 text-black border-gray-300 rounded focus:ring-black"
                  required
                />
                <label htmlFor="consent" className="ml-2 text-sm">
                  I consent to the collection and use of my information as stated above.{" "}
                  <span className="text-red-500">*</span>
                </label>
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full px-6 py-3 text-white bg-black hover:bg-gray-800 rounded-lg shadow-lg transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}

export default Contact;