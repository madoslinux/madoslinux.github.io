import { useTranslation } from 'react-i18next';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';

const steps = ['step1', 'step2', 'step3', 'step4'];

export function Download() {
  const { t } = useTranslation();

  return (
    <section id="download" className="py-24 bg-cyber-bg-deep">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label={t('download.label')}
          title={t('download.title')}
          subtitle={t('download.subtitle')}
        />

        <div className="max-w-3xl mx-auto">
          {/* Download Card */}
          <div className="bg-gradient-to-br from-cyber-bg-surface to-cyber-bg-elevated border border-neon-purple/15 rounded-[20px] p-8 mb-12 text-center">
            <h3 className="text-2xl font-bold text-nord6 mb-2">{t('download.development')}</h3>
            <p className="text-nord4/60 mb-6">{t('download.gettingStarted')}</p>
            <Button variant="download" className="text-lg px-10 py-4">
              {t('hero.download')}
            </Button>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-neon-cyan/10 border-2 border-neon-cyan/30 flex items-center justify-center mx-auto mb-4 text-xl font-bold text-neon-cyan">
                  {index + 1}
                </div>
                <h4 className="font-semibold text-nord6 mb-2">{t(`download.${step}`)}</h4>
                <p className="text-sm text-nord4/60 mb-2">{t(`download.${step}Desc`)}</p>
                {step === 'step2' && (
                  <code className="text-xs font-mono text-neon-cyan bg-cyber-bg-surface px-2 py-1 rounded block">
                    {t('download.step2Code')}
                  </code>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}