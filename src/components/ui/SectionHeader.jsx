export function SectionHeader({ label, title, subtitle, className = '' }) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      {label && (
        <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest text-neon-purple bg-neon-purple/10 border border-neon-purple/20 rounded-full mb-4">
          {label}
        </span>
      )}
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold text-nord6 mb-3 tracking-tight">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="text-nord4/80 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}