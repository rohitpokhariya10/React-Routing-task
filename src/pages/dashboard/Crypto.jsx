import CoinIcon from '../../components/common/CoinIcon'
import CandlestickChart from '../../components/charts/CandlestickChart'
import { marketData } from '../../data/marketData'

const Crypto = () => {
  return (
    <section className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        {marketData.map((coin) => (
          <article key={coin.symbol} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <CoinIcon symbol={coin.symbol} />
              <span className={`text-sm font-semibold ${coin.change >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                {coin.change >= 0 ? '+' : ''}
                {coin.change}%
              </span>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-950">{coin.name}</h3>
            <p className="mt-1 text-sm text-slate-500">{coin.symbol}</p>
            <p className="mt-4 text-2xl font-bold text-slate-950">${coin.price.toLocaleString()}</p>
          </article>
        ))}
      </div>
      <CandlestickChart />
    </section>
  )
}

export default Crypto
