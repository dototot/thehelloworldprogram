import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import PostGrid from "../components/PostGrid"
import SectionHeading from "../components/SectionHeading"
import SEO from "../components/seo"

const IndexPage = ({ data, pageContext: { category, description } }) => (
  <Layout>
    <SEO title="Post Archive" />
    <SectionHeading>Learn {category}</SectionHeading>
    <p>{description}</p>
    <PostGrid edges={data.allMarkdownRemark.edges} />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query CategoryQuery($category: String!) {
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___lesson] }
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
