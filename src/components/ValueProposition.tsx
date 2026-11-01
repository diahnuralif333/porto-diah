import React from 'react'
import { MapPin, Mail, GraduationCap, CheckCircle2 } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { contentData, socialLinks } from '../data/portfolioData'

const colorMap = {
  orange: 'bg-orange-500 text-orange-500',
  blue: 'bg-sky-500 text-sky-500',
  black: 'bg-zinc-900 text-zinc-900',
  yellow: 'bg-amber-400 text-amber-400',
  pink: 'bg-pink-500 text-pink-500',
  green: 'bg-emerald-500 text-emerald-500',
}

export const ValueProposition: React.FC = () => {
  const { lang } = useLanguage()
  const content = contentData[lang]

  return (
    <section id="about" className="py-14 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center relative">
      {/* Subheading tag */}
      <div className="mb-3 sm:mb-4">
        <span className="font-editorial italic text-xl sm:text-2xl text-zinc-500">
          {content.about.tag}
        </span>
      </div>

      {/* Main Philosophy / Value Statement */}
      <h2 className="text-xl sm:text-3xl md:text-5xl font-normal text-zinc-800 leading-snug sm:leading-[1.3] max-w-3xl mx-auto tracking-tight mb-6 sm:mb-8">
        {content.about.headline}
      </h2>

      <p className="max-w-2xl mx-auto text-xs sm:text-base text-zinc-600 leading-relaxed mb-8 sm:mb-10 px-2">
        {content.about.description}
      </p>

      {/* Detail Info Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 max-w-4xl mx-auto mb-10 sm:mb-12 text-left">
        <div className="p-3 sm:p-3.5 rounded-2xl bg-white border border-zinc-200/80 shadow-xs flex items-center gap-3">
          <GraduationCap className="w-5 h-5 text-lime-600 shrink-0" />
          <div className="min-w-0">
            <div className="text-[10px] text-zinc-400 font-semibold uppercase">{content.about.eduLabel}</div>
            <div className="text-xs font-bold text-zinc-800 truncate">{content.about.eduVal}</div>
          </div>
        </div>
        <div className="p-3 sm:p-3.5 rounded-2xl bg-white border border-zinc-200/80 shadow-xs flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 text-lime-600 shrink-0" />
          <div className="min-w-0">
            <div className="text-[10px] text-zinc-400 font-semibold uppercase">{content.about.focusLabel}</div>
            <div className="text-xs font-bold text-zinc-800 truncate">{content.about.focusVal}</div>
          </div>
        </div>
        <div className="p-3 sm:p-3.5 rounded-2xl bg-white border border-zinc-200/80 shadow-xs flex items-center gap-3">
          <MapPin className="w-5 h-5 text-lime-600 shrink-0" />
          <div className="min-w-0">
            <div className="text-[10px] text-zinc-400 font-semibold uppercase">{content.about.locLabel}</div>
            <div className="text-xs font-bold text-zinc-800 truncate">{content.about.locVal}</div>
          </div>
        </div>
        <div className="p-3 sm:p-3.5 rounded-2xl bg-white border border-zinc-200/80 shadow-xs flex items-center gap-3">
          <Mail className="w-5 h-5 text-lime-600 shrink-0" />
          <div className="min-w-0">
            <div className="text-[10px] text-zinc-400 font-semibold uppercase">{content.about.emailLabel}</div>
            <div className="text-xs font-bold text-zinc-800 truncate">{socialLinks.email}</div>
          </div>
        </div>
      </div>

      {/* Floating / Surrounding Skill Badges */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-2xl mx-auto">
        {content.skills.map((pill, idx) => (
          <div
            key={idx}
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white border border-zinc-200 shadow-xs hover:border-zinc-300 hover:shadow-sm transition-all"
          >
            <span className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full shrink-0 ${colorMap[pill.color] || 'bg-zinc-900'}`} />
            <span className="text-xs sm:text-sm font-medium text-zinc-800">
              {pill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
