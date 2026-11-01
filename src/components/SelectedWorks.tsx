import React from 'react'
import { FolderGit2 } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { contentData } from '../data/portfolioData'

export const SelectedWorks: React.FC = () => {
  const { lang } = useLanguage()
  const content = contentData[lang]

  return (
    <section id="projects" className="py-14 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10 sm:mb-16">
        <span className="font-editorial italic text-xl sm:text-2xl text-zinc-500 block mb-1 sm:mb-2">
          {content.works.tag}
        </span>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-zinc-950 tracking-tight">
          {content.works.title}
        </h2>
        <p className="text-zinc-500 text-xs sm:text-sm mt-1.5 sm:mt-2 max-w-lg mx-auto px-2">
          {content.works.subtitle}
        </p>
      </div>

      {/* 2x2 Work Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
        {content.works.projects.map((project) => (
          <div
            key={project.id}
            className="group flex flex-col rounded-2xl sm:rounded-3xl bg-white border border-zinc-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:border-zinc-300 transition-all duration-300"
          >
            {/* Visual Mockup Box */}
            <div className="h-56 sm:h-72 bg-gradient-to-b from-zinc-100 to-zinc-200/60 p-3 sm:p-6 flex items-center justify-center relative overflow-hidden border-b border-zinc-100">
              {/* KaryaTaniShop Dashboard */}
              {project.id === 'karyatanishop' && (
                <div className="w-full max-w-[340px] rounded-xl bg-white border border-zinc-200 shadow-xl p-2.5 sm:p-3.5 transform group-hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center justify-between pb-1.5 sm:pb-2 mb-1.5 sm:mb-2 border-b border-zinc-100">
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-400"></span>
                      <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                      <span className="w-2 h-2 rounded-full bg-green-400"></span>
                    </div>
                    <span className="text-[9px] sm:text-[10px] text-zinc-500 font-mono">karyatani.shop/admin</span>
                  </div>
                  <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-bold text-zinc-800 mb-1.5 sm:mb-2">
                    <span className="truncate pr-1">{lang === 'id' ? 'Sistem Penjualan Pertanian' : 'Agricultural POS & Catalog'}</span>
                    <span className="text-[10px] sm:text-xs bg-lime-400 text-zinc-950 px-2 py-0.5 rounded font-semibold shrink-0">3 Roles</span>
                  </div>
                  <div className="grid grid-cols-3 gap-1 sm:gap-2 mb-1.5 sm:mb-2 text-center">
                    <div className="bg-zinc-50 p-1 sm:p-1.5 rounded-lg">
                      <div className="text-[7px] sm:text-[8px] text-zinc-400">Admin</div>
                      <div className="text-[9px] sm:text-[10px] font-bold text-zinc-800 truncate">{lang === 'id' ? 'Master Data' : 'Data Master'}</div>
                    </div>
                    <div className="bg-zinc-50 p-1 sm:p-1.5 rounded-lg">
                      <div className="text-[7px] sm:text-[8px] text-zinc-400">Kasir</div>
                      <div className="text-[9px] sm:text-[10px] font-bold text-zinc-800 truncate">{lang === 'id' ? 'Transaksi POS' : 'POS Sales'}</div>
                    </div>
                    <div className="bg-zinc-50 p-1 sm:p-1.5 rounded-lg">
                      <div className="text-[7px] sm:text-[8px] text-zinc-400">Pelanggan</div>
                      <div className="text-[9px] sm:text-[10px] font-bold text-zinc-800 truncate">{lang === 'id' ? 'Katalog' : 'Catalog'}</div>
                    </div>
                  </div>
                  <div className="h-8 sm:h-10 bg-gradient-to-r from-lime-100/60 to-emerald-100/60 rounded-lg flex items-center justify-center text-[9px] sm:text-[10px] font-semibold text-zinc-700 px-2 text-center">
                    {lang === 'id' ? 'ERD & Use Case Terverifikasi' : 'ERD & Use Case Verified'}
                  </div>
                </div>
              )}

              {/* Antrean Rajawali Motor */}
              {project.id === 'antrean-rajawali' && (
                <div className="w-full max-w-[340px] rounded-xl bg-white border border-zinc-200 shadow-xl p-2.5 sm:p-3.5 transform group-hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center justify-between pb-1.5 sm:pb-2 mb-1.5 sm:mb-2 border-b border-zinc-100">
                    <span className="text-[9px] sm:text-[10px] font-bold text-zinc-800 truncate">BENGKEL RAJAWALI MOTOR</span>
                    <span className="text-[8px] sm:text-[9px] bg-zinc-100 px-1.5 py-0.5 rounded text-zinc-600 shrink-0">Live Queue</span>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                    <div className="bg-lime-400/20 border border-lime-300 p-1.5 sm:p-2 rounded-lg text-center">
                      <div className="text-[8px] sm:text-[9px] text-zinc-600 font-medium">
                        {lang === 'id' ? 'Sedang Dilayani' : 'Serving Ticket'}
                      </div>
                      <div className="text-xl sm:text-2xl font-black text-zinc-950 font-mono">A-024</div>
                    </div>
                    <div className="bg-zinc-50 p-1.5 sm:p-2 rounded-lg text-center">
                      <div className="text-[8px] sm:text-[9px] text-zinc-500 font-medium">
                        {lang === 'id' ? 'Sisa Antrean' : 'Remaining'}
                      </div>
                      <div className="text-xl sm:text-2xl font-black text-zinc-700 font-mono">08</div>
                    </div>
                  </div>
                  <div className="text-[8px] sm:text-[9px] text-zinc-500 flex justify-between">
                    <span>{lang === 'id' ? 'Est: 25 Menit' : 'Est: 25 Min'}</span>
                    <span className="text-emerald-600 font-bold">{lang === 'id' ? 'Database Synced' : 'Database Synced'}</span>
                  </div>
                </div>
              )}

              {/* Konten Digital Politeknik Batu */}
              {project.id === 'politeknik-batu' && (
                <div className="w-full max-w-[320px] rounded-xl bg-zinc-950 text-white p-3 sm:p-3.5 shadow-xl transform group-hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center justify-between mb-2 pb-1.5 sm:pb-2 border-b border-zinc-800">
                    <span className="text-[9px] sm:text-[10px] font-bold text-lime-400 truncate">POLITEKNIK BATU MEDIA</span>
                    <span className="text-[8px] sm:text-[9px] bg-zinc-800 text-zinc-300 px-1.5 py-0.5 rounded shrink-0">Instagram</span>
                  </div>
                  <div className="p-2 sm:p-2.5 rounded-lg bg-zinc-900 mb-2 border border-zinc-800">
                    <div className="text-[10px] sm:text-[11px] font-semibold text-zinc-100">
                      {lang === 'id' ? 'Content Calendar & Soft Selling' : 'Content Planning & Soft Selling'}
                    </div>
                    <div className="text-[8px] sm:text-[9px] text-zinc-400 mt-0.5">Poster • Pamflet • Banner • Reels</div>
                  </div>
                  <div className="text-[8px] sm:text-[9px] text-zinc-400 flex justify-between">
                    <span>Canva & CapCut</span>
                    <span className="text-lime-400 font-semibold">Engagement</span>
                  </div>
                </div>
              )}

              {/* Publikasi HMSI */}
              {project.id === 'publikasi-hmsi' && (
                <div className="w-full max-w-[320px] rounded-xl bg-white border border-zinc-200 p-3 sm:p-3.5 shadow-xl transform group-hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center justify-between mb-2 pb-1.5 sm:pb-2 border-b border-zinc-100">
                    <span className="text-[9px] sm:text-[10px] font-bold text-zinc-800 truncate">DIVISI INFOKOM HMSI</span>
                    <span className="text-[8px] sm:text-[9px] bg-lime-100 text-lime-800 px-2 py-0.5 rounded font-semibold shrink-0">
                      {lang === 'id' ? 'Organisasi' : 'Organization'}
                    </span>
                  </div>
                  <div className="p-2 sm:p-2.5 rounded-lg bg-zinc-50 mb-2">
                    <div className="text-[10px] sm:text-[11px] font-semibold text-zinc-900 truncate">
                      {lang === 'id' ? 'Publikasi Informasi & Dokumentasi' : 'Media Releases & Documentation'}
                    </div>
                    <div className="text-[8px] sm:text-[9px] text-zinc-500 mt-0.5 truncate">
                      HMSI Universitas Gajayana
                    </div>
                  </div>
                  <div className="text-[8px] sm:text-[9px] text-zinc-600 flex justify-between font-mono">
                    <span>1 Tahun</span>
                    <span className="text-zinc-800 font-bold">100% Published</span>
                  </div>
                </div>
              )}
            </div>

            {/* Info Box */}
            <div className="p-4 sm:p-6 flex items-start justify-between gap-3 sm:gap-4">
              <div className="min-w-0 flex-1">
                <h3 className="text-base sm:text-lg font-bold text-zinc-950 mb-1 group-hover:text-zinc-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 sm:px-2.5 py-0.5 rounded-md bg-zinc-100 text-zinc-700 text-[10px] sm:text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-zinc-200 flex items-center justify-center shrink-0 group-hover:bg-zinc-950 group-hover:text-white group-hover:border-zinc-950 transition-all mt-0.5">
                <FolderGit2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
