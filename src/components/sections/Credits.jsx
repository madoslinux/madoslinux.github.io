import { useTranslation } from 'react-i18next';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';

export function Credits() {
  const { t } = useTranslation();

  const projects = [
    { name: 'Arch Linux', url: 'https://archlinux.org' },
    { name: 'Hyprland', url: 'https://hyprland.org' },
    { name: 'Sway', url: 'https://swaywm.org' },
    { name: 'Nord', url: 'https://www.nordtheme.com' },
    { name: 'Ollama', url: 'https://ollama.com' },
    { name: 'OpenCode', url: 'https://opencode.ai' },
  ];

  return (
    <section id="credits" className="py-24 bg-cyber-bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label={t('credits.label')}
          title={t('credits.title')}
          subtitle={t('credits.subtitle')}
        />

        <div className="flex flex-wrap justify-center gap-3">
          {projects.map((project) => (
            <Card key={project.name} className="px-4 py-2">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-nord4 hover:text-neon-cyan transition-colors"
              >
                {project.name}
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}