import React, { useState } from 'react';
import Logo from '../assets/logo.svg';
import moon from '../assets/moon_icon.svg';
import arrow from '../assets/arrow_icon.svg';
import { HiMenu, HiX } from 'react-icons/hi'; // أضفنا أيقونات القائمة من react-icons

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const Services = [
        { id: 1, name: 'Home', link: '#' },
        { id: 2, name: 'Services', link: '#' },
        { id: 3, name: 'Our Work', link: '#' },
        { id: 4, name: 'Testimonials', link: '#' },
    ];

    return (
        <nav className="w-full bg-white relative border-b border-gray-100">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                
                {/* 1. اللوجو */}
                <div className="flex items-center">
                    <img src={Logo} alt="logo" className="h-7.25 w-auto" />
                </div>

                {/* 2. القائمة الرئيسية (تظهر فقط في شاشات الحواسيب md:) */}
                <div className="hidden md:block">
                    <ul className="flex items-center gap-8">
                        {Services.map((item) => (
                            <li key={item.id}>
                                <a 
                                    href={item.link} 
                                    className="text-[#475569] font-medium hover:text-[#5044E5] transition-colors duration-200"
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 3. الأيقونات والزر (تظهر في شاشات الحواسيب md:) */}
                <div className="hidden md:flex items-center gap-4">
                    <button className="w-10 h-10 border border-[#C4C4C4B2] rounded-full flex justify-center items-center hover:bg-[#F5F5F5] transition-transform active:scale-95 duration-150">
                        <img src={moon} alt="moon" className="w-4.5 h-4.5" />
                    </button>

                    <button className="bg-[#5044E5] text-white px-6 py-2.5 rounded-full flex items-center gap-2 hover:bg-[#3B2FC1] transition-all active:scale-95 duration-150 font-medium">
                        <span>Connect</span>
                        <img src={arrow} alt="arrow" className="w-4.5 h-4.5" />
                    </button>
                </div>

                {/* 4. زر المنيو الخاص بالهاتف (يظهر فقط في الهواتف) */}
                <div className="flex md:hidden items-center gap-3">
                    {/* زر المود في الهواتف */}
                    <button className="w-9 h-9 border border-[#C4C4C4B2] rounded-full flex justify-center items-center hover:bg-[#F5F5F5] transition-transform active:scale-95 duration-150">
                        <img src={moon} alt="moon" className="w-4 h-4" />
                    </button>

                    {/* زر فتح/إغلاق المنيو */}
                    <button 
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-700 text-2xl focus:outline-none"
                    >
                        {isOpen ? <HiX /> : <HiMenu />}
                    </button>
                </div>

            </div>

            {/* 📱 5. القائمة المنسدلة للهواتف (Mobile Menu) */}
            {isOpen && (
                <div className="md:hidden bg-white w-full border-t border-gray-100 px-6 py-4 flex flex-col gap-4 shadow-lg absolute top-full left-0 z-50">
                    <ul className="flex flex-col gap-4">
                        {Services.map((item) => (
                            <li key={item.id}>
                                <a 
                                    href={item.link} 
                                    onClick={() => setIsOpen(false)}
                                    className="text-[#475569] font-medium block py-1 hover:text-[#5044E5]"
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <button className="bg-[#5044E5] text-white w-full py-3 rounded-full flex justify-center items-center gap-2 hover:bg-[#3B2FC1] font-medium mt-2">
                        <span>Connect</span>
                        <img src={arrow} alt="arrow" className="w-4.5 h-4.5" />
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;