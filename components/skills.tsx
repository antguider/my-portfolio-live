"use client"

import { useState } from "react"

interface Skill {
  name: string
  level: number
  category: string
}

export default function Skills() {
  const skills: Skill[] = [
    { name: "React", level: 95, category: "frontend" },
    { name: "Redux", level: 90, category: "frontend" },
    { name: "JavaScript", level: 95, category: "frontend" },
    { name: "TypeScript", level: 90, category: "frontend" },
    { name: "jQuery", level: 85, category: "frontend" },
    { name: "AngularJS", level: 80, category: "frontend" },
    { name: "KnockoutJS", level: 75, category: "frontend" },
    { name: "ExtJS", level: 70, category: "frontend" },
    { name: "DevExpress", level: 75, category: "frontend" },
    { name: "HTML", level: 95, category: "frontend" },
    { name: "CSS", level: 90, category: "frontend" },
    { name: "SASS", level: 85, category: "frontend" },
    { name: "Node", level: 85, category: "backend" },
    { name: "Express", level: 80, category: "backend" },
    { name: "Next", level: 85, category: "backend" },
    { name: "AWS", level: 75, category: "backend" },
    { name: "Jest", level: 85, category: "testing" },
    { name: "Playwright", level: 80, category: "testing" },
    { name: "Webpack", level: 85, category: "tools" },
    { name: "Git", level: 90, category: "tools" },
    { name: "Rally", level: 80, category: "tools" },
    { name: "Azure DevOps", level: 85, category: "tools" },
    { name: "Figma", level: 75, category: "tools" },
    { name: "Jira", level: 85, category: "tools" },
  ]

  const categories = [
    { id: "all", name: "All" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "testing", name: "Testing" },
    { id: "tools", name: "Tools & Others" },
  ]

  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredSkills =
    selectedCategory === "all" ? skills : skills.filter((skill) => skill.category === selectedCategory)

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>

        <div className="mb-8 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                selectedCategory === category.id ? "bg-primary-color text-white" : "bg-gray-200 text-gray-800"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div key={index} className="card">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">{skill.name}</h3>
                <span className="text-sm font-medium">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-primary-color h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
