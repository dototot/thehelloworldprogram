import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import css from "./styles.module.css"

const Promos = () => {
  const data = useStaticQuery(graphql`
    query {
      compsciImg: file(relativePath: { eq: "compsci.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 520) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      daisyImg: file(relativePath: { eq: "daisy-web-dev.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 520) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      superusersImg: file(relativePath: { eq: "superusers.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 520) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      tilhtmlImg: file(relativePath: { eq: "til-cover.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 520) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <div className={css.promos}>
      <div>
        <a
          href="https://gumroad.com/l/hello-world"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Img fluid={data.compsciImg.childImageSharp.fluid} />
        </a>
      </div>
      <div>
        <a
          href="https://gumroad.com/l/superusers"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Img fluid={data.superusersImg.childImageSharp.fluid} />
        </a>
      </div>
      <div>
        <a
          href="https://gumroad.com/l/daisy"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Img fluid={data.daisyImg.childImageSharp.fluid} />
        </a>
      </div>
      <div>
        <a
          href="https://gumroad.com/l/tilhtmlj4f"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Img fluid={data.tilhtmlImg.childImageSharp.fluid} />
        </a>
      </div>
    </div>
  )
}

export default Promos
