import React from "react";

const Navbar = () => {
  return (
    <main className='font-cantarell flex flex-row justify-between items-center'>
      <section className='flex flex-row font-bold text-4xl'>
        <h1 className='text-[#2E68FA]'>Gallery</h1>
        <h1 className='text-[#87AAFF]'>Technologies</h1>
      </section>

      <section className='text-lg font-bold flex flex-row gap-4'>
        <div className='w-fit'>
          <h4 className='mt-4'>Home</h4>
          <hr className='bg-[#FFA66F] shadow-md shadow-[#494949] h-[4px] w-full rounded-sm' />
        </div>
        <h4 className='mt-4'>About</h4>
        <h4 className='mt-4'>Shop</h4>
        <h4 className='mt-4'>Sign In</h4>
        <button className='bg-[#FFA66F] px-4 py-2 rounded-md  text-white mr-2 mt-2'>
          Start Free Trail
        </button>
      </section>
    </main>
  );
};

export default Navbar;
