import { useTranslation } from 'react-i18next';
import { SectionHeader } from '../ui/SectionHeader';

export function Desktop() {
  const { t } = useTranslation();

  return (
    <section id="desktop" className="py-24 bg-cyber-bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label={t('showcase.label')}
          title={t('showcase.title')}
          subtitle={t('showcase.subtitle')}
        />

        {/* Browser Preview Frame */}
        <div className="rounded-[16px] overflow-hidden border border-neon-cyan/15 shadow-2xl">
          {/* Browser Header */}
          <div className="bg-cyber-bg-deep px-4 py-3 flex items-center gap-3 border-b border-neon-cyan/10">
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-nord11" />
              <span className="w-3 h-3 rounded-full bg-nord13" />
              <span className="w-3 h-3 rounded-full bg-nord14" />
            </div>
            <div className="flex-1 text-center text-xs text-nord4/50 font-mono">
              madoslinux.github.io
            </div>
          </div>
          {/* Placeholder for desktop screenshot */}
          <div className="bg-cyber-bg-base aspect-[16/9] flex items-center justify-center">
            <div className="text-center text-nord4/40">
              <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
              <p className="text-sm">Desktop Preview</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}