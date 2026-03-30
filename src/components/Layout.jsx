import { Outlet } from "react-router";
import { Navbar } from "./Navbar";
import { Link } from "react-router";
import { PenSquare, Mail } from "lucide-react";
import { SiFacebook, SiGithub, SiX } from "@icons-pack/react-simple-icons";
import { LinkedInIcon } from "./icons/linkedin";
 
export function Layout() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
       
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-1">
              <Link to="/" className="flex items-center space-x-2 mb-4 group">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 rounded-lg group-hover:shadow-lg transition-shadow">
                  <PenSquare className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-semibold text-gray-900">BlogSpace</span>
              </Link>
              <p className="text-gray-600 text-sm mb-4">
                Your platform for discovering and sharing amazing stories and ideas.
              </p>
              <div className="flex items-center gap-3">
                <a href="#" className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  <SiX className="h-4 w-4" />
                </a>
                <a href="#" className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  <SiFacebook className="h-4 w-4" />
                </a>
                <a href="#" className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  <LinkedInIcon className="h-4 w-4" />
                </a>
                <a href="#" className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  <SiGithub className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    Our Team
                  </a>
                </li>
                <li>
                  <Link to="/create" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    Write for Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    Development
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    Design
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    Technology
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    Performance
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center gap-1">
                    <Mail className="h-3 w-3" />
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-600">
                &copy; {currentYear} BlogSpace. All rights reserved.
              </p>
              <p className="text-sm text-gray-600">
                Built with <span className="text-red-500">❤</span> using React, TypeScript & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
