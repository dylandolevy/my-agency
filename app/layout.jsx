import './globals.css'

export const metadata = {
  title: 'Duke Idol Agency',
  description: 'A student-run idol group agency at Duke University — auditions, members, events, contact.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container header-inner">
            <a href="/" className="brand">Duke Idol Agency</a>
            <nav className="nav">
              <a href="/#about">About</a>
              <a href="/auditions">Auditions</a>
              <a href="/contact">Contact</a>
              <a href="/admin">Admin</a>
            </nav>
          </div>
        </header>

        <main className="container">{children}</main>

        <footer className="site-footer">
          <div className="container">
            <p>© {new Date().getFullYear()} Duke Idol Agency — Built by students.</p>
            <p><small>Contact: <a href="/contact">Contact form</a></small></p>
          </div>
        </footer>
      </body>
    </html>
  )
}
