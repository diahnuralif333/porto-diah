import React, { useState } from 'react'
import { ArrowRight, Check, Copy, Mail, MessageSquare, MapPin } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { contentData, socialLinks } from '../data/portfolioData'
import { InstagramIcon } from './Icons'

export const Contact: React.FC = () => {
  const { lang } = useLanguage()
  const content = contentData[lang]
  const [copied, setCopied] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const copyEmail = () => {
    navigator.clipboard.writeText(socialLinks.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Open default mail client
    const mailto = `mailto:${socialLinks.email}?subject=${encodeURIComponent(
      (lang === 'id' ? 'Pesan dari ' : 'Message from ') + formData.name
    )}&body=${encodeURIComponent(formData.message + '\n\n' + formData.name + ' (' + formData.email + ')')}`
    window.location.href = mailto

    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 4000)
  }

  return (
    <section id="contact" className="py-14 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="rounded-2xl sm:rounded-3xl bg-zinc-950 text-white p-5 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
        {/* Subtle Lime Glow inside Dark Contact Box */}
        <div className="absolute -top-24 -right-24 w-60 sm:w-80 h-60 sm:h-80 bg-lime-400/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-2xl mb-8 sm:mb-10">
          <span className="font-editorial italic text-xl sm:text-2xl text-lime-400 block mb-2 sm:mb-3">
            {content.contact.tag}
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3 sm:mb-5 leading-tight">
            {content.contact.title}
          </h2>
          <p className="text-zinc-400 text-xs sm:text-base leading-relaxed">
            {content.contact.desc}
          </p>
        </div>

        {/* Contact Links Grid (Email, WhatsApp, Instagram, Location) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 max-w-xl mb-8 sm:mb-10">
          {/* Email Copy Pill */}
          <div className="flex items-center justify-between p-2.5 sm:p-3 rounded-2xl bg-zinc-900 border border-zinc-800">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-lime-400 text-zinc-950 flex items-center justify-center shrink-0">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <span className="text-xs font-mono text-zinc-200 truncate">{socialLinks.email}</span>
            </div>
            <button
              onClick={copyEmail}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors shrink-0"
              title={content.contact.copyEmail}
            >
              {copied ? <Check className="w-4 h-4 text-lime-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* WhatsApp Direct Link */}
          <a
            href={socialLinks.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-lime-400/60 transition-colors"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
              <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] text-zinc-400">WhatsApp</div>
              <div className="text-xs font-semibold text-zinc-200 truncate">{socialLinks.phone}</div>
            </div>
          </a>

          {/* Instagram Direct Link */}
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-pink-500/60 transition-colors"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-pink-500 text-white flex items-center justify-center shrink-0">
              <InstagramIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] text-zinc-400">Instagram</div>
              <div className="text-xs font-semibold text-zinc-200 truncate">@diiiiahh__</div>
            </div>
          </a>

          {/* Location */}
          <div className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-2xl bg-zinc-900 border border-zinc-800">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-zinc-800 text-zinc-300 flex items-center justify-center shrink-0">
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] text-zinc-400">{lang === 'id' ? 'Lokasi' : 'Location'}</div>
              <div className="text-xs font-semibold text-zinc-200 truncate">
                {lang === 'id' ? 'Kota Batu, Jawa Timur' : 'Batu City, East Java'}
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        {submitted ? (
          <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900 border border-zinc-800 text-center space-y-2 max-w-xl">
            <div className="w-10 h-10 rounded-full bg-lime-400/20 text-lime-400 flex items-center justify-center mx-auto">
              <Check className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-white text-base">{content.contact.successTitle}</h4>
            <p className="text-xs text-zinc-400">{content.contact.successSub}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4 max-w-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <input
                type="text"
                required
                placeholder={content.contact.namePlaceholder}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-lime-400 transition-colors"
              />
              <input
                type="email"
                required
                placeholder={content.contact.emailPlaceholder}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-lime-400 transition-colors"
              />
            </div>
            <textarea
              required
              rows={4}
              placeholder={content.contact.msgPlaceholder}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-lime-400 transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-lime-400 hover:bg-lime-300 text-zinc-950 font-semibold text-xs sm:text-sm transition-all"
            >
              <span>{content.contact.submitBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
