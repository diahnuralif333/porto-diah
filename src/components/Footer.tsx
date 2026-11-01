import React from 'react'
import { ArrowUp, Mail, MessageSquare } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { contentData, socialLinks } from '../data/portfolioData'
import { InstagramIcon } from './Icons'

export const Footer: React.FC = () => {
  const { lang } = useLanguage()
  const content = contentData[lang]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-zinc-200/80 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-center sm:text-left">
        <div>
          <span className="font-editorial italic text-xl sm:text-2xl font-medium text-zinc-900 block mb-1">
            {content.hero.name}
          </span>
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} {content.hero.name}. {content.footer.rights}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-5 text-xs text-zinc-600 font-medium">
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 hover:text-zinc-950 transition-colors"
          >
            <InstagramIcon className="w-3.5 h-3.5 text-pink-600" />
            <span>Instagram</span>
          </a>
          <a
            href={socialLinks.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 hover:text-zinc-950 transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
            <span>WhatsApp</span>
          </a>
          <a
            href={`mailto:${socialLinks.email}`}
            className="flex items-center gap-1.5 hover:text-zinc-950 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-zinc-800" />
            <span>Email</span>
          </a>
          <button
            onClick={scrollToTop}
            aria-label={content.footer.backToTop}
            title={content.footer.backToTop}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-100 transition-colors ml-1"
          >
            <ArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-700" />
          </button>
        </div>
      </div>
    </footer>
  )
}
