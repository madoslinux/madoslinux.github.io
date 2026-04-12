export function Badge({ children, variant = 'default', className = '', ...props }) {
  const baseStyles = 'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider';
  
  const variants = {
    default: 'bg-neon-purple/10 text-neon-purple border border-neon-purple/25',
    cyan: 'bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/25',
    green: 'bg-neon-green/10 text-neon-green border border-neon-green/25',
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </span>
  );
}