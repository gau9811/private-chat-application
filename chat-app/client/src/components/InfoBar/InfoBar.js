import React from "react"

import axios from "axios"
import onlineIcon from "../../icons/onlineIcon.png"
import closeIcon from "../../icons/closeIcon.png"

import "./InfoBar.css"

const InfoBar = ({room, name}) => {
  const Delete_user = () => {
    axios
      .post("/DeleteChat", null, {
        params: {
          name,
        },
      })
      .then((res) => res)
      .catch((err) => err)
  }
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img className="onlineIcon" src={onlineIcon} alt="online icon" />
        <h3>{room}</h3>
      </div>
      <div className="rightInnerContainer">
        <a href="/">
          <img src={closeIcon} alt="close icon" onClick={Delete_user} />
        </a>
      </div>
    </div>
  )
}

export default InfoBar
