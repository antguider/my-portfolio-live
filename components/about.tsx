export default function About() {
  const summary = `Over 10 years of extensive experience in leading the development and implementation of high-performance web applications
  across diverse industries, and ensuring user-friendly interfaces and robust functionality. Strong ability to create and maintain the
  technical architecture for front-end systems, ensuring scalability, performance & maintainability, and utilizing React, Redux,
  Node, Express, modern front-end technologies, frameworks & tools for front-end development. Engineered intricate web
  applications efficiently, upholding stringent quality benchmarks throughout the development process. Progressive history of
  delivering 3 major modules within budget and ahead of schedule which led to 15% increase in customer satisfaction ratings.
  Slashed 50% application load time by implementing caching strategies while enhancing overall performance.
  
  Effective leader with competency in guiding teams to achieve project milestones and deliver exceptional software solutions.
  Successfully guided the adoption of Agile methodologies, resulting in a 20% increase in team productivity and meeting 90%
  project deadlines. Conducted regular performance evaluations and career development plans, resulting in a 15% improvement
  in team satisfaction scores.`

  const contactInfo = {
    mobile: "+91-9094534141",
    email: "muthukumar.jayamurugan@gmail.com",
  }

  const competencies = [
    "Technical Leadership",
    "Architecture Design",
    "Front-end Development",
    "Project Management",
    "Agile Methodologies",
    "Coding and Testing",
    "Stakeholder Collaboration",
    "Performance Optimization",
    "User Experience",
  ]

  return (
    <section id="about" className="section bg-light-bg">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="mb-6 text-center">
                <div className="w-40 h-40 rounded-full mx-auto overflow-hidden mb-4">
                  <img
                    src="/placeholder.svg?height=160&width=160"
                    alt="Muthukumar Jayamurugan"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold">Muthukumar Jayamurugan</h3>
                <p className="text-gray-600">Staff Software Engineer</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center">
                  <i className="fas fa-phone text-primary-color mr-3"></i>
                  <a
                    href={`tel:${contactInfo.mobile}`}
                    className="text-gray-700 hover:text-primary-color transition-colors"
                  >
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-envelope text-primary-color mr-3"></i>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-gray-700 hover:text-primary-color transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-map-marker-alt text-primary-color mr-3"></i>
                  <span className="text-gray-700">Bangalore, India</span>
                </div>
              </div>

              <div className="mt-6 flex justify-center space-x-4">
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  className="text-gray-700 hover:text-primary-color transition-colors"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  className="text-gray-700 hover:text-primary-color transition-colors"
                  rel="noreferrer"
                >
                  <i className="fab fa-github fa-2x"></i>
                </a>
                <a href="#" className="text-gray-700 hover:text-primary-color transition-colors">
                  <i className="fas fa-file-pdf fa-2x"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="md:w-2/3">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-4">Professional Summary</h3>
              <p className="text-gray-700 whitespace-pre-line">{summary}</p>

              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4">Core Competencies</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {competencies.map((competency, index) => (
                    <div key={index} className="bg-light-bg rounded-lg p-3 text-center">
                      <span className="font-medium">{competency}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
