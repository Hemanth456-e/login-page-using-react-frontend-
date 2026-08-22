import { HeartPulse } from 'lucide-react'

export default function Sidebar({ items, activePage, onNavigate, roleLabel }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="sidebar-brand-icon">
          <HeartPulse size={20} strokeWidth={2.4} />
        </div>
        <div className="sidebar-brand-text">
          <strong>CardioFed</strong>
          <span>{roleLabel}</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = item.key === activePage
          return (
            <button
              key={item.key}
              className={`sidebar-link ${isActive ? 'active' : ''} ${item.danger ? 'danger' : ''}`}
              onClick={() => onNavigate(item.key)}
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </button>
          )
        })}
      </nav>
    </aside>
  )
}
