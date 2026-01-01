export default function GoogleMap() {
  return (
    <div className="space-y-8">
      {/* Location Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Our Locations</h3>
          <p className="text-lg text-gray-700">Uganda Wakiso District</p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Get In Touch</h3>
          <p className="text-lg text-gray-700">9am - 6pm</p>
        </div>
      </div>

      {/* Google Maps Embed */}
      <div className="relative">
        <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
          {/* Map Placeholder - Replace with actual Google Maps embed */}
          <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center">
            <div className="text-center text-gray-600">
              <div className="text-6xl mb-4">🗺️</div>
              <h3 className="text-2xl font-bold mb-2">Hilltop St</h3>
              <p className="text-lg mb-4">Springfield, MA 01128</p>
              <div className="flex space-x-4 justify-center">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                  <span>Directions</span>
                  <span>→</span>
                </button>
                <a 
                  href="#" 
                  className="text-blue-600 hover:text-blue-700 underline font-medium"
                >
                  View larger map
                </a>
              </div>
            </div>
          </div>
          
          {/* Map Controls Placeholder */}
          <div className="absolute top-4 right-4 flex flex-col space-y-2">
            <button className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors">
              <span className="text-gray-600 font-bold">+</span>
            </button>
            <button className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors">
              <span className="text-gray-600 font-bold">−</span>
            </button>
          </div>
          
          {/* Google Logo Placeholder */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <div className="bg-white px-3 py-1 rounded-lg shadow-md">
              <span className="text-gray-600 text-sm font-medium">Google</span>
            </div>
          </div>
        </div>
        
        {/* Map Data Copyright */}
        <div className="text-right mt-2">
          <p className="text-xs text-gray-500">
            Map data ©2025 Google Terms Report a map error
          </p>
        </div>
      </div>
    </div>
  )
}
