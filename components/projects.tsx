interface Project {
  title: string
  environment: string
  description: string
  responsibilities: string[]
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "APM",
      environment: "ReactJS, Redux, Knockout, Typescript, NodeJS & AWS",
      description:
        "APM comprises a suite of software and services aimed at optimizing asset performance. It enhances asset reliability and availability while optimizing maintenance costs, reducing operational risks, and lowering total cost of ownership.",
      responsibilities: [
        "Developed and maintained the technical architecture.",
        "Collaborated with stakeholders to align project requirements and constraints.",
        "Recommended technologies and tools to support development and meet objectives.",
        "Provided technical leadership through code reviews and mentoring.",
        "Leading frontend development and micro frontends.",
      ],
    },
    {
      title: "MSA Life Science",
      environment: "AngularJS, NodeJS, REST, Jenkins, ExpressJS and Docker",
      description:
        "MSA Life Science is a transplant management system that consolidates recipient and donor data across the transplant process. It integrates data from various sources to provide a comprehensive clinical overview for each patient's journey.",
      responsibilities: [
        "Initiated and developed the project from start.",
        "Implemented key components and functionalities.",
        "Optimized product performance and usability.",
        "Introduced unit and end-to-end testing.",
        "Managed CI/CD pipeline for smooth integration and deployment.",
      ],
    },
    {
      title: "ACSS",
      environment: "JavaScript, HTML, RESTful APIs and ExtJs",
      description:
        "ACSS is an Automated Customer Support System utilized by 40,000 Verizon call center representatives to handle customer queries. It involves migrating an existing desktop application to a new web-based version.",
      responsibilities: [
        "Contributed to all phases of the development life cycle, including software evaluations and user support.",
        "Provided application support and troubleshooting for enhanced customer service.",
      ],
    },
    {
      title: "eResearch",
      environment: "JavaScript, jQuery, CSS, and HTML",
      description:
        "eResearch serves 20 leading medical institutions featured in the U.S. News and World Report, offering a flexible clinical research management platform. It integrates financial, administrative, and clinical research activities to streamline operations and improve data accuracy.",
      responsibilities: [
        "Developed modules for tense management.",
        "Integrated search engine capabilities into other applications.",
      ],
    },
  ]

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-primary-color mb-2">{project.title}</h3>

              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-1">Environment:</h4>
                <p className="text-gray-700">{project.environment}</p>
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-1">Description:</h4>
                <p className="text-gray-700">{project.description}</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-1">Responsibilities:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {project.responsibilities.map((responsibility, i) => (
                    <li key={i} className="text-gray-700">
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
