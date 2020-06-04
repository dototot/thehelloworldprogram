import React from "react"
import css from "./styles.module.css"

const SectionHeading = ({ children }) => (
  <h2 className={css.heading}>{children}</h2>
)

export default SectionHeading
