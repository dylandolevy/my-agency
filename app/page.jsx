export default function HomePage() {
  return (
    <section style={{padding:'2rem 0'}}>
      <div style={{display:'grid', gap:20}}>
        <section id="about">
          <h1>About stage:zero</h1>
          <p>
            stage:zero is a student-run idol group agency at Duke University. We produce
            performances, train talent, and manage auditions and events.
          </p>
          <h3>What we do</h3>
          <ul>
            <li>Produce campus performances and showcases</li>
            <li>Recruit and train new idols</li>
            <li>Organize events, photos, and recording sessions</li>
          </ul>
          <h3>Eligibility</h3>
          <p>Open to all current Duke undergraduate and graduate students. No prior experience required, but may be preferred in auditions.</p>
        </section>

        <section id="members">
          <h2>Members & Teams</h2>
          <p>Placeholder text.</p>
        </section>

        <section id="events">
          <h2>Upcoming Events</h2>
          <p>Placeholder text.</p>
        </section>

        <section id="cta" style={{borderTop:'1px solid #eee', paddingTop:16}}>
          <h2>Auditions</h2>
          <p>
            If auditions are open, you can apply on the <a href="/auditions">Auditions page</a>.
          </p>
        </section>
      </div>
    </section>
  )
}
