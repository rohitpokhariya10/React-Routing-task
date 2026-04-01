import { useState } from 'react'
import { BrowserRouter, NavLink, Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom'
import Icon from './Components/Icon'
import CoinIcon from './Components/CoinIcon'

const marketRows = [
  ['ETH', '0.02309756', '427,563', '+1.91'],
  ['XRP', '0.00002205', '132,691', '+0.64'],
  ['ETC', '0.00077779', '32,982', '-6.71'],
  ['LTC', '0.00485685', '31,268', '+1.88'],
  ['XMR', '0.00700518', '28,567', '-1.26'],
]

const navItems = [
  { title: 'Pages' },
  { label: 'Analytics', to: '/dashboard/analytics', group: 'Dashboards' },
  { label: 'E-Commerce', to: '/dashboard/ecommerce', group: 'Dashboards' },
  { label: 'Crypto', to: '/dashboard/crypto', group: 'Dashboards' },
  { label: 'Pages', to: '/pages' },
  { label: 'Profile', to: '/profile' },
  { label: 'Invoice', to: '/invoice' },
  { label: 'Tasks', to: '/tasks' },
  { label: 'Calendar', to: '/calendar' },
]

function Card({ label, value, sub }) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium text-gray-400">{label}</p>
        <CoinIcon text={label.slice(0, 1)} tone="indigo" />
      </div>
      <p className="mt-3 text-xl font-bold text-gray-800">{value}</p>
      <p className="mt-1 text-xs text-gray-500">{sub}</p>
    </div>
  )
}

function DashboardShell({ title, subtitle, children }) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800">{title} <span className="font-light text-gray-400">{subtitle}</span></h1>
      <div className="mt-6">{children}</div>
    </div>
  )
}

function AnalyticsPage() {
  return <DashboardShell title="Analytics" subtitle="Dashboard"><div className="grid gap-4 md:grid-cols-3"><Card label="Total Users" value="84,291" sub="+12.5% vs last month" /><Card label="Page Views" value="1.2M" sub="+8.3% vs last month" /><Card label="Bounce Rate" value="24.8%" sub="-2.1% vs last month" /></div></DashboardShell>
}

function EcommercePage() {
  return <DashboardShell title="E-Commerce" subtitle="Dashboard"><div className="grid gap-4 md:grid-cols-4"><Card label="Revenue" value="$48,295" sub="This month" /><Card label="Orders" value="1,842" sub="+16 today" /><Card label="Customers" value="9,341" sub="+182 new" /><Card label="Avg Order" value="$26.20" sub="Stable" /></div></DashboardShell>
}

