export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center bg-gradient-to-r from-secondary-color to-primary-color"
    >
      <div className="container mx-auto px-4 z-10">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fadeIn">Muthukumar Jayamurugan</h1>
          <h2 className="text-2xl md:text-3xl font-medium text-white mb-8 animate-fadeIn">Staff Software Engineer</h2>
          <p className="text-xl text-white mb-12 max-w-2xl mx-auto md:mx-0 animate-fadeIn">
            Over 10 years of extensive experience in leading the development and implementation of high-performance web
            applications.
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center md:justify-start animate-fadeIn">
            <a href="#contact" className="btn btn-primary">
              Contact Me
            </a>
            <a
              href="#projects"
              className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-colors duration-300"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
