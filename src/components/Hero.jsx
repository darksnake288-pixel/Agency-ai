import React from 'react';
import GroupProfile from '../assets/group_profile.png';
import bgimage from '../assets/bgImage1.png';
import image from '../assets/hero_img.png';

const Hero = () => {
  return (
    /* أضفنا relative لضبط العناصر المطلقة داخله بشكل صحيح */
    <section className="relative container mx-auto flex flex-col items-center justify-center py-12 px-4 text-center overflow-hidden">
      
      {/* 1. الصورة الخلفية (تغطي الخلفية بالكامل وتكون بالخلف زـ z-0) */}
      <div className="absolute inset-0 w-full h-full flex justify-center -z-10 pointer-events-none">
        <img 
          src={bgimage} 
          alt="background overlay" 
          className="w-full h-full object-cover opacity-60" 
        />
      </div>

      {/* 2. شارة الثقة (Badge) */}
      <div className="z-10 flex items-center gap-3 rounded-full py-2 px-4 border border-gray-100 shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-white mb-6">
        <img src={GroupProfile} alt="group-profile" className="w-24 h-auto object-contain" />
        <h2 className="text-sm font-semibold text-gray-700">
          Trusted by <span className="text-[#5044E5]">10K</span> People
        </h2>
      </div>

      {/* 3. العنوان الرئيسي */}
      <h1 className="z-10 text-4xl md:text-6xl font-['Manrope'] font-semibold text-[#383838] leading-tight max-w-3xl mx-auto mb-4">
        Turning imagination into <span className="text-[#5B7CFA]">digital</span> impact.
      </h1>

      {/* 4. النص الوصفي الفرعي */}
      <p className="z-10 text-gray-500 text-sm md:text-base max-w-lg leading-relaxed mb-8 mx-auto">
        Creating meaningful connections and turning big ideas into interactive digital experiences.
      </p>

      {/* 5. الصورة الرئيسية التوضيحية (hero_img) */}
      <div className="z-10 w-full max-w-5xl flex justify-center mt-4">
        <img 
          src={image} 
          alt="Hero visual" 
          className="w-full h-auto object-cover rounded-[45px] shadow-2xl"
        />
      </div>

    </section>
  );
};

export default Hero;