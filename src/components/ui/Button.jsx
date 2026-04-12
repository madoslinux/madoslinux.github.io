export function Button({ children, variant = 'primary', className = '', ...props }) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[10px] font-semibold text-sm uppercase tracking-wide transition-all duration-200 cursor-pointer';
  
  const variants = {
    primary: 'bg-gradient-to-r from-neon-purple to-nord10 text-white shadow-[0_4px_15px_rgba(224,124,216,0.3)] hover:shadow-[0_6px_25px_rgba(224,124,216,0.4)] hover:-translate-y-0.5',
    secondary: 'bg-transparent text-neon-cyan border border-neon-cyan/35 hover:bg-neon-cyan/10 hover:border-neon-cyan hover:shadow-[0_0_20px_rgba(93,216,238,0.15)]',
    download: 'bg-gradient-to-r from-neon-cyan to-nord10 text-white shadow-[0_4px_15px_rgba(93,216,238,0.25)] hover:shadow-[0_6px_25px_rgba(93,216,238,0.35)] hover:-translate-y-0.5',
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}