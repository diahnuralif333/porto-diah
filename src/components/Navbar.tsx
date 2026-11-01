import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { socialLinks, contentData } from '../data/portfolioData'
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons'

export const Navbar: React.FC = () => {
  const { lang, setLang } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)
  const content = contentData[lang]

  return (
    <header className="w-full pt-4 sm:pt-6 pb-3 sm:pb-4 px-4 sm:px-8 lg:px-20 max-w-7xl mx-auto flex items-center justify-between relative z-40">
      {/* Brand Logo */}
      <a
        href="#"
        className="font-editorial text-xl sm:text-2xl md:text-3xl font-medium italic tracking-wide text-zinc-900 hover:opacity-80 transition-opacity truncate max-w-[150px] xs:max-w-none"
      >
        {content.hero.name}
      </a>

      {/* Right Controls: Language Toggle, Social Buttons (Desktop), and Hamburger Menu */}
      <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
        {/* Language Switcher Capsule Toggle */}
        <div className="inline-flex items-center p-0.5 sm:p-1 rounded-full bg-white/90 backdrop-blur-md border border-zinc-200/90 shadow-xs">
          <button
            type="button"
            onClick={() => setLang('id')}
            className={`px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[11px] sm:text-xs font-bold transition-all ${
              lang === 'id'
                ? 'bg-[#00c968] text-white shadow-xs'
                : 'text-zinc-600 hover:text-zinc-950'
            }`}
          >
            ID
          </button>
          <button
            type="button"
            onClick={() => setLang('en')}
            className={`px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[11px] sm:text-xs font-bold transition-all ${
              lang === 'en'
                ? 'bg-[#00c968] text-white shadow-xs'
                : 'text-zinc-600 hover:text-zinc-950'
            }`}
          >
            EN
          </button>
        </div>

        {/* GitHub Circle Button - Hidden on mobile (< sm) so header is not crowded, visible on desktop */}
        <a
          href={socialLinks.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="hidden sm:flex w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#d6f9dc]/70 hover:bg-[#c2f5cb] border border-[#b8f0c2]/60 items-center justify-center text-zinc-800 hover:text-zinc-950 transition-all hover:scale-105 shadow-xs"
        >
          <GithubIcon className="w-4 h-4" />
        </a>

        {/* LinkedIn Circle Button - Hidden on mobile (< sm) */}
        <a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="hidden sm:flex w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#d6f9dc]/70 hover:bg-[#c2f5cb] border border-[#b8f0c2]/60 items-center justify-center text-zinc-800 hover:text-zinc-950 transition-all hover:scale-105 shadow-xs"
        >
          <LinkedinIcon className="w-4 h-4" />
        </a>

        {/* Instagram Circle Button - Hidden on mobile (< sm) */}
        <a
          href={socialLinks.instagram}
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          className="hidden sm:flex w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#d6f9dc]/70 hover:bg-[#c2f5cb] border border-[#b8f0c2]/60 items-center justify-center text-zinc-800 hover:text-zinc-950 transition-all hover:scale-105 shadow-xs"
        >
          <InstagramIcon className="w-4 h-4" />
        </a>

        {/* Hamburger Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu Navigasi"
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-zinc-200/90 bg-white/90 backdrop-blur-md flex items-center justify-center text-zinc-800 hover:bg-zinc-100 hover:text-zinc-950 transition-all hover:scale-105 shadow-xs ml-0.5"
        >
          {menuOpen ? <X className="w-4 h-4 sm:w-4.5 sm:h-4.5" /> : <Menu className="w-4 h-4 sm:w-4.5 sm:h-4.5" />}
        </button>
      </div>

      {/* Menu Drawer Popup saat tombol garis 3 diklik */}
      {menuOpen && (
        <div className="absolute top-16 sm:top-20 right-4 sm:right-8 lg:right-20 w-[calc(100vw-2rem)] sm:w-64 max-w-xs bg-white/95 backdrop-blur-xl border border-zinc-200/90 rounded-3xl shadow-2xl p-4 flex flex-col gap-1.5 sm:gap-2 text-sm font-medium z-50 animate-in fade-in zoom-in-95 duration-200">
          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="px-4 py-2.5 rounded-xl hover:bg-zinc-100 text-zinc-700 hover:text-zinc-950 transition-colors"
          >
            {content.nav.about}
          </a>
          <a
            href="#process"
            onClick={() => setMenuOpen(false)}
            className="px-4 py-2.5 rounded-xl hover:bg-zinc-100 text-zinc-700 hover:text-zinc-950 transition-colors"
          >
            {content.nav.workflow}
          </a>
          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className="px-4 py-2.5 rounded-xl hover:bg-zinc-100 text-zinc-700 hover:text-zinc-950 transition-colors"
          >
            {content.nav.projects}
          </a>
          <a
            href="#experience"
            onClick={() => setMenuOpen(false)}
            className="px-4 py-2.5 rounded-xl hover:bg-zinc-100 text-zinc-700 hover:text-zinc-950 transition-colors"
          >
            {content.nav.experience}
          </a>

          {/* Tombol Hubungi Saya telah diganti dengan baris Sosmed di dalam drawer */}
          <div className="mt-2 pt-3 border-t border-zinc-200/80 flex items-center justify-center gap-3">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-full bg-[#d6f9dc]/70 hover:bg-[#c2f5cb] border border-[#b8f0c2]/60 flex items-center justify-center text-zinc-800 hover:text-zinc-950 transition-all hover:scale-105 shadow-xs"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full bg-[#d6f9dc]/70 hover:bg-[#c2f5cb] border border-[#b8f0c2]/60 flex items-center justify-center text-zinc-800 hover:text-zinc-950 transition-all hover:scale-105 shadow-xs"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-[#d6f9dc]/70 hover:bg-[#c2f5cb] border border-[#b8f0c2]/60 flex items-center justify-center text-zinc-800 hover:text-zinc-950 transition-all hover:scale-105 shadow-xs"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
