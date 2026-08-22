import { Cpu, Percent, Activity, RefreshCw } from 'lucide-react'
import StatCard from '../../components/StatCard.jsx'
import Panel from '../../components/Panel.jsx'
import Workflow from '../../components/Workflow.jsx'
import ActivityFeed from '../../components/ActivityFeed.jsx'
import { hospitals, flWorkflowSteps, recentActivity } from '../../data/sampleData.js'

// Demo: this portal represents City Heart Hospital (HOSP-001)
const myHospital = hospitals[0]

export default function HospitalDashboard() {
  return (
    <div className="page-grid">
      <div className="stat-grid">
        <StatCard icon={Cpu} label="Current FL Round" value={myHospital.flRound} tone="primary" />
        <StatCard icon={Activity} label="Local Training" value={myHospital.localTraining} tone="success" />
        <StatCard icon={RefreshCw} label="Model Update" value={myHospital.modelUpdate} tone="pending" />
        <StatCard icon={Percent} label="Training Progress" value={`${myHospital.trainingProgress}%`} />
      </div>

      <div className="two-col">
        <Panel title="Federated Learning Workflow">
          <Workflow steps={flWorkflowSteps} activeStep={3} />
        </Panel>
        <Panel title="Recent Activity">
          <ActivityFeed items={recentActivity.slice(0, 4)} />
        </Panel>
      </div>
    </div>
  )
}
