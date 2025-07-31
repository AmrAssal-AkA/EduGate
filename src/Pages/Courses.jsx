import React from 'react'
import Button from '../component/Button'
import { Link } from 'react-router-dom'

const courses = [
  {
    id: 1,
    title: "Introduction to React",
    description: "Learn the fundamentals of React, including components, hooks, and state management.",
    link : "/introinReact"
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    description: "Deep dive into ES6+, async programming, and advanced JS concepts.",
    link : "/advancedJavaScript"
  },
  {
    id: 3,
    title: "Web Design",
    description: "Master modern web design with Tailwind CSS and responsive layouts.",
    link : "#"
  },
  {
    id: 4,
    title: "Node.js for Beginners",
    description: "Get started with Node.js, building RESTful APIs and server-side applications.",
    link : "#"
  },
  {
    id: 5,
    title: "Full Stack Development",
    description: "Combine front-end and back-end skills to build complete web applications.",
    link : "#"
  },
  {
    id: 6,
    title: "Data Visualization",
    description: "Learn how to visualize data using libraries like D3.js and Chart.js.",
    link : "#"
  }, 
  {
    id: 7,
    title: "Machine Learning Basics",
    description: "An introduction to machine learning concepts and algorithms using Python.",
    link : "#"
  },
  {
    id: 8,
    title: "DevOps Essentials",
    description: "Understand the principles of DevOps, CI/CD, and cloud deployment.",
    link : "#"
  },
  {
    id: 9,
    title: "Cybersecurity Fundamentals",
    description: "Learn the basics of cybersecurity, including threats, vulnerabilities, and defenses.",
    link : "#"
  },
  {
    id: 10,
    title: "Game Development with Unity",
    description: "Create interactive games using Unity and C#. Learn game mechanics, physics, and AI.",
    link : "#"
  }
]

function Courses() {
  return (
    <div className="py-12 bg-gray-50 min-h-screen mt-10">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Courses</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {courses.map(course => (
            <div key={course.id} className="bg-white rounded-lg shadow-md p-6 flex flex-col">
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4 flex-1">{course.description}</p>
              <Link to={course.link} className="text-blue-600 hover:underline">
              <Button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                View Details
              </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Courses