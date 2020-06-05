import React from "react"
import ReactDOM from "react-dom"
import {SocketProvider} from "socket.io-react"
import io from "socket.io-client"
import App from "./App"
const ENDPOINT = "localhost:5000"
const socket = io.connect(ENDPOINT)

ReactDOM.render(
  <SocketProvider socket={socket}>
    <App />
  </SocketProvider>,
  document.getElementById("root")
)
export default socket
