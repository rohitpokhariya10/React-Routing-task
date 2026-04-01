const Icon = ({ label, className = '' }) => {
  return (
    <span
      className={`inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-800 text-sm font-semibold text-white ${className}`.trim()}
      aria-label={label}
      title={label}
    >
      {label?.slice(0, 2).toUpperCase() || 'IC'}
    </span>
  )
}

export default Icon
