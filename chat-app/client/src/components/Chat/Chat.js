import React, {useState, useEffect} from "react"
import queryString from "query-string"
import socket from "../../index"

import TextContainer from "../TextContainer/TextContainer"
import Messages from "../Messages/Messages"
import InfoBar from "../InfoBar/InfoBar"
import Input from "../Input/Input"
import "./Chat.css"

const Chat = ({location}) => {
  const [name, setName] = useState("")
  const [room, setRoom] = useState("")
  const [users, setUsers] = useState("")
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([])
  const ENDPOINT = "localhost:5000"

  useEffect(() => {
    const {name, room} = queryString.parse(location.search)

    setRoom(room)
    setName(name)

    socket.emit("join", {name, room}, (err) => {
      if (err) {
        console.log(err)
      }
    })
  }, [ENDPOINT, location.search])

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message] )
     
    })

    socket.on("roomData", ({users}) => {
      setUsers(users)
    })
  }, [])

  const sendMessage = (event) => {
    event.preventDefault()

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""))
    }
  }



  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} name={name} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
      <TextContainer users={users} />
    </div>
  )
}

export default Chat
