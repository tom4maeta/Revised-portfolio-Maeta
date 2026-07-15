import { projectsContent } from '../data/homeContent'
import ProjectCard from './ProjectCard'
import SectionHeader from './SectionHeader'
import SectionShell from './SectionShell'

function Projects({ content = projectsContent }) {
  return (
    <SectionShell id="projects" className="bg-gray-50 dark:bg-slate-950">
      <SectionHeader
        title={content.title}
        highlightedTitle={content.highlightedTitle}
        description={content.description}
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {content.items.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </SectionShell>
  )
}

export default Projects
