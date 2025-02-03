import React from "react";
import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-50 border-t footer-container">
      <div className=" mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sub-footer-container">
          <div>
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 mb-4">
              YourApp
            </div>
            <p className="text-gray-600">
              Building modern web applications with React and ASP.NET Core
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/features"
                  className="text-gray-600 hover:text-purple-600"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/docs"
                  className="text-gray-600 hover:text-purple-600"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-gray-600 hover:text-purple-600"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/releases"
                  className="text-gray-600 hover:text-purple-600"
                >
                  Releases
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-purple-600"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-600 hover:text-purple-600"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-gray-600 hover:text-purple-600"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-purple-600"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-600 hover:text-purple-600"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-gray-600 hover:text-purple-600"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  to="/security"
                  className="text-gray-600 hover:text-purple-600"
                >
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              &copy; {new Date().getFullYear()} YourApp. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 footer-icons">
              <a
                href="https://github.com"
                className="text-gray-600 hover:text-purple-600"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-600 hover:text-purple-600"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-600 hover:text-purple-600"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
