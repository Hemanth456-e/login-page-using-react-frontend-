import { UserCircle } from 'lucide-react'

export default function Header({ title, subtitle, userEmail, roleLabel }) {
  return (
    <header className="page-header">
      <div>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
      <div className="page-header-user">
        <div className="page-header-user-text">
          <strong>{userEmail}</strong>
          <span>{roleLabel}</span>
        </div>
        <UserCircle size={34} strokeWidth={1.6} />
      </div>
    </header>
  )
}
