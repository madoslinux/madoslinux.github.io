import { useTranslation } from 'react-i18next';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';

const specs = ['cpu', 'ram', 'gpu', 'storage', 'boot'];

export function Hardware() {
  const { t } = useTranslation();

  return (
    <section id="hardware" className="py-24 bg-cyber-bg-base">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label={t('hardware.label')}
          title={t('hardware.title')}
          subtitle={t('hardware.subtitle')}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Specs */}
          <div className="space-y-4">
            {specs.map((spec) => (
              <Card key={spec}>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-[10px] bg-neon-cyan/10 border border-neon-cyan/20 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-nord6">{t(`hardware.${spec}`)}</div>
                    <div className="text-sm text-nord4/60">{t(`hardware.${spec}Desc`)}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* System Monitor Preview */}
          <Card className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <svg className="w-5 h-5 text-neon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span className="text-xs font-semibold uppercase tracking-widest text-neon-purple">
                {t('hardware.monitor')}
              </span>
            </div>
            
            {[
              { label: t('hardware.ramInUse'), value: 42, color: 'bg-neon-cyan' },
              { label: t('hardware.cpuAvg'), value: 28, color: 'bg-neon-purple' },
              { label: t('hardware.zram'), value: 67, color: 'bg-neon-green' },
              { label: t('hardware.disk'), value: 23, color: 'bg-neon-yellow' },
            ].map((stat) => (
              <div key={stat.label} className="mb-4 last:mb-0">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-nord4/70">{stat.label}</span>
                  <span className="text-neon-cyan font-mono">{stat.value}%</span>
                </div>
                <div className="h-2 bg-cyber-bg-overlay rounded-full overflow-hidden">
                  <div className={`h-full ${stat.color} rounded-full transition-all duration-1000`} style={{ width: `${stat.value}%` }} />
                </div>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </section>
  );
}