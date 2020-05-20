import React from "react"
import Layout from "../components/Layout"
import Video from "../components/Video"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import css from "./blog-post.module.css"

function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <article>
        <header className={css.header}>
          <Video
            url={post.frontmatter.video}
            poster={post.frontmatter.image.childImageSharp.fluid}
          />
          <div class={css.title}>
            <h1>{post.frontmatter.title}</h1>
            <ul>
              <li className="capitalize">{post.frontmatter.category}</li>
              <li>By Dototot</li>
            </ul>
          </div>
        </header>
        <div
          className={css.postContent}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query VideoQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        category
        video
        image {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
