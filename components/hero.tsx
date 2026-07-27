import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen bg-gradient-to-r from-blue-600 to-blue-800 pt-16 flex items-center justify-center overflow-hidden"
    >
      {/* Background image effect */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1200&h=900&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
          Welcome to ISMT College
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100 text-balance">
          Empowering Future Leaders Through Quality Education and Innovation
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-6 text-lg"
          >
            Apply Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-6 text-lg"
          >
            Explore Courses
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce text-white">
          <svg
            className="w-6 h-6 mx-auto"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  )
}
