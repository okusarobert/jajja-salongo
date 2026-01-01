import { Facebook, Instagram, Twitter, MessageCircle } from "lucide-react";

interface FooterProps {
  locale: string;
}

// Safe translation function for Footer
async function getFooterTranslations(locale: string) {
  try {
    const messages = await import(`../../messages/${locale}.json`);
    return messages.default.footer;
  } catch {
    console.log(`Footer translations not found for locale: ${locale}, falling back to English`);
    try {
      const messages = await import(`../../messages/en.json`);
      return messages.default.footer;
    } catch {
      console.log('English footer translations not found, using fallback text');
      return {
        contact: 'Contact',
        socials: 'Socials',
        helpButton: 'Need Help? Chat with us',
        copyright: '© 2018 Jajja Salongo Ndawula. All rights reserved.'
      };
    }
  }
}

export default async function Footer({ locale }: FooterProps) {
  const footer = await getFooterTranslations(locale);
  return (
    <footer className="bg-gray-800 text-white py-12 sm:py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {/* Contact Information */}
          <div className="text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
              {footer.contact}
            </h3>
            <div className="space-y-2 sm:space-y-3">
              <p className="text-gray-300 text-base sm:text-lg">
                jajasalongondaula@gmail.com
              </p>
              <p className="text-gray-300 text-base sm:text-lg">
                +256774103036
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
              {footer.socials}
            </h3>
            <div className="flex justify-center md:justify-start space-x-4 sm:space-x-6">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors p-2 hover:bg-gray-700 rounded-lg"
              >
                <Facebook size={24} className="sm:w-7 sm:h-7" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors p-2 hover:bg-gray-700 rounded-lg"
              >
                <Instagram size={24} className="sm:w-7 sm:h-7" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors p-2 hover:bg-gray-700 rounded-lg"
              >
                <Twitter size={24} className="sm:w-7 sm:h-7" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors p-2 hover:bg-gray-700 rounded-lg"
              >
                <MessageCircle size={24} className="sm:w-7 sm:h-7" />
              </a>
            </div>
          </div>

          {/* Help Button */}
          <div className="flex flex-col items-center md:items-end">
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-6">
              <a 
                href="https://wa.me/256774103036" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-gray-800 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-md text-sm sm:text-base inline-block"
              >
                {footer.helpButton}
              </a>
              <a 
                href="https://wa.me/256774103036" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
              >
                <span className="text-white text-xl sm:text-2xl font-bold">
                  W
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-base sm:text-lg">
            {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
