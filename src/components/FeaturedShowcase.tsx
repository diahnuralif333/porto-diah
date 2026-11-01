import React from 'react'
import { Sparkles, ArrowUpRight, Award, Layers } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { contentData } from '../data/portfolioData'

export const FeaturedShowcase: React.FC = () => {
  const { lang } = useLanguage()
  const content = contentData[lang]

  return (
    <section className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Big Rounded Lime Green Showcase Container */}
      <div className="relative rounded-2xl sm:rounded-3xl bg-[#baf522] p-4 sm:p-8 lg:p-10 overflow-hidden shadow-2xl shadow-lime-500/10 border border-lime-300">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-white/20 rounded-full blur-3xl pointer-events-none" />

        {/* Top bar inside container */}
        <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between gap-3 mb-5 sm:mb-6 relative z-10">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-black/10 backdrop-blur-md text-[11px] sm:text-xs font-semibold text-zinc-900">
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">{content.featured.badge}</span>
          </div>
          <a
            href="#projects"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-900 hover:text-black hover:underline"
          >
            <span>{content.featured.explore}</span>
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </a>
        </div>

        {/* Grid of UI Mockup Cards inside Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5 relative z-10">
          {/* Card 1: KaryaTaniShop */}
          <div className="md:col-span-6 rounded-2xl bg-zinc-950 p-4 sm:p-6 text-white shadow-xl flex flex-col justify-between min-h-[220px]">
            <div>
              <div className="flex items-center justify-between text-xs text-zinc-400 mb-3 pb-2.5 border-b border-zinc-800">
                <span className="font-mono text-lime-400 font-semibold flex items-center gap-1.5 text-[11px] sm:text-xs">
                  <Layers className="w-3.5 h-3.5" />
                  SYSTEM ANALYST
                </span>
                <span className="bg-zinc-800 px-2 py-0.5 rounded text-[10px] sm:text-[11px] text-zinc-300">
                  {content.featured.card1Badge}
                </span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
                {content.featured.card1Title}
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed mb-3">
                {content.featured.card1Desc}
              </p>
            </div>
            <div className="mt-3 pt-3 border-t border-zinc-800/80 flex items-center justify-between gap-2">
              <span className="text-[11px] sm:text-xs font-mono text-zinc-300 truncate">PHP Laravel • ERD • UML</span>
              <span className="text-[11px] sm:text-xs text-lime-400 font-bold bg-lime-400/10 px-2.5 py-1 rounded-full flex items-center gap-1 shrink-0">
                <Award className="w-3.5 h-3.5" />
                {content.featured.card1Score}
              </span>
            </div>
          </div>

          {/* Card 2: Politeknik Batu & Bengkel Rajawali Motor */}
          <div className="md:col-span-6 rounded-2xl bg-white p-4 sm:p-6 text-zinc-900 shadow-xl flex flex-col justify-between min-h-[220px]">
            <div>
              <div className="flex items-center justify-between text-xs text-zinc-500 mb-3 pb-2.5 border-b border-zinc-100">
                <span className="font-semibold text-zinc-800 text-[11px] sm:text-xs">Politeknik Batu & Rajawali Motor</span>
                <span className="text-[10px] sm:text-xs bg-zinc-100 px-2 py-0.5 rounded text-zinc-600">
                  {content.featured.card2Badge}
                </span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-zinc-900 mb-2 leading-snug">
                {content.featured.card2Title}
              </h4>
              <p className="text-xs text-zinc-600 leading-relaxed">
                {content.featured.card2Desc}
              </p>
            </div>

            <div className="mt-3 pt-3 border-t border-zinc-100 grid grid-cols-3 gap-1.5 sm:gap-2 text-center">
              <div className="bg-zinc-50 p-2 sm:p-2.5 rounded-xl">
                <div className="font-bold text-xs sm:text-sm text-zinc-900">UML & ERD</div>
                <div className="text-[9px] sm:text-[10px] text-zinc-500 leading-tight mt-0.5">{content.featured.stat1Label}</div>
              </div>
              <div className="bg-zinc-50 p-2 sm:p-2.5 rounded-xl">
                <div className="font-bold text-xs sm:text-sm text-zinc-900">Laravel</div>
                <div className="text-[9px] sm:text-[10px] text-zinc-500 leading-tight mt-0.5">{content.featured.stat2Label}</div>
              </div>
              <div className="bg-zinc-50 p-2 sm:p-2.5 rounded-xl">
                <div className="font-bold text-xs sm:text-sm text-zinc-900">Canva / CapCut</div>
                <div className="text-[9px] sm:text-[10px] text-zinc-500 leading-tight mt-0.5">{content.featured.stat3Label}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
