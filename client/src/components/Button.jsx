const Button = ({ children, onClick, type = 'button', loading = false, variant = 'primary', className = '', disabled = false }) => {
  const baseClasses = 'group inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 disabled:cursor-not-allowed disabled:opacity-70';

  const variants = {
    primary: 'bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-800 text-white shadow-lg shadow-indigo-200 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.98]',
    secondary: 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-300 hover:-translate-y-0.5 active:scale-[0.98]'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading || disabled}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
          Please wait...
        </span>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
