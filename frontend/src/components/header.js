import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className=" mx-auto px-4">
        <div className="flex h-16 items-center justify-between header-container">
          <Link to="/" className="flex items-center space-x-2 ">
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
              YourApp
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/features"
              className="text-sm font-medium text-gray-600 hover:text-purple-600"
            >
              Features
            </Link>
            <Link
              to="/docs"
              className="text-sm font-medium text-gray-600 hover:text-purple-600"
            >
              Documentation
            </Link>
            <Link
              to="/pricing"
              className="text-sm font-medium text-gray-600 hover:text-purple-600"
            >
              Pricing
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium text-gray-600 hover:text-purple-600"
            >
              About
            </Link>
            <Link
              to="/admin"
              className="text-sm font-medium text-gray-600 hover:text-purple-600"
            >
              Admin
            </Link>
            <button className="button button-outline mr-2">Sign In</button>
            <button className="button button-primary">Get Started</button>
          </nav>

          <button
            className="md:hidden button-ghost"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t">
          <nav className="flex flex-col space-y-4 p-4">
            <Link
              to="/features"
              className="text-sm font-medium text-gray-600 hover:text-purple-600"
            >
              Features
            </Link>
            <Link
              to="/docs"
              className="text-sm font-medium text-gray-600 hover:text-purple-600"
            >
              Documentation
            </Link>
            <Link
              to="/pricing"
              className="text-sm font-medium text-gray-600 hover:text-purple-600"
            >
              Pricing
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium text-gray-600 hover:text-purple-600"
            >
              About
            </Link>
            <button className="button button-outline w-full">Sign In</button>
            <button className="button button-primary w-full">
              Get Started
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
