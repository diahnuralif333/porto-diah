import React from 'react'
import { Calendar, Briefcase } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { contentData } from '../data/portfolioData'

export const ProcessSection: React.FC = () => {
  const { lang } = useLanguage()
  const content = contentData[lang]

  return (
    <section id="process" className="py-14 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      {/* Section Header */}
      <div className="text-center mb-10 sm:mb-16">
        <span className="font-editorial italic text-xl sm:text-2xl text-zinc-500 block mb-1 sm:mb-2">
          {content.process.tag}
        </span>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-zinc-950 tracking-tight">
          {content.process.title}
        </h2>
      </div>

      {/* 3 Step Cards with Curved Connectors */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 relative mb-16 sm:mb-24">
        {content.process.steps.map((step, idx) => (
          <div
            key={idx}
            className={`relative rounded-2xl sm:rounded-3xl bg-white p-6 sm:p-8 border border-zinc-200/90 shadow-md sm:shadow-lg shadow-zinc-100 transition-all hover:-translate-y-1 hover:shadow-xl ${
              idx === 1 ? 'md:-translate-y-3 border-lime-300 ring-2 ring-lime-400/20' : ''
            }`}
          >
            {/* Step Number */}
            <div className="font-editorial text-3xl sm:text-5xl text-zinc-400 mb-4 sm:mb-8 font-light">
              {step.number}
            </div>

            {/* Title & Description */}
            <h3 className="text-lg sm:text-xl font-bold text-zinc-950 mb-2 sm:mb-3">
              {step.title}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              {step.description}
            </p>

            {/* Connected decorative curved line for desktop */}
            {idx < 2 && (
              <div className="hidden md:block absolute -right-5 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path
                    d="M 4 16 C 12 8, 20 24, 28 16"
                    stroke="#84cc16"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeDasharray="3 3"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Experience Timeline Section */}
      <div id="experience" className="pt-10 sm:pt-12 border-t border-zinc-200/80">
        <div className="text-center mb-8 sm:mb-12">
          <span className="font-editorial italic text-xl sm:text-2xl text-zinc-500 block mb-1">
            {content.process.expTag}
          </span>
          <h3 className="text-2xl sm:text-4xl font-bold text-zinc-950">
            {content.process.expTitle}
          </h3>
          <p className="text-zinc-500 text-xs sm:text-sm mt-1.5 sm:mt-2 px-2">
            {content.process.expSub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {content.process.experiences.map((exp, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-white border border-zinc-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5 sm:mb-3">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-zinc-100 text-zinc-700 text-[11px] sm:text-xs font-semibold">
                    <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-zinc-500" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-zinc-950 mb-1">
                  {exp.role}
                </h4>
                <div className="text-xs font-semibold text-lime-700 mb-2.5 sm:mb-3 flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{exp.place}</span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
