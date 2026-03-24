// src/components/Contact.jsx
import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState({
    loading: false,
    success: null,
    error: null
  });

  // Auto‑dismiss success message after 4 seconds
  useEffect(() => {
    if (status.success) {
      const timer = setTimeout(() => {
        setStatus(prev => ({ ...prev, success: null }));
      }, 4000); // 4 seconds
      return () => clearTimeout(timer);
    }
  }, [status.success]);

  // Clear status when user starts typing
  const handleInputChange = () => {
    if (status.success || status.error) {
      setStatus({ loading: false, success: null, error: null });
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    setStatus({ loading: true, success: null, error: null });

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setStatus({ 
        loading: false, 
        success: 'Message sent successfully! I will get back to you soon.', 
        error: null 
      });
      formRef.current.reset(); // Clear the form
    })
    .catch((error) => {
      console.error('EmailJS error:', error);
      setStatus({ 
        loading: false, 
        success: null, 
        error: 'Failed to send message. Please try again later.' 
      });
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-2"> <span className="text-blue-600">Get</span> In Touch</h2>
          <p className="text-black-600 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-shadow-cyan-400 mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gray-600">
                  <FaEnvelope className="text-blue-600 text-xl" />
                  <span>aikotom3@gmail.com</span>
                </div>
                <div className="flex items-center gap-4 text-gray-600">
                  <FaPhone className="text-blue-600 text-xl" />
                  <span>+254 738552698</span>
                </div>
                <div className="flex items-center gap-4 text-gray-600">
                  <FaMapMarkerAlt className="text-blue-600 text-xl" />
                  <span>Nairobi, Kenya</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-red-800 mb-4">Connect with Me</h3>
              <div className="flex gap-6">
                <a href="https://github.com/tom4maeta" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors" aria-label="GitHub">
                  <FaGithub size={28} />
                </a>
                <a href="https://linkedin.com/in/tom-maeta254" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors" aria-label="LinkedIn">
                  <FaLinkedin size={28} />
                </a>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors" aria-label="Twitter">
                  <FaTwitter size={28} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form ref={formRef} onSubmit={sendEmail} className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-semibold text-blue-800 mb-6">Send a Message</h3>

            {/* Name Field */}
            <div className="mb-4">
              <label htmlFor="from_name" className="block text-black-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                required
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="Your name"
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label htmlFor="reply_to" className="block text-black-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="reply_to"
                name="reply_to"
                required
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="user21@example.com"
              />
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-black-700 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="Your message..."
              ></textarea>
            </div>

            {/* Status Messages */}
            {status.success && (
              <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg transition-opacity duration-300">
                {status.success}
              </div>
            )}
            {status.error && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
                {status.error}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status.loading}
              className={`w-full bg-blue-600 text-white font-semibold py-3 rounded-lg transition ${
                status.loading
                  ? 'opacity-70 cursor-not-allowed'
                  : 'hover:bg-blue-700 transform hover:-translate-y-0.5'
              }`}
            >
              {status.loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;