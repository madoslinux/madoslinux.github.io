import { useTranslation } from 'react-i18next';
import { Button } from '../ui/Button';

export function Hero() {
  const { t } = useTranslation();

  const stats = [
    { value: '800MB', label: t('hero.ramUsage') },
    { value: '1.9GB', label: t('hero.minRam') },
    { value: 'GPL-3.0', label: t('hero.openSource') },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-cyber-bg-deep via-cyber-bg-base to-cyber-bg-deep">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(93,216,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(93,216,238,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>
      
      {/* Glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-neon-purple/10 to-transparent blur-[100px]" />
      <div className="absolute top-20 right-[-100px] w-[400px] h-[400px] bg-neon-cyan/5 rounded-full blur-[80px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-neon-purple/10 border border-neon-purple/25 rounded-full mb-8">
          <span className="w-2 h-2 bg-neon-purple rounded-full animate-pulse" />
          <span className="text-sm font-semibold text-neon-purple uppercase tracking-wider">
            {t('hero.badge')}
          </span>
        </div>

        {/* Logo/Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
            {t('hero.tagline')}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-nord4/80 max-w-3xl mx-auto mb-10 leading-relaxed">
          {t('hero.subtitle')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button variant="primary" className="text-base px-8 py-3">
            {t('hero.download')}
          </Button>
          <Button variant="secondary" className="text-base px-8 py-3">
            {t('hero.viewOnGitHub')}
          </Button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold font-mono text-neon-cyan mb-1">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-widest text-nord4/60">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}