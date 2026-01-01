import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";

export default function ContactInfo() {
  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Profile Image */}
      <div className="text-center">
        <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6 rounded-full overflow-hidden shadow-lg">
          <Image
            src="/image13.JPG"
            alt="Contact us for healing services"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Main Contact Heading */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Contact Jajja Salongo Ndawula
        </h2>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-4 sm:mb-6">
          Inquiries
        </h3>
      </div>

      {/* Contact Details */}
      <div className="space-y-3 sm:space-y-4">
        <div className="flex items-center space-x-3">
          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-gray-600 text-xs sm:text-sm">📧</span>
          </div>
          <a
            href="mailto:jajasalongondaula@gmail.com"
            className="text-base sm:text-lg text-gray-700 hover:text-gray-900 transition-colors"
          >
            jajasalongondaula@gmail.com
          </a>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-gray-600 text-xs sm:text-sm">📞</span>
          </div>
          <a
            href="https://wa.me/256774103036" // Updated to WhatsApp link
            className="text-base sm:text-lg text-gray-700 hover:text-gray-900 transition-colors"
          >
            +256774103036
          </a>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="pt-4 sm:pt-6">
        <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
          Follow Us
        </h4>
        <div className="flex justify-center sm:justify-start space-x-3 sm:space-x-4">
          <a
            href="#"
            className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </a>
          <a
            href="#"
            className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full flex items-center justify-center hover:from-pink-600 hover:to-orange-600 transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </a>
          <a
            href="#"
            className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
            aria-label="Twitter/X"
          >
            <Twitter className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </a>
        </div>
      </div>
    </div>
  );
}
