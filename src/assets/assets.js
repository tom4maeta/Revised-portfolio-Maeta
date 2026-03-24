// Centralized asset management for portfolio project
// Keeps imports clean and maintainable across the app

// -------------------------
// Images
// -------------------------

import profileImage from "../assets/images/profile.jpg";
import projectOneImage from "../assets/images/project-1.png";
import projectTwoImage from "../assets/images/project-2.png";
import projectThreeImage from "../assets/images/project-3.png";

// -------------------------
// Icons
// -------------------------

import githubIcon from "../assets/icons/github.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";
import emailIcon from "../assets/icons/email.svg";

// -------------------------
// Resume / Documents
// -------------------------

import resumeFile from "../assets/docs/resume.pdf";

// -------------------------
// Export Structured Assets
// -------------------------

export const images = {
  profile: profileImage,
  projects: {
    projectOne: projectOneImage,
    projectTwo: projectTwoImage,
    projectThree: projectThreeImage,
  },
};

export const icons = {
  github: githubIcon,
  linkedin: linkedinIcon,
  email: emailIcon,
};

export const documents = {
  resume: resumeFile,
};

// -------------------------
// Project Metadata (Optional but Professional)
// -------------------------

export const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "Personal portfolio showcasing projects, skills, and professional experience.",
    image: projectOneImage,
    techStack: ["Vue 3", "Tailwind CSS"],
    github: "https://github.com/yourusername/portfolio",
  },
  {
    id: 2,
    title: "Wardrobe Management System",
    description:
      "A full-stack application for managing clothing items with categorization and filtering.",
    image: projectTwoImage,
    techStack: ["Laravel", "Vue 3", "MySQL"],
    github: "https://github.com/yourusername/wardrobe-system",
  },
  {
    id: 3,
    title: "Vulnerability Assessment Toolkit",
    description:
      "A toolkit integrating security tools for automated vulnerability scanning and reporting.",
    image: projectThreeImage,
    techStack: ["Python", "OWASP ZAP", "Nmap"],
    github: "https://github.com/yourusername/security-toolkit",
  },
];

// -------------------------
// Social Links (Clean Separation)
// -------------------------

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: githubIcon,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourprofile",
    icon: linkedinIcon,
  },
  {
    name: "Email",
    url: "mailto:youremail@example.com",
    icon: emailIcon,
  },
];