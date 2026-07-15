import resumePDF from '../assets/resume.pdf'
import {
  FaArrowRight,
  FaBookOpen,
  FaBug,
  FaBullseye,
  FaCode,
  FaCss3Alt,
  FaEnvelope,
  FaFigma,
  FaFileAlt,
  FaGithub,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaLightbulb,
  FaLinkedin,
  FaMapMarkerAlt,
  FaNetworkWired,
  FaNodeJs,
  FaPhone,
  FaPython,
  FaReact,
  FaRocket,
  FaShieldAlt,
  FaTwitter
} from 'react-icons/fa'
import {
  SiLaravel,
  SiMysql,
  SiNextdotjs,
  SiTailwindcss
} from 'react-icons/si'

export const heroContent = {
  name: 'Tom Maeta',
  image: '/profile.png',
  titlePrefix: "Hi, I'm",
  role: 'Software Developer/DevOps Engineer',
  roleHighlight: 'Cybersecurity Enthusiast',
  intro:
    'I design and develop secure, high speed, reliable software applications using modern technologies, clean architecture, and cybersecurity best practices.',
  actions: [
    {
      label: 'View Projects',
      href: '#projects',
      variant: 'primary',
      icon: FaArrowRight
    },
    {
      label: 'View Resume',
      href: resumePDF,
      variant: 'secondary',
      icon: FaFileAlt,
      external: true
    }
  ],
  highlights: [
    { value: '2+', label: 'Years Experience' },
    { value: '6+', label: 'Projects Built' },
    { value: '24/7', label: 'Operational Security Mindset' }
  ]
}

export const aboutContent = {
  image: '/profile.png',
  title: 'About',
  highlightedTitle: 'Me',
  description:
    'I am a DevOps Engineer and Cybersecurity Enthusiast focused on building secure, scalable, and efficient systems.',
  paragraphs: [
    'I specialize in developing and managing modern web applications with an emphasis on performance, reliability, and clean architecture.',
    'With 2 years of experience in full-stack development and system operations, I use modern technologies and practical security habits to deliver robust, maintainable solutions.',
    'I value automation, cloud infrastructure, continuous improvement, and integrating security throughout the development lifecycle.'
  ],
  features: [
    {
      icon: FaShieldAlt,
      title: 'Security Focused',
      description:
        'Implementing secure coding practices and protecting applications from vulnerabilities.'
    },
    {
      icon: FaBullseye,
      title: 'Goal-Oriented',
      description:
        'Focused on delivering efficient solutions aligned with project objectives.'
    },
    {
      icon: FaLightbulb,
      title: 'Problem Solver',
      description:
        'Analyzing complex challenges and building scalable, practical solutions.'
    },
    {
      icon: FaCode,
      title: 'Clean Architecture',
      description:
        'Writing structured, maintainable code designed for long-term scalability.'
    },
    {
      icon: FaRocket,
      title: 'Performance Driven',
      description:
        'Optimizing applications for speed, efficiency, and reliability.'
    },
    {
      icon: FaBookOpen,
      title: 'Continuous Learning',
      description:
        'Actively improving skills and staying current with modern technologies.'
    }
  ]
}

export const skillsContent = {
  title: 'My',
  highlightedTitle: 'Skills',
  description:
    'A focused toolkit across full-stack development, secure coding, networking, and practical problem solving.',
  items: [
    { name: 'React', icon: FaReact, iconClassName: 'text-cyan-500', level: 'Advanced' },
    { name: 'JavaScript', icon: FaJs, iconClassName: 'text-yellow-500', level: 'Advanced' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, iconClassName: 'text-sky-500', level: 'Advanced' },
    { name: 'HTML5', icon: FaHtml5, iconClassName: 'text-orange-500', level: 'Advanced' },
    { name: 'CSS3', icon: FaCss3Alt, iconClassName: 'text-blue-500', level: 'Advanced' },
    { name: 'Node.js', icon: FaNodeJs, iconClassName: 'text-green-600', level: 'Intermediate' },
    { name: 'Next.js', icon: SiNextdotjs, iconClassName: 'text-gray-900 dark:text-white', level: 'Intermediate' },
    { name: 'Git', icon: FaGitAlt, iconClassName: 'text-orange-600', level: 'Advanced' },
    { name: 'Figma', icon: FaFigma, iconClassName: 'text-purple-500', level: 'Intermediate' },
    { name: 'Python', icon: FaPython, iconClassName: 'text-blue-600', level: 'Advanced' },
    { name: 'Laravel', icon: SiLaravel, iconClassName: 'text-red-500', level: 'Advanced' },
    { name: 'MySQL', icon: SiMysql, iconClassName: 'text-blue-700', level: 'Advanced' },
    { name: 'Ethical Hacking', icon: FaShieldAlt, iconClassName: 'text-emerald-600', level: 'Intermediate' },
    { name: 'Vulnerability Assessment', icon: FaBug, iconClassName: 'text-amber-500', level: 'Advanced' },
    { name: 'Networking', icon: FaNetworkWired, iconClassName: 'text-indigo-500', level: 'Advanced' },
    { name: 'Problem Solving', icon: FaLightbulb, iconClassName: 'text-yellow-500', level: 'Advanced' }
  ]
}

