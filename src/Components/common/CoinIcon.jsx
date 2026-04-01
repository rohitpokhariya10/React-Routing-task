const coinStyles = {
  BTC: 'bg-amber-500 text-slate-950',
  ETH: 'bg-violet-500 text-white',
  SOL: 'bg-emerald-400 text-slate-950',
}

const CoinIcon = ({ symbol = 'BTC' }) => {
  const style = coinStyles[symbol] || 'bg-slate-700 text-white'

  return (
    <span
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold ${style}`}
      aria-label={`${symbol} icon`}
      title={symbol}
    >
      {symbol}
    </span>
  )
}

export default CoinIcon
