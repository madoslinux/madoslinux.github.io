import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();

  const footerLinks = {
    project: [
      { label: t('nav.features'), to: 'features' },
      { label: t('nav.desktop'), to: 'desktop' },
      { label: t('nav.hardware'), to: 'hardware' },
      { label: t('nav.download'), to: 'download' },
    ],
    resources: [
      { label: 'GitHub', href: 'https://github.com/madoslinux/madoslinux' },
      { label: 'Documentation', href: '#' },
      { label: 'Wiki', href: '#' },
    ],
    community: [
      { label: 'Discord', href: '#' },
      { label: 'Matrix', href: '#' },
      { label: 'Reddit', href: '#' },
    ],
  };

  return (
    <footer className="bg-cyber-bg-deep border-t border-neon-cyan/10 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold text-nord6 mb-3">{t('footer.brand')}</h3>
            <p className="text-sm text-nord4/60">
              A lightweight Arch Linux distribution optimized for low-RAM systems with integrated AI assistance.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-neon-purple mb-4">
                {t(`footer.${category}`)}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.to ? (
                      <a
                        href={`#${link.to}`}
                        className="text-sm text-nord4/70 hover:text-neon-cyan transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-nord4/70 hover:text-neon-cyan transition-colors"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-neon-cyan/10 text-center">
          <p className="text-sm text-nord4/60">{t('footer.license')}</p>
        </div>
      </div>
    </footer>
  );
}