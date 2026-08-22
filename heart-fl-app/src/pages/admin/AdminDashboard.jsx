import { Building2, Activity, Cpu, Gauge, Target, Crosshair, Percent } from 'lucide-react'
import StatCard from '../../components/StatCard.jsx'
import Panel from '../../components/Panel.jsx'
import Workflow from '../../components/Workflow.jsx'
import ActivityFeed from '../../components/ActivityFeed.jsx'
import { hospitals, globalModelStats, recentActivity, flWorkflowSteps } from '../../data/sampleData.js'

export default function AdminDashboard() {
  const activeClients = hospitals.filter((h) => h.status !== 'idle').length

  return (
    <div className="page-grid">
      <div className="stat-grid">
        <StatCard icon={Building2} label="Total Hospitals" value={hospitals.length} tone="primary" />
        <StatCard icon={Activity} label="Active Clients" value={activeClients} tone="success" />
        <StatCard icon={Cpu} label="Current FL Round" value={globalModelStats.round} tone="pending" />
        <StatCard icon={Gauge} label="Global Model Status" value="Aggregating" tone="primary" hint={globalModelStats.version} />
      </div>

      <div className="stat-grid">
        <StatCard icon={Percent} label="Accuracy" value={`${globalModelStats.accuracy}%`} />
        <StatCard icon={Target} label="Precision" value={`${globalModelStats.precision}%`} />
        <StatCard icon={Crosshair} label="Recall" value={`${globalModelStats.recall}%`} />
        <StatCard icon={Gauge} label="F1-Score" value={`${globalModelStats.f1}%`} />
      </div>

      <div className="two-col">
        <Panel title="Hospital / Client Status" subtitle="Live snapshot across the federation">
          <div className="mini-status-list">
            {hospitals.map((h) => (
              <div className="mini-status-row" key={h.id}>
                <div>
                  <strong>{h.name}</strong>
                  <span className="mini-status-id">{h.id}</span>
                </div>
                <span className={`tag ${h.status === 'connected' ? 'tag-success' : h.status === 'training' ? 'tag-pending' : 'tag-neutral'}`}>
                  {h.status}
                </span>
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="Recent Activity">
          <ActivityFeed items={recentActivity} />
        </Panel>
      </div>

      <Panel title="Federated Learning Workflow" subtitle={`Round ${globalModelStats.round} in progress`}>
        <Workflow steps={flWorkflowSteps} activeStep={3} />
      </Panel>
    </div>
  )
}
