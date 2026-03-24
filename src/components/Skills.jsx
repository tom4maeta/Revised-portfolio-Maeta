import React from 'react'
import { 
  FaReact, 
  FaJs, 
  FaNodeJs, 
  FaCss3Alt, 
  FaHtml5, 
  FaGitAlt, 
  FaFigma,
  FaPython,
  FaShieldAlt,
  FaBug,
  FaLightbulb,
  FaNetworkWired
} from 'react-icons/fa'
import { 
  SiTailwindcss, 
  SiNextdotjs,
  SiLaravel,
  SiMysql
} from 'react-icons/si'

const Skills = () => {
  const skills = [
    // Web Development
    { name: 'React', icon: <FaReact className="text-cyan-400" />, level: 'Advanced' },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-400" />, level: 'Advanced' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" />, level: 'Advanced' },
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" />, level: 'Advanced' },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" />, level: 'Advanced' },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" />, level: 'Intermediate' },
    { name: 'Next.js', icon: <SiNextdotjs className="text-white" />, level: 'Intermediate' },
    { name: 'Git', icon: <FaGitAlt className="text-orange-600" />, level: 'Advanced' },
    { name: 'Figma', icon: <FaFigma className="text-purple-400" />, level: 'Intermediate' },
    { name: 'Python', icon: <FaPython className="text-blue-400" />, level: 'Advanced' },
    // Backend & Databases
    { name: 'Laravel', icon: <SiLaravel className="text-red-500" />, level: 'Advanced' },
    { name: 'MySQL', icon: <SiMysql className="text-blue-600" />, level: 'Advanced' },
    // Cybersecurity & Networking
    { name: 'Ethical Hacking', icon: <FaShieldAlt className="text-green-500" />, level: 'Intermediate' },
    { name: 'Vulnerability Assessment', icon: <FaBug className="text-yellow-500" />, level: 'Advanced' },
    { name: 'Networking', icon: <FaNetworkWired className="text-purple-500" />, level: 'Advanced' },
    // Soft Skill
    { name: 'Problem Solver', icon: <FaLightbulb className="text-yellow-400" />, level: 'Advanced' }
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">My <span className="text-blue-600">Skills</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A full‑stack developer with strong hands-on experience in secure coding, networking, and creative problem solving.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
            >
              <div className="text-5xl mb-4 transform transition-transform group-hover:scale-110">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{skill.name}</h3>
              <span className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                {skill.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills