import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import PostGrid from "../components/PostGrid"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Post Archive" />
    <PostGrid edges={data.allMarkdownRemark.edges} />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query CategoryQuery($category: String!) {
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___order] }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 470) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
