function SectionHeader({ title, highlightedTitle, description, align = 'center' }) {
  const isCentered = align === 'center'

  return (
    <div className={isCentered ? 'text-center mb-12' : 'mb-8'}>
      <h2 className="mb-3 text-3xl font-bold text-gray-900 transition-colors dark:text-white sm:text-4xl">
        {title}{' '}
        {highlightedTitle && (
          <span className="text-blue-600 dark:text-amber-300">{highlightedTitle}</span>
        )}
      </h2>

      {description && (
        <p
          className={`text-sm leading-relaxed text-gray-600 transition-colors dark:text-slate-300 sm:text-base ${
            isCentered ? 'max-w-2xl mx-auto' : 'max-w-2xl'
          }`}
        >
          {description}
        </p>
      )}

      <div
        className={`mt-5 h-1 w-20 rounded-full bg-amber-400 ${
          isCentered ? 'mx-auto' : ''
        }`}
      />
    </div>
  )
}

export default SectionHeader
