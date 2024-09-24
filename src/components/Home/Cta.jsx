import { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const CTA = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); //sucess or  error

  // Effect for clearing the success message after 10 seconds
  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
      }, 3000); // 10 seconds

      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  // Effect for clearing the error message after 10 seconds
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError("");
      }, 3000); // 10 seconds

      return () => clearTimeout(timer);
    }
  }, [error]);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // submit event of form subscription
  // fetch request to /api/subscriptions with email as payload
  // success: set successMessage, clear email, clear error
  // failure: set error, clear email, clear successMessage
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email) {
      setError("Email is required.");
    } else if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
      try {
        const response = await fetch("/api/subscriptions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });

        const result = await response.json();

        if (response.ok) {
          setSuccessMessage(result.message);
          setEmail("");
        } else {
          setError(result.message);
        }
      } catch (error) {
        setError("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 text-white bg-gradient-to-r from-fipch-orange to-fipch-chandan md:flex-row md:gap-8">
      <div className="flex flex-col items-center w-full mb-4 md:w-2/5 md:mb-0">
        <span className="mb-2 text-2xl font-semibold">Connect with us</span>
        <div className="flex space-x-7">
          <a
            href="https://facebook.com"
            target="_blank"
            className="text-4xl hover:text-gray-300"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            className="text-4xl hover:text-gray-300"
          >
            <FaYoutube />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            className="text-4xl hover:text-gray-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            className="text-4xl hover:text-gray-300"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center w-full md:w-3/5 md:items-start">
        <span className="mb-2 text-2xl font-semibold text-center md:mr-4 md:mb-4 md:text-left">
          Experience Jainism in Your Inbox
        </span>
        <form className="flex w-2/3" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email address to receive our newsletter"
            className="flex-grow p-2 text-gray-700 rounded-l-md focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-white text-fipch-orange rounded-r-md hover:bg-gray-100 focus:outline-none"
          >
            →
          </button>
        </form>

        {error && <p className="mt-2 text-red-700">{error}</p>}
        {successMessage && <p className="mt-2 text-white">{successMessage}</p>}
      </div>
    </div>
  );
};

export default CTA;
