export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-bg text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Muthukumar Jayamurugan</h3>
            <p className="text-gray-400">Staff Software Engineer</p>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://linkedin.com/"
              target="_blank"
              className="text-white hover:text-primary-color transition-colors"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              className="text-white hover:text-primary-color transition-colors"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              className="text-white hover:text-primary-color transition-colors"
              rel="noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        <hr className="border-gray-700 my-6" />

        <div className="text-center text-gray-400">
          <p>&copy; {currentYear} Muthukumar Jayamurugan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
