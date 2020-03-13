import React from "react";
import { Socket } from "phoenix";


class Chat extends React.Component {
    componentDidMount(){
        let socket = new Socket("/socket", {params: {token: window.userToken()}})
        socket.connect()

        let channel = socket.channel("room:lobby", {})
        channel
            .join()
            .receive("ok", response => {
                console.log("Joined Succesfully", response)
            })
    }
  render() {
    return (
      <div>
          chat
      </div>
    )
  }
}
export default Chat;