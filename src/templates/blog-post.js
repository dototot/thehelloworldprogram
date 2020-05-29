import React from "react"
import Img from "gatsby-image"
import Layout from "../components/Layout"
import Video from "../components/Video"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import css from "./blog-post.module.css"

const BlogPost = ({
  data: { markdownRemark: post },
  pageContext: { totalLessons },
}) => (
  <Layout>
    <SEO title={post.frontmatter.title} />
    <article>
      <header className={css.header}>
        {post.frontmatter.video ? (
          <Video
            url={post.frontmatter.video}
            poster={post.frontmatter.image.childImageSharp.fluid}
          />
        ) : (
          <Img
            sizes={{
              ...post.frontmatter.image.childImageSharp.fluid,
              aspectRatio: 960 / 520,
            }}
          />
        )}

        <div class={css.title}>
          <h1>{post.frontmatter.title}</h1>
          <ul>
            <li className="capitalize">{post.frontmatter.category}</li>
            <li>
              Lesson {post.frontmatter.lesson} of {totalLessons}
            </li>
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

export default BlogPost

export const query = graphql`
  query VideoQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        lesson
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
