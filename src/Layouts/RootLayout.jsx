import { NavLink, Outlet } from "react-router-dom"

export default function RootLayout() {
  return (
    <div>

      <header>
        <nav>
          <h1>React Router Dom</h1>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
        </nav>
      </header>

      <main>
        {/* Render all Route Child Elements */}
        <Outlet />
      </main>

    </div>
  )
}
