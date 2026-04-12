import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'en', name: 'EN' },
  { code: 'es', name: 'ES' },
  { code: 'fr', name: 'FR' },
  { code: 'pt', name: 'PT' },
  { code: 'it', name: 'IT' },
  { code: 'de', name: 'DE' },
  { code: 'zh', name: '中文' },
  { code: 'ja', name: '日本語' },
  { code: 'ko', name: '한국어' },
];

export function Navbar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { to: 'features', label: t('nav.features') },
    { to: 'desktop', label: t('nav.desktop') },
    { to: 'hardware', label: t('nav.hardware') },
    { to: 'download', label: t('nav.download') },
    { to: 'credits', label: t('nav.credits') },
    { to: 'roadmap', label: t('nav.roadmap') },
  ];

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-cyber-bg-deep/98 backdrop-blur-xl shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <span className="text-lg font-bold text-nord6">madOS</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                smooth={true}
                duration={300}
                className="text-sm text-nord4/70 hover:text-neon-cyan cursor-pointer transition-colors uppercase tracking-wide"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          {/* Language Selector */}
          <select
            value={i18n.language}
            onChange={(e) => changeLanguage(e.target.value)}
            className="hidden md:block bg-cyber-bg-surface border border-neon-cyan/20 text-nord6 text-xs px-2 py-1 rounded cursor-pointer"
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>{lang.name}</option>
            ))}
          </select>

          <a
            href="https://github.com/madoslinux/madoslinux"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 bg-neon-cyan/10 border border-neon-cyan/20 rounded-[10px] text-xs text-nord4 hover:border-neon-cyan transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            {t('nav.github')}
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className={`w-5 h-0.5 bg-neon-cyan transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}/>
            <span className={`w-5 h-0.5 bg-neon-cyan transition-all ${mobileOpen ? 'opacity-0' : ''}`}/>
            <span className={`w-5 h-0.5 bg-neon-cyan transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}/>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-cyber-bg-deep/98 backdrop-blur-xl border-t border-neon-cyan/10">
          <ul className="flex flex-col p-4 gap-3">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  smooth={true}
                  duration={300}
                  className="block text-sm text-nord4 hover:text-neon-cyan py-2"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-3 border-t border-neon-cyan/10">
              <select
                value={i18n.language}
                onChange={(e) => changeLanguage(e.target.value)}
                className="w-full bg-cyber-bg-surface border border-neon-cyan/20 text-nord6 text-sm px-3 py-2 rounded cursor-pointer"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>{lang.name}</option>
                ))}
              </select>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}