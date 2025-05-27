interface Experience {
  title: string
  company: string
  location: string
  period: string
  responsibilities: string[]
}

export default function Experience() {
  const experiences: Experience[] = [
    {
      title: "Staff Software Engineer",
      company: "GE Vernova",
      location: "Bangalore",
      period: "May 2018 – Present",
      responsibilities: [
        "Enhancing software development with Agile to boost efficiency and quality.",
        "Mentoring junior engineers to promote innovation and technical excellence.",
        "Collaborating on technical strategies and product roadmaps with cross-functional teams.",
        "Conducting code reviews and enforcing coding best practices and architectural guidelines.",
        "Leading the design and implementation of scalable software solutions aligned with business goals.",
      ],
    },
    {
      title: "Technical Lead",
      company: "Accion Labs",
      location: "Bangalore",
      period: "Jan 2015 – Apr 2018",
      responsibilities: [
        "Successfully led software project from inception to delivery, meeting deadlines and budgets.",
        "Mentored and developed software engineers, boosting their skills and growth.",
        "Defined and implemented technical strategies and architectural designs aligned with business goals.",
        "Advised stakeholders on technology choices and solutions.",
        "Promoted continuous learning and improvement to enhance team productivity and delivery.",
      ],
    },
    {
      title: "Software Engineer",
      company: "Verizon",
      location: "Chennai",
      period: "Oct 2013 – Jan 2015",
      responsibilities: [
        "Contributed to all phases of the development life cycle, including software evaluations and user support.",
        "Provided application support and troubleshooting for enhanced customer service.",
      ],
    },
  ]

  return (
    <section id="experience" className="section bg-light-bg">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-color"></div>

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`relative flex flex-col md:flex-row items-center md:justify-between ${
                  i % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-primary-color border-4 border-white"></div>

                {/* Content */}
                <div className="md:w-5/12 mb-8 md:mb-0">
                  <div className="card">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-primary-color">{exp.title}</h3>
                      <div className="flex items-center text-gray-600 mt-1">
                        <i className="fas fa-building text-sm mr-1"></i>
                        <span>
                          {exp.company}, {exp.location}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-600 mt-1">
                        <i className="fas fa-calendar-alt text-sm mr-1"></i>
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {exp.responsibilities.map((responsibility, j) => (
                        <li key={j} className="text-gray-700">
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Empty space for timeline alignment */}
                <div className="md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
