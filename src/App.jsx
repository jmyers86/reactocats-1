// @ts-ignore
import React from 'react'
import { Octocat } from './components/Octocat'

export function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <a href="/">
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  width="45"
                  height="45"
                  alt="GithubLogo"
                />
              </a>
            </li>
            <li className="brand-link">
              <a href="/">Octodex</a>
            </li>
            <li className="active">
              <a href="/">Home</a>
            </li>
            <li>
              <a href="https://octodex.github.com/faq/">FAQ</a>
            </li>
            <li>
              <a href="https://octodex.github.com/atom.xml">RSS</a>
            </li>
          </ul>

          <ul>
            <li>
              <a href="https://twitter.com/githubdesign">Follow us on Twitter</a>
            </li>
            <li className="back-to-github">
              <a href="https://github.com/">Back to GitHub.com</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="octocats">
        <Octocat name="Terracottocat" number="149" image="Terracottocat_Single.png" />

        <Octocat name="Octogatos" number="148" image="Octogatos.png" />

        <Octocat name="Sentrytocat" number="143" image="Sentrytocat_octodex.jpg" />

        <Octocat name="Boxertocat" number="141" image="boxertocat_octodex.jpg" />

        <Octocat name="Surftocat" number="140" image="surftocat.png" />
      </main>
      <footer>
        <div>
          <p>&copy; 2013 – 2020 GitHub, Inc. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
