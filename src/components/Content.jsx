import React from 'react';
import ads_icon from '../assets/ads_icon.svg';
import content_icon from '../assets/content_icon.svg';
import Marketing_icon from '../assets/marketing_icon.svg';
import social_icon from '../assets/social_icon.svg';

const Content = () => {
  const Service = [
    {
      id: 1,
      image: ads_icon,
      title: "Advertising",
      Content: "We turn bold ideas into powerful digital solutions that connect, engage..."
    },
    {
      id: 2,
      image: Marketing_icon,
      title: "Content marketing",
      Content: "We turn bold ideas into powerful digital solutions that connect, engage and..."
    },
    {
      id: 3,
      image: content_icon,
      title: "Content writing",
      Content: "We turn bold ideas into powerful digital solutions that connect..."
    },
    {
      id: 4,
      image: social_icon,
      title: "Social media",
      Content: "We turn bold ideas into powerful digital solutions that connect, engage..."
    }
  ];

  return (
    <section className="container mx-auto py-20 px-4 font-['Manrope']">
      {/* 1. قسم العناوين */}
      <div className="flex flex-col items-center text-center max-w-xl mx-auto mb-12">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#3B3B3B]">
          How can we help?
        </h1>
        <p className="text-[16px] pt-3 text-[#8A8E9B] leading-relaxed">
          From strategy to execution, we craft digital solutions that move your business forward.
        </p>
      </div>

      {/* 2. شبكة الخدمات (Grid Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {Service.map((item) => (
          <div 
            key={item.id} 
            className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-2xl hover:border-[#4365FF] transition-shadow duration-200 flex flex-col items-start gap-4"
          >
            {/* الأيقونة */}
            <div className="w-12 h-12 flex items-center justify-center bg-[#F8F9FF] border-amber-50 rounded-full">
              <img src={item.image} alt={item.title} className="w-6 h-6" />
            </div>

            {/* عنوان الخدمة */}
            <h3 className="text-xl font-semibold text-[#3B3B3B]">
              {item.title}
            </h3>

            {/* الوصف */}
            <p className="text-sm text-[#8A8E9B] leading-relaxed">
              {item.Content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Content;