function CryptoPage() {
  return (
    <DashboardShell title="Crypto" subtitle="Dashboard">
      <div className="grid gap-4 xl:grid-cols-5 md:grid-cols-2">
        <Card label="Total balance" value="$53,252" sub="2.30 BTC" />
        <Card label="USD/BTC" value="$23,077.05" sub="Volume: 132,691 BTC" />
        <Card label="LTC/BTC" value="0.00256" sub="Volume: 31,268 BTC" />
        <Card label="ETH/BTC" value="0.07334" sub="Volume: 32,982 BTC" />
        <Card label="XMR/BTC" value="0.006854" sub="Volume: 28,567 BTC" />
      </div>
      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm lg:col-span-2">
          <div className="flex items-center justify-between border-b border-gray-100 pb-3">
            <h3 className="text-sm font-semibold text-gray-800">LTC/BTC</h3>
            <div className="flex gap-1 text-xs"><button className="rounded bg-blue-600 px-3 py-1 text-white">5m</button><button className="rounded px-3 py-1 text-gray-500 hover:bg-gray-100">30m</button><button className="rounded px-3 py-1 text-gray-500 hover:bg-gray-100">1h</button></div>
          </div>
          <div className="mt-6 flex h-64 items-end gap-2">
            {[35, 60, 48, 72, 44, 88, 76, 58, 94, 66, 82, 51, 73, 55, 91, 63].map((height, index) => <div key={index} className={`flex-1 rounded-t ${index % 3 === 0 ? 'bg-red-500' : 'bg-emerald-500'}`} style={{ height: `${height}%` }} />)}
          </div>
        </div>
        <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
          <div className="border-b border-gray-100 px-4 py-3 text-sm font-semibold text-gray-800">Markets</div>
          <table className="w-full text-xs">
            <thead className="bg-gray-50"><tr><th className="px-3 py-2 text-left">Coin</th><th className="px-2 py-2 text-left">Price</th><th className="px-2 py-2 text-right">Volume</th><th className="px-2 py-2 text-right">Change</th></tr></thead>
            <tbody>
              {marketRows.map(([coin, price, volume, change]) => <tr key={coin} className="border-t border-gray-50"><td className="px-3 py-2 font-semibold text-gray-800">{coin}</td><td className="px-2 py-2 font-mono text-gray-600">{price}</td><td className="px-2 py-2 text-right text-gray-500">{volume}</td><td className={`px-2 py-2 text-right font-semibold ${change.startsWith('+') ? 'text-emerald-500' : 'text-red-500'}`}>{change}</td></tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardShell>
  )
}

function ProfilePage() {
  return (
    <DashboardShell title="Profile" subtitle="Overview">
      <div className="rounded-xl border border-gray-100 bg-white shadow-sm">
        <div className="h-36 rounded-t-xl bg-gradient-to-r from-blue-600 to-indigo-600" />
        <div className="px-6 pb-6">
          <div className="-mt-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="flex items-end gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl border-4 border-white bg-white text-2xl font-bold text-slate-700 shadow-lg">CH</div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Charles Hall</h2>
                <p className="text-sm text-gray-500">Senior Product Designer</p>
              </div>
            </div>
            <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">Edit Profile</button>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Card label="Email" value="charles@adminkit.io" sub="Primary contact" />
            <Card label="Phone" value="+91 98765 43210" sub="Work line" />
            <Card label="Location" value="New Delhi" sub="India" />
          </div>
        </div>
      </div>
    </DashboardShell>
  )
}

function InvoicePage() {
  return (
    <DashboardShell title="Invoice" subtitle="#INV-2048">
      <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-6 md:flex-row md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">Billed To</p>
            <p className="mt-2 font-semibold text-gray-800">Alice Wong</p>
            <p className="text-sm text-gray-500">24 Baker Street, London</p>
          </div>
          <div className="text-sm text-gray-500 md:text-right">
            <p>Issue Date: 02 Apr 2026</p>
            <p>Due Date: 15 Apr 2026</p>
          </div>
        </div>
        <div className="mt-6 overflow-hidden rounded-xl border border-gray-100">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                {['Item', 'Qty', 'Rate', 'Total'].map((heading) => (
                  <th key={heading} className="px-4 py-3 text-left text-xs font-medium text-gray-500">{heading}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['Admin Dashboard UI', '1', '$900', '$900'],
                ['Landing Page Design', '1', '$600', '$600'],
                ['Support & Revisions', '2', '$150', '$300'],
              ].map((row) => (
                <tr key={row[0]} className="border-t border-gray-50">
                  {row.map((cell) => <td key={cell} className="px-4 py-3 text-gray-700">{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 ml-auto w-full max-w-xs rounded-xl bg-gray-50 p-4 text-sm">
          <div className="flex justify-between text-gray-600"><span>Subtotal</span><span>$1,800</span></div>
          <div className="mt-2 flex justify-between text-gray-600"><span>Tax</span><span>$180</span></div>
          <div className="mt-2 flex justify-between border-t border-gray-200 pt-2 font-semibold text-gray-800"><span>Total</span><span>$1,980</span></div>
        </div>
      </div>
    </DashboardShell>
  )
}

function TasksPage() {
  const tasks = [
    ['Design review with product team', 'Today', 'High'],
    ['Ship sidebar responsive fixes', 'Tomorrow', 'Medium'],
    ['Refine crypto widget states', 'Friday', 'Low'],
    ['Prepare invoice export screen', 'Next Week', 'High'],
  ]

  return (
    <DashboardShell title="Tasks" subtitle="Board">
      <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-800">My Tasks</h2>
          <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">Add Task</button>
        </div>
        <div className="space-y-3">
          {tasks.map(([task, due, priority]) => (
            <div key={task} className="flex flex-col gap-3 rounded-xl border border-gray-100 p-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3">
                <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600" />
                <div>
                  <p className="font-medium text-gray-800">{task}</p>
                  <p className="text-xs text-gray-400">Due {due}</p>
                </div>
              </div>
              <span className={`w-fit rounded-full px-2.5 py-1 text-xs font-semibold ${priority === 'High' ? 'bg-rose-100 text-rose-600' : priority === 'Medium' ? 'bg-amber-100 text-amber-600' : 'bg-emerald-100 text-emerald-600'}`}>{priority}</span>
            </div>
          ))}
        </div>
      </div>
    </DashboardShell>
  )
}

function CalendarPage() {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const events = { 5: 'Sprint Review', 12: 'Client Call', 15: 'Design Sync', 22: 'Launch Prep' }

  return (
    <DashboardShell title="Calendar" subtitle="Planner">
      <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-semibold text-gray-700">April 2026</h2>
          <div className="flex gap-2">
            <button className="rounded px-3 py-1 text-sm text-gray-600 hover:bg-gray-100">Prev</button>
            <button className="rounded px-3 py-1 text-sm text-gray-600 hover:bg-gray-100">Next</button>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-1">
          {days.map((day) => <div key={day} className="py-2 text-center text-xs font-medium text-gray-400">{day}</div>)}
          {Array.from({ length: 30 }, (_, index) => {
            const day = index + 1
            const event = events[day]
            const isToday = day === 15
            return (
              <div key={day} className={`min-h-20 rounded-lg p-2 transition-colors ${isToday ? 'bg-blue-600' : 'hover:bg-gray-50'}`}>
                <div className={`text-right text-xs font-medium ${isToday ? 'text-white' : 'text-gray-600'}`}>{day}</div>
                {event ? <div className={`mt-1 truncate rounded px-1 py-0.5 text-xs ${isToday ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-700'}`}>{event}</div> : null}
              </div>
            )
          })}
        </div>
      </div>
    </DashboardShell>
  )
}

function PagesPage() {
  return (
    <DashboardShell title="Pages" subtitle="Library">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {['Landing Page', 'Pricing', 'FAQ', 'About Us', 'Contact', '404 Error'].map((item) => (
          <div key={item} className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
            <div className="text-sm font-medium text-gray-700">{item}</div>
          </div>
        ))}
      </div>
    </DashboardShell>
  )
}

function Sidebar({ collapsed, mobileOpen, closeMobile }) {
  const { pathname } = useLocation()
  return (
    <aside className={`${collapsed ? 'lg:w-16' : 'lg:w-64'} fixed inset-y-0 left-0 z-40 w-64 bg-[#1a2035] text-white transition-all duration-300 ${mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
      <div className="flex items-center gap-3 border-b border-white/10 px-4 py-5">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500 text-sm font-bold">A</div>
        {!collapsed ? <div className="flex items-center gap-2"><span className="text-lg font-bold">AdminKit</span><span className="rounded bg-blue-500 px-1.5 py-0.5 text-[10px] font-bold">PRO</span></div> : null}
      </div>
      {!collapsed ? <div className="border-b border-white/10 px-4 py-4 text-sm"><div className="font-medium">Charles Hall</div><div className="text-xs text-gray-400">Designer</div></div> : null}
      <nav className="space-y-1 px-2 py-3">
        {!collapsed ? <div className="px-3 pb-1 text-[10px] font-semibold uppercase tracking-widest text-gray-500">Dashboard & Pages</div> : null}
        {navItems.filter((item) => item.to).map((item) => (
          <NavLink key={item.to} to={item.to} onClick={closeMobile} className={() => `block rounded-lg px-3 py-2.5 text-sm transition-all ${pathname === item.to ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-white/10 hover:text-white'}`}>
            {!collapsed ? item.label : item.label.slice(0, 1)}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

function Topbar({ toggleSidebar }) {
  return (
    <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b border-gray-100 bg-white px-4 shadow-sm">
      <button onClick={toggleSidebar} className="rounded-lg p-2 text-gray-500 hover:bg-gray-100"><Icon.Menu /></button>
      <div className="flex max-w-xs flex-1 items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-500"><Icon.Search /><input className="flex-1 bg-transparent outline-none" placeholder="Search..." /></div>
      <div className="ml-auto flex items-center gap-2"><button className="rounded-lg p-2 text-gray-500 hover:bg-gray-100"><Icon.Bell /></button><button className="rounded-lg p-2 text-gray-500 hover:bg-gray-100"><Icon.Chat /></button><div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 text-sm font-bold text-white">CH</div></div>
    </header>
  )
}

function AppLayout() {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">
      <Sidebar collapsed={collapsed} mobileOpen={mobileOpen} closeMobile={() => setMobileOpen(false)} />
      {mobileOpen ? <div className="fixed inset-0 z-30 bg-slate-950/40 lg:hidden" onClick={() => setMobileOpen(false)} /> : null}
      <div className={`${collapsed ? 'lg:pl-16' : 'lg:pl-64'} flex min-h-screen flex-1 flex-col transition-all duration-300`}>
        <Topbar toggleSidebar={() => (window.innerWidth >= 1024 ? setCollapsed((v) => !v) : setMobileOpen((v) => !v))} />
        <main className="flex-1 overflow-auto"><Outlet /></main>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate to="/dashboard/crypto" replace />} />
          <Route path="/dashboard/analytics" element={<AnalyticsPage />} />
          <Route path="/dashboard/ecommerce" element={<EcommercePage />} />
          <Route path="/dashboard/crypto" element={<CryptoPage />} />
          <Route path="/pages" element={<PagesPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/invoice" element={<InvoicePage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="*" element={<Navigate to="/dashboard/crypto" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
