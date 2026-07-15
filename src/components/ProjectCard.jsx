import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const MAX_VISIBLE_TECH = 4

function ProjectCard({ title, description, image, tech, github, live }) {
  const visibleTech = tech.slice(0, MAX_VISIBLE_TECH)
  const hiddenTechCount = tech.length - visibleTech.length

  return (
    <article className="group flex h-full min-h-[30rem] flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700">
      <div className="relative h-44 overflow-hidden bg-slate-100 dark:bg-slate-800 sm:h-48">
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
          onError={(event) => {
            event.currentTarget.style.display = 'none'
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950/35 to-transparent"
          aria-hidden="true"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold leading-snug text-gray-950 dark:text-white">
          {title}
        </h3>

        <p className="project-card-description mt-3 text-sm leading-6 text-gray-600 dark:text-slate-300">
          {description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {visibleTech.map((skill) => (
            <span
              key={`${title}-${skill}`}
              className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300"
            >
              {skill}
            </span>
          ))}

          {hiddenTechCount > 0 && (
            <span className="rounded-md border border-slate-200 px-2.5 py-1 text-xs font-semibold text-slate-500 dark:border-slate-700 dark:text-slate-400">
              +{hiddenTechCount}
            </span>
          )}
        </div>

        {(github || live) && (
          <div className="mt-auto flex items-center justify-end border-t border-gray-100 pt-5 dark:border-slate-800">
            <div className="flex items-center gap-2">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-gray-200 px-3 py-2 text-sm font-semibold text-gray-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 dark:border-slate-700 dark:text-slate-300 dark:hover:border-amber-300/40 dark:hover:bg-amber-300/10 dark:hover:text-amber-300"
                  aria-label={`${title} GitHub repository`}
                >
                  <FaGithub size={16} />
                  Code
                </a>
              )}

              {live && (
                <a
                  href={live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-gray-200 px-3 py-2 text-sm font-semibold text-gray-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 dark:border-slate-700 dark:text-slate-300 dark:hover:border-amber-300/40 dark:hover:bg-amber-300/10 dark:hover:text-amber-300"
                  aria-label={`${title} live demo`}
                >
                  <FaExternalLinkAlt size={14} />
                  Live
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </article>
  )
}

export default ProjectCard
