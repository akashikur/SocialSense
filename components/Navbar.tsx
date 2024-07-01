// components/Navbar.tsx
import React from 'react';
import { FaHome, FaCalendarAlt, FaChartBar, FaUser, FaInbox, FaPalette } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="flex flex-col w-64 h-screen bg-gray-100 p-4">
      <div className="flex items-center justify-center h-16 mb-6">
        <div className="text-xl font-bold">Logo Here</div>
      </div>
      <nav className="flex-1">
        <ul className="space-y-2">
          <li className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-md">
            <FaHome className="mr-3" />
            <span>Home</span>
          </li>
          <li className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-md">
            <FaCalendarAlt className="mr-3" />
            <span>Schedule</span>
          </li>
          <li className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-md">
            <FaChartBar className="mr-3" />
            <span>Recommendation</span>
          </li>
          <Link href="/profile">
          <li className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-md">
            <FaUser className="mr-3" />
            <span>Profile</span>
          </li>
          </Link>
          <li className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-md">
            <FaInbox className="mr-3" />
            <span>Inbox</span>
            
          </li>
          <Link href="/">
          <li className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-md">
            <FaPalette className="mr-3" />
            <span>Themes</span>
          </li>
          </Link>
        </ul>
      </nav>
      <div className="mt-auto">
        <li className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-md">
          <FiSettings className="mr-3" />
          <span>Settings</span>
        </li>
      </div>
    </div>
  );
};

export default Navbar;
