import VideoPlayer from "./VideoPlayer";

export default function VideoShowcase() {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Experience Our Healing Power
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Watch these videos to see the transformative power of traditional
            healing and spiritual guidance in action.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {/* Video 1 */}
          <div className="group">
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
              <VideoPlayer
                src="/video1.mp4"
                autoPlay
                muted
                loop
                className="w-full h-full"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2 text-center">
              Traditional Healing
            </h3>
            <p className="text-gray-600 text-center text-sm">
              Experience the ancient wisdom of traditional healing methods
            </p>
          </div>

          {/* Video 2 */}
          <div className="group">
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
              <VideoPlayer
                src="/video2.mp4"
                autoPlay
                muted
                loop
                className="w-full h-full"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2 text-center">
              Spell Casting
            </h3>
            <p className="text-gray-600 text-center text-sm">
              Witness the power of traditional spell casting techniques
            </p>
          </div>

          {/* Video 3 */}
          <div className="group">
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
              <VideoPlayer
                src="/video3.mp4"
                autoPlay
                muted
                loop
                className="w-full h-full"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2 text-center">
              Love Spells
            </h3>
            <p className="text-gray-600 text-center text-sm">
              See how love spells can restore relationships and bring happiness
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
