import React, {useState} from "react"
import axios from "axios"

import {Link} from "react-router-dom"

import "./Join.css"

export default function SignIn() {
  const [name, setName] = useState("")
  const [room, setRoom] = useState("")


  const setNameandRoom = () => {
    axios
      .post("/chat", null, {
        params: {
          name,
          room,
        },
      })
      .then((response) => response.status, "success")
      .catch((err) => err)
  }

  const setroom = () => {
    axios
      .post("/userroom", null, {
        params: {
          room,
        },
      })
      .then((response) => response.status, "success")
      .catch((err) => err)
  }

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">CHAT-APP</h1>
        <div>
          <input
            placeholder="Name"
            className="joinInput"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Room"
            className="joinInput mt-20"
            type="text"
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>
        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button
            className={"button mt-20"}
            type="submit"
            onClick={() => {
              setNameandRoom()
              setroom()
            }}
          >
            Join
          </button>
        </Link>
      </div>
    </div>
  )
}
