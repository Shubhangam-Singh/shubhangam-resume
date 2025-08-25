import React from "react";

const projects = [
  {
    name: "Parking Lot Management",
    description: "A basic parking lot management system using OOP concepts.",
    tech: "C++",
    link: "https://github.com/Shubhangam-Singh/Parking-Lot-Management-Project"
  },
  {
    name: "YOLO Logo Detection",
    description: "Identifies a company from the logo and checks if it’s listed on the stock exchange.",
    tech: "Python, YOLO",
    link: "https://github.com/Shubhangam-Singh/Yolo_Logo_Detection"
  },
  {
    name: "Logitrack System",
    description: "Logistics tracking application for efficient resource management.",
    tech: "Python",
    link: "https://github.com/Shubhangam-Singh/logitrack-system"
  },
  {
    name: "Oscillatory System",
    description: "A dynamic oscillatory system with interactive animations for web pages.",
    tech: "JavaScript",
    link: "https://github.com/Shubhangam-Singh/Oscillatory-System"
  }
];

const Projects = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-600 mb-2">{project.description}</p>
              <p className="text-sm text-gray-500 mb-4">
                <strong>Tech:</strong> {project.tech}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
