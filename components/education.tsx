interface Education {
  degree: string
  institution: string
  year: string
}

export default function Education() {
  const education: Education[] = [
    {
      degree: "B.E., Computer Science and Engineering",
      institution: "Chennai",
      year: "2010",
    },
  ]

  return (
    <section id="education" className="section bg-light-bg">
      <div className="container">
        <h2 className="section-title">Education & Certifications</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="text-2xl font-bold text-primary-color mb-6">Education</h3>

            {education.map((edu, index) => (
              <div key={index} className="mb-4">
                <div className="flex items-start">
                  <i className="fas fa-graduation-cap text-primary-color mr-3 mt-1"></i>
                  <div>
                    <h4 className="text-lg font-semibold">{edu.degree}</h4>
                    <p className="text-gray-700">{edu.institution}</p>
                    <p className="text-gray-600">{edu.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="card">
            <h3 className="text-2xl font-bold text-primary-color mb-6">Certifications</h3>

            <div className="text-gray-700">
              <p>Certifications section can be updated with your professional certifications.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
