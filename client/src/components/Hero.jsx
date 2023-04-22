import React from "react";

const Hero = () => {
  return (
    <main className='flex flex-col font-cantarell font-bold gap-3 w-80'>
      <h2 className='text-[#7099FF] text-4xl w-full'>
        Escape into a world of movies, without leaving your couch!
      </h2>
      <button className='bg-[#FFA66F] text-white text-xl py-2 px-8 rounded-full w-9/12'>
        Get Started
      </button>
      <a href=''>Go To shop</a>
    </main>
  );
};

export default Hero;
