const bars = [
  { height: 'h-16', color: 'bg-emerald-500' },
  { height: 'h-24', color: 'bg-rose-500' },
  { height: 'h-20', color: 'bg-emerald-500' },
  { height: 'h-28', color: 'bg-emerald-500' },
  { height: 'h-14', color: 'bg-rose-500' },
  { height: 'h-32', color: 'bg-emerald-500' },
]

const CandlestickChart = () => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">Market Trend</p>
          <h2 className="text-lg font-semibold text-slate-950">BTC / USD</h2>
        </div>
        <span className="text-sm font-semibold text-emerald-600">+3.42%</span>
      </div>
      <div className="mt-8 flex h-40 items-end justify-between gap-4">
        {bars.map((bar, index) => (
          <div key={index} className="flex flex-1 justify-center">
            <div className={`w-8 rounded-full ${bar.height} ${bar.color}`} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CandlestickChart
