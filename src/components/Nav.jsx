import React, { useEffect, useState } from 'react';
import 'remixicon/fonts/remixicon.css';
import '../App.css'
const Nav = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
const categories = [
  "All",
  "Music",
  "Movies",
  "Mixes",
  "TSeries",
  "Mithoon",
  "Arijit Singh",
  "Neha Kakkar",
  "Badshah",
  "Honey Singh",
  "Shreya Ghoshal",
  "Atif Aslam",
  "KK",
  "Sonu Nigam",
  "Darshan Raval"
];
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 50) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScroll]);
  return (
    <div
      className={`w-full bg-[#000000eb] fixed top-0 left-0 z-50 transition-transform duration-600 ${
        showNav ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <ul className='text-white flex items-center py-2 px-3 justify-between text-xl'>
        <li className='text-2xl flex justify-center items-center'>
          <i className="ri-youtube-fill text-[#ff0033] text-3xl"></i>
          <span className='-tracking-[1.5px] text-[17px] font-bold'>YouTube</span>
        </li>
        <div className='flex items-center justify-center gap-3'>
          <li><i className="ri-search-line text-gray-300 text-xl"></i></li>
          <li><i className="ri-vidicon-line text-gray-300"></i></li>
          <div className='h-7 w-7 rounded-full overflow-hidden '>
          <img
            className='w-full object-cover'
            src="https://yt3.ggpht.com/AsmRGpc4LgAWj9NwP-yYZxqgPqQD8nb39YScckHJGT99f_VLWnxx11jixRKWI-jsuDOboDYjZI0=s88-c-k-c0x00ffffff-no-rj"
            alt=""
          />
        </div>

        </div>
      </ul>
       <div className="flex gap-2 overflow-x-auto flex-nowrap no-scrollbar">
      {categories.map((cat, index) => (
        <button 
          key={index} 
          className="bg-[#272727] py-1.5 px-5 rounded-md text-white flex items-center justify-center h-10 flex-shrink-0"
        >
          {cat}
        </button>
      ))}
    </div>  </div>
);  
};

export default Nav;
