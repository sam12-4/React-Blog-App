import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-300 to-blue-500 p-5">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between md:items-center">
        <h1 className="text-white text-2xl font-bold mb-4 md:mb-0">My Next.js Blog App </h1>
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          <li><a href="#" className="text-white hover:text-gray-200">Home</a></li>
          <li><a href="#" className="text-white hover:text-gray-200">About</a></li>
          <li><a href="#" className="text-white hover:text-gray-200">Services</a></li>
          <li><a href="#" className="text-white hover:text-gray-200">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
