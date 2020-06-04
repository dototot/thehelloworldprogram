import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import SectionHeading from "../components/SectionHeading"
import VideoSeries from "../components/VideoSeries"
import HomeVideo from "../components/HomeVideo"

const IndexPage = () => (
  <Layout>
    <SEO title="Hands-on Computer Science" />
    <HomeVideo />
    <SectionHeading>
      Learn computer science, programming, and web development with your
      educational <em>super friends</em>.
    </SectionHeading>
    <VideoSeries />
  </Layout>
)

export default IndexPage
