export function Card({ children, className = '', hover = false, ...props }) {
  const baseStyles = 'rounded-[10px] border border-neon-cyan/12 bg-cyber-bg-deep p-5 transition-all duration-300';
  const hoverStyles = hover ? 'hover:border-neon-cyan/25 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)]' : '';

  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`} {...props}>
      {children}
    </div>
  );
}