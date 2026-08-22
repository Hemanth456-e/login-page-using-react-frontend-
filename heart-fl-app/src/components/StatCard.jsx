export default function StatCard({ icon: Icon, label, value, tone = 'default', hint }) {
  return (
    <div className={`stat-card tone-${tone}`}>
      <div className="stat-card-icon">
        <Icon size={20} />
      </div>
      <div className="stat-card-body">
        <span className="stat-card-label">{label}</span>
        <span className="stat-card-value">{value}</span>
        {hint && <span className="stat-card-hint">{hint}</span>}
      </div>
    </div>
  )
}
