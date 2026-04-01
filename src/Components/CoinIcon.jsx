function CoinIcon({ text, tone = 'blue' }) {
  const tones = {
    amber: 'bg-amber-500',
    blue: 'bg-blue-500',
    emerald: 'bg-emerald-500',
    indigo: 'bg-indigo-600',
    orange: 'bg-orange-500',
    slate: 'bg-slate-600',
  }

  return (
    <div className={`flex h-10 w-10 items-center justify-center rounded-full ${tones[tone] || tones.blue} text-sm font-bold text-white shadow-sm`}>
      {text}
    </div>
  )
}

export default CoinIcon
