import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Video from "../Video"
import css from "./styles.module.css"

const HomeVideo = () => {
  const data = useStaticQuery(graphql`
    query {
      heroImg: file(relativePath: { eq: "hwp-group-photo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 520) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <div className={css.hero}>
      <Video
        url="https://youtu.be/bsXqCi4zp-s"
        poster={data.heroImg.childImageSharp.fluid}
      />
    </div>
  )
}

export default HomeVideo
