import React, { useState } from 'react'
import { GraduationCap, Download } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { contentData, socialLinks } from '../data/portfolioData'

export const Hero: React.FC = () => {
  const { lang } = useLanguage()
  const content = contentData[lang]
  const [imgSrc, setImgSrc] = useState(socialLinks.profileImage)

  return (
    <section className="relative pt-4 sm:pt-6 pb-8 sm:pb-12 overflow-hidden">
      {/* Radiant Lime-Green Background Aura */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[460px] sm:h-[580px] lg:h-[680px] pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(ellipse 70% 55% at 50% 45%, #baf522 0%, #d4fb52 35%, rgba(251, 251, 251, 0) 75%)',
          filter: 'blur(30px)',
          opacity: 0.9,
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Education / Honors Badge */}
        <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1 rounded-full bg-white/75 backdrop-blur-md border border-zinc-200/80 shadow-xs text-zinc-900 text-[11px] sm:text-xs font-medium tracking-wide">
            <GraduationCap className="w-3.5 h-3.5 text-zinc-800" />
            <span>{content.hero.awardText}</span>
          </div>
        </div>

        {/* Hero Title */}
        <div className="text-center mb-4 sm:mb-6">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-950 leading-tight">
            {content.hero.greeting}
          </h1>
          <h2 className="font-editorial italic text-4xl sm:text-6xl md:text-8xl lg:text-[100px] font-normal text-zinc-950 tracking-normal leading-[1.1] sm:leading-[1.05] mt-1 sm:mt-2">
            {content.hero.roleAccent}
          </h2>
        </div>

        {/* Desktop Composition (>= 1024px) */}
        <div className="relative min-h-[380px] sm:min-h-[460px] md:min-h-[520px] hidden lg:flex items-end justify-center mt-2">
          
          {/* Left Side: Status Pill & Academic Proof */}
          <div className="flex flex-col justify-between absolute left-0 top-16 bottom-10 z-20 w-64 text-left">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-zinc-200 shadow-sm text-xs font-medium text-zinc-800 self-start">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-lime-500"></span>
              </span>
              <span>{content.hero.availableText}</span>
            </div>

            {/* Academic Credential Card */}
            <div className="mt-auto p-4 rounded-2xl bg-white/85 backdrop-blur-md border border-zinc-200 shadow-sm space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-lime-400 text-zinc-950">
                  {content.hero.honorsBadge}
                </span>
              </div>
              <p className="text-[11px] text-zinc-600 leading-snug">
                {content.hero.honorsSub}
              </p>
            </div>
          </div>

          {/* Center Image */}
          <div className="relative z-10 w-full max-w-[340px] md:max-w-[380px] flex justify-center pb-2">
            <div className="relative w-full rounded-[160px_160px_28px_28px] overflow-hidden shadow-2xl border-4 border-white ring-8 ring-lime-400/25 bg-gradient-to-b from-white to-zinc-100">
              <img
                src={imgSrc}
                onError={() => setImgSrc(socialLinks.fallbackImage)}
                alt={content.hero.name}
                className="w-full h-auto max-h-[460px] object-cover object-top select-none hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Side: Bio text & CTA Button */}
          <div className="flex flex-col justify-between absolute right-0 top-20 bottom-10 z-20 w-64 text-left">
            <p className="text-xs sm:text-[13px] text-zinc-800 leading-relaxed font-normal bg-white/50 backdrop-blur-xs p-3.5 rounded-2xl border border-white/60">
              {content.hero.tagline}
            </p>

            <div className="mt-auto space-y-2.5">
              <a
                href={socialLinks.cvUrl}
                download="CV-ATS-Diah-Nur-Alif.pdf"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-zinc-950 hover:bg-black text-white text-xs sm:text-sm font-medium shadow-md hover:shadow-lg transition-all"
              >
                <span>{content.hero.btnCv}</span>
                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform text-lime-400" />
              </a>
              <div>
                <a
                  href="#contact"
                  className="inline-block text-xs font-semibold text-zinc-800 hover:text-black underline underline-offset-4 ml-1"
                >
                  {content.hero.btnContact} →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Layout (< 1024px) */}
        <div className="lg:hidden flex flex-col items-center gap-4 mt-2 text-center">
          {/* Availability Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200 shadow-xs text-xs font-medium text-zinc-800">
            <span className="inline-block h-2 w-2 rounded-full bg-lime-500"></span>
            <span>{content.hero.availableText}</span>
          </div>

          {/* Photo on Mobile */}
          <div className="w-full max-w-[220px] sm:max-w-[280px] my-2">
            <div className="rounded-[120px_120px_24px_24px] sm:rounded-[140px_140px_28px_28px] overflow-hidden shadow-xl border-4 border-white ring-4 sm:ring-8 ring-lime-400/25 bg-gradient-to-b from-white to-zinc-100">
              <img
                src={imgSrc}
                onError={() => setImgSrc(socialLinks.fallbackImage)}
                alt={content.hero.name}
                className="w-full h-auto max-h-[340px] sm:max-h-[400px] object-cover object-top select-none"
              />
            </div>
          </div>

          {/* Tagline on Mobile */}
          <p className="text-xs sm:text-sm text-zinc-700 max-w-md px-2 leading-relaxed">
            {content.hero.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 w-full">
            <a
              href={socialLinks.cvUrl}
              download="CV-ATS-Diah-Nur-Alif.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-zinc-950 text-white text-xs sm:text-sm font-medium shadow-md hover:bg-black transition-colors"
            >
              <span>{content.hero.btnCv}</span>
              <Download className="w-3.5 h-3.5 text-lime-400" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white border border-zinc-300 text-zinc-900 text-xs sm:text-sm font-medium hover:bg-zinc-50 transition-colors"
            >
              {content.hero.btnContact}
            </a>
          </div>

          {/* Academic Proof */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/80 border border-zinc-200 text-[11px] text-zinc-600 mt-1">
            <span className="font-bold text-zinc-900">{content.hero.honorsBadge}</span>
            <span>•</span>
            <span className="truncate">{content.hero.honorsSub}</span>
          </div>
        </div>


      </div>
    </section>
  )
}
