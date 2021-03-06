import React from "react"
import "./Input.css"
import send from '../../icons/send.png'
const Input = ({setMessage, sendMessage, message}) => {  
 
 

  return(
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={(e)=>setMessage(e.target.value)}
      onKeyPress={(event) => (event.key === "Enter" ? sendMessage(event) :null)}
    />
   <button className="sendButton" onClick={(e) => sendMessage(e)}  >
      <img src={send}/>
  </button>
  </form>
  )
}

export default Input
