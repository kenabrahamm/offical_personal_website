"use client";

import { Separator } from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';
import { ModeToggle } from './mode-toggle';

import React from 'react';

export function Navbar() {
  return (
    <nav className=" shadow-sm mt-6">
      <div className="max-w-7xl mx-auto lg:">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-semibold">
              Ken Abraham
            </Link>
          </div>
          <div className="hidden sm:flex sm:space-x-8">
            <Link href="/" className="border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-100 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
              Home
            </Link>
            
            <ModeToggle/>
            {/* Add more navigation items as needed */}
          </div>
        </div>
      </div>
    </nav>
  );
}