import { Heart, Share2, User, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">ISMT College</h3>
            <p className="text-gray-400">
              Empowering future leaders through quality education and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-white transition duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition duration-300">
                  Courses
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition duration-300"
              >
                <Mail size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition duration-300"
              >
                <Share2 size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition duration-300"
              >
                <User size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition duration-300"
              >
                <Heart size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            &copy; {currentYear} ISMT College. All rights reserved. | Design
            by v0
          </p>
        </div>
      </div>
    </footer>
  )
}
