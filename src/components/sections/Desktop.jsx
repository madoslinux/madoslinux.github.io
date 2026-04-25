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
          {/* Desktop preview video */}
          <div className="bg-cyber-bg-base aspect-[289/180]">
            <video
              className="w-full h-full object-cover"
              src="/video.mp4"
              autoPlay
              loop
              muted
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
