import React, { useState } from 'react';
import { FiUser, FiMail, FiArrowRight } from 'react-icons/fi';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // يمكنك إضافة منطق إرسال البيانات هنا
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-16 font-['Manrope']">
      {/* 1. Header Section */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#2D2D2D] mb-3">
          Reach out to us
        </h2>
        <p className="text-gray-400 text-sm md:text-base max-w-md mx-auto leading-relaxed">
          Ready to grow your brand? Let's connect and build something exceptional together.
        </p>
      </div>

      {/* 2. Form Section */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-2xl mx-auto">
        
        {/* Row 1: Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Your Name */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-[#383838]">
              Your name
            </label>
            <div className="relative flex items-center">
              <FiUser className="absolute left-4 text-gray-400 text-lg" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full border border-gray-200 rounded-xl py-3 pl-11 pr-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#5044E5] transition-colors"
                required
              />
            </div>
          </div>

          {/* Email ID */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-[#383838]">
              Email id
            </label>
            <div className="relative flex items-center">
              <FiMail className="absolute left-4 text-gray-400 text-lg" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full border border-gray-200 rounded-xl py-3 pl-11 pr-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#5044E5] transition-colors"
                required
              />
            </div>
          </div>

        </div>

        {/* Row 2: Message */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-[#383838]">
            Message
          </label>
          <textarea
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            className="w-full border border-gray-200 rounded-xl p-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#5044E5] transition-colors resize-none"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-start mt-2">
          <button
            type="submit"
            className="bg-[#5044E5] hover:bg-[#3B2FC1] text-white font-medium text-sm py-3 px-6 rounded-full flex items-center gap-2 transition-all active:scale-95 shadow-md"
          >
            <span>Submit</span>
            <FiArrowRight className="text-base" />
          </button>
        </div>

      </form>
    </section>
  );
};

export default ContactUs;