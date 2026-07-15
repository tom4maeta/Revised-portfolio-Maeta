function SectionShell({ id, className = '', children }) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 py-20 transition-colors duration-200 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}

export default SectionShell
