import { createElement, useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { contactContent } from '../data/homeContent'
import SectionHeader from './SectionHeader'
import SectionShell from './SectionShell'

function ContactDetail({ item }) {
  const content = (
    <>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-300">
        {createElement(item.icon, { size: 18 })}
      </span>
      <span>
        <span className="block text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400">
          {item.label}
        </span>
        <span className="text-sm font-medium text-gray-800 dark:text-slate-100">{item.value}</span>
      </span>
    </>
  )

  if (item.href) {
    return (
      <a
        href={item.href}
        className="flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition hover:border-blue-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-500/50"
      >
        {content}
      </a>
    )
  }

  return (
    <div className="flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      {content}
    </div>
  )
}

function Contact({ content = contactContent }) {
  const formRef = useRef()
  const [status, setStatus] = useState({
    loading: false,
    success: null,
    error: null
  })

  useEffect(() => {
    if (!status.success) {
      return undefined
    }

    const timer = setTimeout(() => {
      setStatus((prev) => ({ ...prev, success: null }))
    }, 4000)

    return () => clearTimeout(timer)
  }, [status.success])

  const handleInputChange = () => {
    if (status.success || status.error) {
      setStatus({ loading: false, success: null, error: null })
    }
  }

  const sendEmail = (event) => {
    event.preventDefault()

    setStatus({ loading: true, success: null, error: null })

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus({
          loading: false,
          success: 'Message sent successfully! I will get back to you soon.',
          error: null
        })
        formRef.current?.reset()
      })
      .catch((error) => {
        console.error('EmailJS error:', error)
        setStatus({
          loading: false,
          success: null,
          error: 'Failed to send message. Please try again later.'
        })
      })
  }

  return (
    <SectionShell id="contact" className="bg-white dark:bg-slate-900">
      <SectionHeader
        title={content.title}
        highlightedTitle={content.highlightedTitle}
        description={content.description}
      />

      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-8">
          <div>
            <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              {content.detailsTitle}
            </h3>
            <div className="space-y-3">
              {content.details.map((item) => (
                <ContactDetail key={item.label} item={item} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              {content.socialTitle}
            </h3>
            <div className="flex gap-3">
              {content.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-md border border-gray-200 bg-white text-gray-600 shadow-sm transition hover:border-blue-200 hover:text-blue-600 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-blue-500/50 dark:hover:text-amber-300"
                >
                  {createElement(social.icon, { size: 20 })}
                </a>
              ))}
            </div>
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8"
        >
          <h3 className="mb-6 text-xl font-semibold text-gray-900 dark:text-white">
            {content.formTitle}
          </h3>

          <div className="mb-4">
            <label htmlFor="from_name" className="mb-2 block font-medium text-gray-700 dark:text-slate-200">
              Name
            </label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              required
              onChange={handleInputChange}
              className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-900 transition placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-500"
              placeholder="Your name"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="reply_to" className="mb-2 block font-medium text-gray-700 dark:text-slate-200">
              Email
            </label>
            <input
              type="email"
              id="reply_to"
              name="reply_to"
              required
              onChange={handleInputChange}
              className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-900 transition placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-500"
              placeholder="user21@example.com"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="mb-2 block font-medium text-gray-700 dark:text-slate-200">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              onChange={handleInputChange}
              className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-900 transition placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-500"
              placeholder="Your message..."
            />
          </div>

          {status.success && (
            <div className="mb-4 rounded-md bg-green-50 p-3 text-sm font-medium text-green-700 dark:bg-green-500/10 dark:text-green-300">
              {status.success}
            </div>
          )}

          {status.error && (
            <div className="mb-4 rounded-md bg-red-50 p-3 text-sm font-medium text-red-700 dark:bg-red-500/10 dark:text-red-300">
              {status.error}
            </div>
          )}

          <button
            type="submit"
            disabled={status.loading}
            className="w-full rounded-md bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status.loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </SectionShell>
  )
}

export default Contact
