import { ArrowRight, Check } from 'lucide-react'

export default function Workflow({ steps, activeStep = 1 }) {
  return (
    <div className="workflow">
      {steps.map((step, idx) => {
        const isDone = step.id < activeStep
        const isActive = step.id === activeStep
        return (
          <div className="workflow-step-wrap" key={step.id}>
            <div className={`workflow-step ${isDone ? 'done' : ''} ${isActive ? 'active' : ''}`}>
              <div className="workflow-step-marker">{isDone ? <Check size={14} /> : step.id}</div>
              <div className="workflow-step-text">
                <strong>{step.label}</strong>
                <span>{step.description}</span>
              </div>
            </div>
            {idx < steps.length - 1 && (
              <ArrowRight size={16} className="workflow-arrow" />
            )}
          </div>
        )
      })}
    </div>
  )
}
