import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Church Management System',
      description: 'A modern church management admin dashboard with security focus, built with React,Tailwind CSS,Laravel and MySQL. Features responsive design and smooth animations.',
      tech: ['React', 'Tailwind CSS', 'React Router', 'MySQL', 'Laravel 12', 'PHP',],
      image: '/images/churchimg.jpeg',      
      github: 'https://github.com/tom4maeta', 
                          
    },
    {
      id: 2,
      title: 'Posts Management System',
      description: 'A secure, full-stack posts management system with React frontend and Laravel backend. Implements authentication, CRUD operations, and responsive design.',
      tech: ['React', 'Tailwind CSS', 'Sanctum', 'MySQL', 'Laravel 12','JWT','Axios'],
      image: '/images/img1c.jpeg',
      github: 'https://github.com/tom4maeta',
      
    },
    {
      id: 3,
      title: 'Website Vulnerability Scanner',
      description: 'A tool that scans websites for common website vulnerabilities using kali Linux (burpsuite) and nmap. Includes report generation.',
      tech: ['Kali Linux', 'Burp Suite', 'Nmap', 'Owasp ZAP', 'Docker', ],
      image: '/images/image2.jpeg',
      github: 'https://github.com/tom4maeta',
    
    },
    {
      id: 4,
      title: 'Full-stack Web Application',
      description: 'Nexoshield Technology Solutions full-stack website with Responsive design, and secure coding practices. Built with React, Tailwind CSS, Laravel, and MySQL.',
      tech: ['React', 'Tailwind CSS', 'Laravel 12', 'MySQL', 'JWT', 'CSRF Protection'],
      image: '/images/neximg.jpeg',
      github: 'https://github.com/tom4maeta',
      
    },
    {
      id: 4,
      title: 'HR Management System',
      description: 'A secure HR management system with features for employee records, attendance tracking, and performance reviews. Built with React, Tailwind CSS, Laravel, and MySQL.',
      tech: ['React', 'Tailwind CSS', 'Laravel 12', 'MySQL', 'JWT'],
      image: '/images/image 3.jpeg',
      github: 'https://github.com/tom4maeta',
      
    },
    {
      id: 4,
      title: 'Wardrobe Management System',
      description: 'A full-stack application for managing clothing items with categorization and filtering. Built with Laravel, Vue 3, and MySQL.',
      tech: ['Laravel', 'MySQL', 'JWT','Vue 3', 'Tailwind CSS'],
      image: '/images/wardrobe.jpg',
      github: 'https://github.com/tom4maeta',
      
    },
    
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-2"> My <span className="text-blue-600">Projects</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A showcase of my work in web development, security tools, and problem‑solving.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tech={project.tech}
              github={project.github}
              live={project.live}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;