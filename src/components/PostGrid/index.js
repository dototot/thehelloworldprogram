import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import css from "./styles.module.css"

const PostGrid = ({ edges }) => (
  <div className={css.posts}>
    {edges.map(({ node }) => (
      <article key={node.fields.slug}>
        <Link to={node.fields.slug}>
          <Img
            sizes={{
              ...node.frontmatter.image.childImageSharp.fluid,
              aspectRatio: 960 / 520,
            }}
          />
        </Link>
        <h2>
          <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
        </h2>
        <p>{node.excerpt}</p>
        <Link to={node.fields.slug}>continue reading &rarr;</Link>
      </article>
    ))}
  </div>
)

export default PostGrid
