import { useState } from 'react'
import { HeartPulse, Lock, Mail, ChevronDown } from 'lucide-react'

const ROLES = [
  { value: 'admin', label: 'Admin' },
  { value: 'hospital', label: 'Hospital / Client' },
  { value: 'patient', label: 'User / Patient' },
]

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('admin')
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!email.trim() || !password.trim()) {
      setError('Please enter both an email/username and a password.')
      return
    }
    setError('')
    onLogin({ email: email.trim(), role })
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-brand">
          <div className="login-brand-icon">
            <HeartPulse size={26} strokeWidth={2.4} />
          </div>
          <div>
            <h1>CardioFed</h1>
            <p>Federated Heart Disease Prediction Platform</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <label className="field">
            <span className="field-label">Username or Email</span>
            <div className="field-input">
              <Mail size={18} className="field-icon" />
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                autoComplete="username"
              />
            </div>
          </label>

          <label className="field">
            <span className="field-label">Password</span>
            <div className="field-input">
              <Lock size={18} className="field-icon" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                autoComplete="current-password"
              />
            </div>
          </label>

          <label className="field">
            <span className="field-label">Login as</span>
            <div className="field-input select-input">
              <select value={role} onChange={(e) => setRole(e.target.value)}>
                {ROLES.map((r) => (
                  <option key={r.value} value={r.value}>
                    {r.label}
                  </option>
                ))}
              </select>
              <ChevronDown size={18} className="field-icon select-caret" />
            </div>
          </label>

          {error && <div className="login-error">{error}</div>}

          <button type="submit" className="btn btn-primary btn-block">
            Login
          </button>
        </form>

        <p className="login-footnote">
          Demo build — this is a frontend-only prototype. Any credentials will work.
        </p>
      </div>
    </div>
  )
}
