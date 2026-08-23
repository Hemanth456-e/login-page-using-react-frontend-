# Heart Disease Federated Learning — Final One-Site Frontend

This is ONE React/Vite website containing the four previously created interfaces:

- Login — exact individual login design
- Admin Dashboard — exact individual admin design
- Hospital Dashboard — exact individual hospital design
- User/Patient Dashboard — exact individual user design

## Login flow

The Login page's **Login as** selector routes to the selected dashboard:

- Admin → Admin Dashboard
- Hospital → Hospital Dashboard
- User → User/Patient Dashboard

The individual dashboards and their existing frontend interactions are preserved.

## GitHub / Render

Push the contents of this folder to ONE GitHub repository.

Render Static Site:
- Root Directory: leave empty
- Build Command: `npm install && npm run build`
- Publish Directory: `dist`

This is frontend-only. Authentication, database, backend APIs, and the real ML model are not connected yet.
