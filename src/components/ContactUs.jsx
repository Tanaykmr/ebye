import React, { useState } from 'react';
import { motion } from 'framer-motion';

 // Import motion from framer-motion

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    query: ''
  });

  const { firstName, lastName, phoneNumber, email, query } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Here you can send the form data to your backend or handle it accordingly
      console.log(formData);
      // For example, if you're using Axios:
      // await axios.post('/api/contact', formData);
      alert('Form submitted successfully!');
    } catch (err) {
      console.error('Error submitting form: ', err);
      alert('Error submitting form. Please try again later.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-primary " id='contact'>
      <motion.div // Wrap the form div with motion.div for animation
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full space-y-4"
      >
        <h2 className="text-2xl font-semibold text-secondary">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <motion.div // Add animation to form elements
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <label className="block text-tertiary">First Name</label>
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-tertiary focus:outline-none focus:border-secondary"
              required
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <label className="block text-tertiary">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-tertiary focus:outline-none focus:border-secondary"
              required
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <label className="block text-tertiary">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-tertiary focus:outline-none focus:border-secondary"
              required
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <label className="block text-tertiary">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-tertiary focus:outline-none focus:border-secondary"
              required
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <label className="block text-tertiary">Your Query</label>
            <textarea
              name="query"
              value={query}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 rounded-md border border-tertiary focus:outline-none focus:border-secondary"
              required
            ></textarea>
          </motion.div>
          <motion.button
            type="submit"
            className="w-full bg-secondary text-white py-2 px-4 rounded-md hover:bg-pink transition-colors"
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }} 
          >
            Submit
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactUs;
