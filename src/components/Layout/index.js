import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import logoSvg from "../../images/logo.svg"
import css from "./styles.module.css"

const Layout = ({ children }) => {
  const [isOpen, setOpen] = useState(false)
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const { title, description } = data.site.siteMetadata
  return (
    <>
      <div className={css.layout}>
        <header className={css.header}>
          <figure>
            <Link to="/">
              <img src={logoSvg} alt={title} />
              <figcaption>{title}</figcaption>
            </Link>
          </figure>
          <nav className={css.nav}>
            <button onClick={() => setOpen(!isOpen)}>Menu</button>
            <ul className={isOpen ? css.open : css.closed}>
              <li>
                <Link to="/computer-science">Computer Science</Link>
              </li>
              <li>
                <Link to="/linux">Linux</Link>
              </li>
              <li>
                <Link to="/web-development">Web Development</Link>
              </li>
              <li>
                <Link to="/python">Python</Link>
              </li>
            </ul>
          </nav>
        </header>
        <hr className={css.topBar} />
        <main>{children}</main>
        <hr className={css.bottomBar} />
        <footer className={css.footer}>
          <p>
            Hands-on computer science, programming, and web development. Brought
            to you by{" "}
            <a href="https://dototot.com" target="_blank" rel="nofollow">
              Dototot
            </a>
            . The contents of this website are licensed under a{" "}
            <a
              href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
              target="_blankt"
              rel="nofollow noopener"
            >
              CC BY-NC-SA 4.0 License
            </a>
            .{" "}
            <a
              href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
              target="_blankt"
              rel="nofollow noopener"
            >
              <img src="https://licensebuttons.net/l/by-nc-sa/4.0/80x15.png" />
            </a>
          </p>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
