import { useTranslation } from 'react-i18next';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

const pillars = [
  {
    id: 'reliability',
    title: 'Reliability',
    icon: '🔒',
    items: [
      { title: 'Improved suspend/resume', priority: 'high', status: 'progress' },
      { title: 'Better power management', priority: 'medium', status: 'planned' },
      { title: 'LVM encrypted installer', priority: 'high', status: 'planned' },
    ],
  },
  {
    id: 'scalability',
    title: 'Scalability',
    icon: '📈',
    items: [
      { title: 'HiDPI support', priority: 'medium', status: 'done' },
      { title: 'Multi-monitor configs', priority: 'high', status: 'progress' },
      { title: 'ARM64 build', priority: 'low', status: 'planned' },
    ],
  },
  {
    id: 'community',
    title: 'Community',
    icon: '👥',
    items: [
      { title: 'Install script wizard', priority: 'medium', status: 'done' },
      { title: 'madOS Configurator GUI', priority: 'high', status: 'planned' },
      { title: 'Hardware database', priority: 'low', status: 'planned' },
    ],
  },
];

export function Roadmap() {
  const { t } = useTranslation();

  return (
    <section id="roadmap" className="py-24 bg-cyber-bg-base">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label={t('roadmap.label')}
          title={t('roadmap.title')}
          subtitle={t('roadmap.subtitle')}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <Card key={pillar.id} className="p-5">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-neon-cyan/10">
                <span className="text-xl">{pillar.icon}</span>
                <h3 className="font-semibold text-nord6 uppercase text-sm tracking-wider">
                  {pillar.title}
                </h3>
              </div>
              <div className="space-y-3">
                {pillar.items.map((item, index) => (
                  <div key={index} className={`border-l-2 pl-3 py-1 ${
                    item.priority === 'high' ? 'border-neon-cyan' : 
                    item.priority === 'medium' ? 'border-neon-purple' : 'border-nord3'
                  }`}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-medium text-nord6">{item.title}</span>
                    </div>
                    <span className={`text-xs px-1.5 py-0.5 rounded ${
                      item.status === 'done' ? 'bg-neon-green/10 text-neon-green' :
                      item.status === 'progress' ? 'bg-neon-yellow/10 text-neon-yellow' :
                      'bg-nord3/30 text-nord4'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}