export const projectsContent = {
  title: 'My',
  highlightedTitle: 'Projects',
  description:
    'Selected work across web applications, management systems, and security-focused tooling.',
  items: [
    {
      id: 'church-management-system',
      title: 'Non-Profit-Organization-NGO- CRM System',
      description:
        ' NGO-CRM system with Super Admin  dashboard for managing users, roles, events, and operation across the organization.',
      tech: ['React', 'Tailwind CSS','MySQL', 'Node.Js','Express','Api'],
      image: '/images/image 3.jpeg',
      github: 'https://github.com/tom4maeta/NGO-Non-profit-CRM-system'
    },
    {
      id: 'posts-management-system',
      title: 'Posts Management System',
      description:
        'Full-stack publishing system with authentication, content management, and protected API workflows.',
      tech: ['React', 'Tailwind CSS', 'Sanctum', 'MySQL', 'Laravel 12', 'JWT', 'Axios'],
      image: '/images/img1c.jpeg',
      github: 'https://github.com/tom4maeta/Posts-Management-System'
    },
    {
      id: 'website-vulnerability-scanner',
      title: 'Website Vulnerability Scanner',
      description:
        'Security assessment workflow for reconnaissance, vulnerability checks, and structured scan reporting.',
      tech: ['Kali Linux', 'Burp Suite', 'Nmap', 'OWASP ZAP', 'Docker'],
      image: '/images/image2.jpeg',
      github: 'https://github.com/tom4maeta'
    },
    {
      id: 'nexoshield-technology-solutions',
      title: 'Nexoshield Web Platform',
      description:
        'Company web platform for Nexoshield Technology Solutions with responsive pages and backend integration.',
      tech: ['React', 'Tailwind CSS', 'Laravel 12', 'MySQL', 'JWT', 'CSRF Protection'],
      image: '/images/neximg.jpeg',
      github: 'https://github.com/tom4maeta'
    },
    {
      id: 'hr-management-system',
      title: 'Church Management System',
      description:
        'Church admin system for for tracking church records, attendance tracking, and performance review coordination.',
      tech: ['React', 'Tailwind CSS', 'Laravel 12', 'MySQL', 'JWT'],
      image: '/images/churchimg.jpeg',
      github: 'https://github.com/tom4maeta'
    },
    {
      id: 'wardrobe-management-system',
      title: 'Wardrobe Management System',
      description:
        'Inventory-style wardrobe application with item categorization, filtering, and simple management flows.',
      tech: ['Laravel', 'MySQL', 'JWT', 'Vue 3', 'Tailwind CSS'],
      image: '/images/wardrobe.jpg',
      github: 'https://github.com/tom4maeta'
    }
  ]
}

export const contactContent = {
  title: 'Get',
  highlightedTitle: 'In Touch',
  description: 'Have a question or want to work together? Feel free to reach out.',
  detailsTitle: 'Contact Information',
  socialTitle: 'Connect with Me',
  formTitle: 'Send a Message',
  details: [
    { label: 'Email', value: 'aikotom3@gmail.com', icon: FaEnvelope, href: 'mailto:aikotom3@gmail.com' },
    { label: 'Phone', value: '+254 738552698', icon: FaPhone, href: 'tel:+254738552698' },
    { label: 'Location', value: 'Nairobi, Kenya', icon: FaMapMarkerAlt }
  ],
  socials: [
    { label: 'GitHub', href: 'https://github.com/tom4maeta', icon: FaGithub },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/tom-maeta254', icon: FaLinkedin },
    { label: 'Twitter', href: 'https://twitter.com/yourusername', icon: FaTwitter }
  ]
}
