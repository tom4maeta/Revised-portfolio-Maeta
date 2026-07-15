import { createElement } from 'react'
import { skillsContent } from '../data/homeContent'
import SectionHeader from './SectionHeader'
import SectionShell from './SectionShell'

function SkillCard({ skill }) {
  return (
    <div className="group rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-500/50">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-gray-50 transition group-hover:bg-blue-50 dark:bg-slate-800 dark:group-hover:bg-blue-500/10">
        {createElement(skill.icon, {
          className: `text-3xl ${skill.iconClassName}`,
          'aria-hidden': true
        })}
      </div>

      <h3 className="mb-2 text-base font-semibold text-gray-900 dark:text-white">
        {skill.name}
      </h3>

      <span className="inline-flex rounded-md bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
        {skill.level}
      </span>
    </div>
  )
}

function Skills({ content = skillsContent }) {
  return (
    <SectionShell id="skills" className="bg-white dark:bg-slate-900">
      <SectionHeader
        title={content.title}
        highlightedTitle={content.highlightedTitle}
        description={content.description}
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {content.items.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </SectionShell>
  )
}

export default Skills
