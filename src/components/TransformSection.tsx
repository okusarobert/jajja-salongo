import Link from "next/link";
import Image from "next/image";

export default function TransformSection() {
  return (
    <section className="relative bg-amber-400 py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/image2.JPG"
          alt="Transform your life with traditional healing"
          fill
          className="object-cover"
        />
      </div>
      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
            Transform Your Life
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed">
            Experience the power of natural remedies and spiritual healing with
            Jajja Salongo Ndawula. Unlock your potential and solve your problems
            today.
          </p>
          <Link href="/contact">
            <button className="inline-flex items-center px-8 sm:px-10 py-4 sm:py-5 bg-gray-900 text-white font-semibold text-lg sm:text-xl rounded-lg border-2 border-white hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Discover
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
