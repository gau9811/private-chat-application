import React from "react"



import "./TextContainer.css"

const TextContainer = () => (
  <div className="textContainer">
    <div>
      <h1>
        Realtime Private Chat Application{" "}
        <span role="img" aria-label="emoji">
          💬
        </span>
      </h1>
      <h2>
        Created with React, Express, Node, MongoDB and Socket.IO{" "}
        <span role="img" aria-label="emoji">
          ❤️
        </span>
      </h2>
      <h2>
        Try it out right now!{" "}
        <span role="img" aria-label="emoji">
          ⬅️
        </span>
      </h2>
    </div>
  </div>
)

export default TextContainer
