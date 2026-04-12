import { useTranslation } from 'react-i18next';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';

const features = [
  'aiIntegration',
  'adaptiveDesktop',
  'lowRam',
  'multiGpu',
  'persistentUsb',
  'gtkInstaller',
  'devReady',
  'languages',
  'wifi',
  'secure',
  'steamDeck',
  'xbox',
];

export function Features() {
  const { t } = useTranslation();

  return (
    <section id="features" className="py-24 bg-cyber-bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label={t('features.label')}
          title={t('features.title')}
          subtitle={t('features.subtitle')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card key={feature} hover className="group">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-[10px] bg-neon-cyan/10 border border-neon-cyan/20 flex items-center justify-center shrink-0 group-hover:border-neon-cyan/40 transition-colors">
                  <svg className="w-5 h-5 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-nord6 mb-1 group-hover:text-neon-cyan transition-colors">
                    {t(`features.${feature}`)}
                  </h3>
                  <p className="text-sm text-nord4/60 leading-relaxed">
                    {t(`features.${feature}Desc`)}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}