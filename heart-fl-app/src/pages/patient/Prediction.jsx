import { useState } from 'react'
import { HeartPulse, ShieldCheck, Activity } from 'lucide-react'
import Panel from '../../components/Panel.jsx'

const initialForm = {
  age: '',
  sex: 'female',
  chestPainType: 'typical',
  restingBP: '',
  cholesterol: '',
  maxHeartRate: '',
  smoking: 'no',
  angina: 'no',
}

// Purely local, illustrative scoring heuristic — NOT a real medical model.
// This exists only so the demo UI has something to react to.
function computeDemoRisk(form) {
  let score = 0
  const age = Number(form.age) || 0
  const bp = Number(form.restingBP) || 0
  const chol = Number(form.cholesterol) || 0
  const maxHr = Number(form.maxHeartRate) || 0

  if (age > 55) score += 20
  else if (age > 40) score += 10

  if (bp > 140) score += 20
  else if (bp > 120) score += 10

  if (chol > 240) score += 20
  else if (chol > 200) score += 10

  if (maxHr && maxHr < 120) score += 10

  if (form.smoking === 'yes') score += 15
  if (form.angina === 'yes') score += 15
  if (form.chestPainType === 'asymptomatic') score += 10

  score = Math.min(score, 95)

  let label = 'Low Risk'
  if (score >= 60) label = 'High Risk'
  else if (score >= 30) label = 'Moderate Risk'

  return { score, label }
}

export default function Prediction() {
  const [form, setForm] = useState(initialForm)
  const [result, setResult] = useState(null)

  function updateField(key, value) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setResult(computeDemoRisk(form))
  }

  const resultTone =
    result?.label === 'High Risk' ? 'danger' : result?.label === 'Moderate Risk' ? 'pending' : 'success'

  return (
    <div className="page-grid">
      <div className="two-col prediction-layout">
        <Panel title="Patient Details" subtitle="Enter the values below to estimate heart disease risk">
          <form className="prediction-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <label className="field">
                <span className="field-label">Age</span>
                <div className="field-input">
                  <input
                    type="number"
                    min="1"
                    max="120"
                    required
                    value={form.age}
                    onChange={(e) => updateField('age', e.target.value)}
                    placeholder="e.g. 54"
                  />
                </div>
              </label>

              <label className="field">
                <span className="field-label">Sex</span>
                <div className="field-input select-input">
                  <select value={form.sex} onChange={(e) => updateField('sex', e.target.value)}>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                  </select>
                </div>
              </label>

              <label className="field">
                <span className="field-label">Chest Pain Type</span>
                <div className="field-input select-input">
                  <select
                    value={form.chestPainType}
                    onChange={(e) => updateField('chestPainType', e.target.value)}
                  >
                    <option value="typical">Typical Angina</option>
                    <option value="atypical">Atypical Angina</option>
                    <option value="non-anginal">Non-Anginal Pain</option>
                    <option value="asymptomatic">Asymptomatic</option>
                  </select>
                </div>
              </label>

              <label className="field">
                <span className="field-label">Resting Blood Pressure (mmHg)</span>
                <div className="field-input">
                  <input
                    type="number"
                    min="60"
                    max="260"
                    required
                    value={form.restingBP}
                    onChange={(e) => updateField('restingBP', e.target.value)}
                    placeholder="e.g. 130"
                  />
                </div>
              </label>

              <label className="field">
                <span className="field-label">Cholesterol (mg/dL)</span>
                <div className="field-input">
                  <input
                    type="number"
                    min="80"
                    max="600"
                    required
                    value={form.cholesterol}
                    onChange={(e) => updateField('cholesterol', e.target.value)}
                    placeholder="e.g. 220"
                  />
                </div>
              </label>

              <label className="field">
                <span className="field-label">Maximum Heart Rate</span>
                <div className="field-input">
                  <input
                    type="number"
                    min="60"
                    max="220"
                    required
                    value={form.maxHeartRate}
                    onChange={(e) => updateField('maxHeartRate', e.target.value)}
                    placeholder="e.g. 150"
                  />
                </div>
              </label>

              <label className="field">
                <span className="field-label">Smoking</span>
                <div className="field-input select-input">
                  <select value={form.smoking} onChange={(e) => updateField('smoking', e.target.value)}>
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </select>
                </div>
              </label>

              <label className="field">
                <span className="field-label">Exercise-Induced Angina</span>
                <div className="field-input select-input">
                  <select value={form.angina} onChange={(e) => updateField('angina', e.target.value)}>
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </select>
                </div>
              </label>
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              <HeartPulse size={16} /> Predict Heart Disease
            </button>
          </form>
        </Panel>

        <div className="prediction-side">
          <Panel title="Prediction Result">
            {result ? (
              <div className={`result-card tone-${resultTone}`}>
                <Activity size={28} />
                <div>
                  <span className="result-label">{result.label}</span>
                  <span className="result-score">Estimated risk score: {result.score}%</span>
                </div>
              </div>
            ) : (
              <div className="result-card empty">
                <HeartPulse size={24} />
                <span>Fill in the form and click Predict to see a result here.</span>
              </div>
            )}
          </Panel>

          <Panel className="privacy-panel">
            <div className="privacy-message">
              <ShieldCheck size={20} />
              <p>
                Your inputs stay in this browser session. This demo does not send data to any
                server, hospital, or third party, and no real prediction model is connected yet.
              </p>
            </div>
          </Panel>
        </div>
      </div>
    </div>
  )
}
