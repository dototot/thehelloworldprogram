import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import css from "./styles.module.css"

const VideoSeries = () => {
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
      pythonImg: file(relativePath: { eq: "byting-python.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 520) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <div className={css.videoSeries}>
      <div>
        <a
          href="https://gumroad.com/l/hello-world"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Img fluid={data.compsciImg.childImageSharp.fluid} />
        </a>
        <h3>Hands-On Computer Science</h3>
        <p>
          From the early mechanical work of Charles Babbage and Ada Lovelace,
          the field of computer science has expanded to include a diversity of
          subjects from hardware, software, robots, artificial intelligence,
          graphics, networks, and more. With our 10 amazing videos, you will
          learn to think like a computer and approach complex problems with a
          new perspective. Master the tools and technology that are shaping the
          future.
        </p>
        <p>
          <a
            href="https://gumroad.com/l/hello-world"
            target="_blank"
            rel="noreferrer noopener"
          >
            Check it out &rarr;
          </a>
        </p>
      </div>
      <div>
        <a
          href="https://gumroad.com/l/superusers"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Img fluid={data.superusersImg.childImageSharp.fluid} />
        </a>
        <h3>Superusers: The Legendary GNU/Linux Show</h3>
        <p>
          Become a superuser! Master the commands and structure of the
          fastest-growing computer operating system, Linux. Join super friends
          Adelie the penguin and Aramis the gnu on surreal adventures saving
          files in the file tree. Learn the essential commands you need to take
          greater control of your computer including help, cd, pwd, ls, mkdir,
          rmdir, cp, mv, rm, cat, and man.
        </p>
        <p>
          <a
            href="https://gumroad.com/l/superusers"
            target="_blank"
            rel="noreferrer noopener"
          >
            Check it out &rarr;
          </a>
        </p>
      </div>
      <div>
        <a
          href="https://gumroad.com/l/daisy"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Img fluid={data.daisyImg.childImageSharp.fluid} />
        </a>
        <h3>Daisy's Web Development Diary: Learn HTML</h3>
        <p>
          Conquering dragons, exploring the depths of the ocean, and advising
          robots about dating are just a few of the many adventures in Daisy's
          Web Development Diary. This video series explores the foundational web
          language, HTML. Learn how to build a game board with the table
          element, create forms for ordering sandwiches, link to exotic
          locations, and more. Begin your web programming journey today!
        </p>
        <p>
          <a
            href="https://gumroad.com/l/daisy"
            target="_blank"
            rel="noreferrer noopener"
          >
            Check it out &rarr;
          </a>
        </p>
      </div>
      <div>
        <Img fluid={data.pythonImg.childImageSharp.fluid} />
        <h3>
          The Nielsen Brothers' Byting Python <span>Coming Soon</span>
        </h3>
        <p>
          Program or be programmed? That is the question. There are numerous,
          excellent sources that will teach you how to code following tried and
          true methods. This isn't one of them. The Nielsen Brothers' Byting
          Python puts the FUN in functions. (If you don't get that joke, you
          will soon.) Take a byte of Python and quickly learn to think like a
          computer with 10 humorous, surreal lessons inspired by Monty Python.
        </p>
        {/* <p>
          <a href="" target="_blank" rel="noreferrer noopener">
            Check it out &rarr;
          </a>
        </p> */}
      </div>
    </div>
  )
}

export default VideoSeries
