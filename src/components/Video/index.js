import React, { useState } from "react"
import Img from "gatsby-image"
import ReactPlayer from "react-player"
import classnames from "classnames"
import css from "./styles.module.css"

const Video = ({ poster, ...props }) => {
  const [isStarted, setStarted] = useState(false)
  return (
    <div className={classnames({ [css.isStarted]: isStarted })}>
      <div
        className={css.poster}
        role="button"
        onClick={() => setStarted(true)}
      >
        <Img
          sizes={{
            ...poster,
            aspectRatio: 16 / 9,
          }}
        />
        <span>Click To Play Video</span>
      </div>
      <div className={css.video}>
        <ReactPlayer
          className={css.reactPlayer}
          width="100%"
          height="100%"
          playing={isStarted}
          {...props}
        />
      </div>
    </div>
  )
}

export default Video
