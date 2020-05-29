import React from "react"
import { AuthWebView } from "@livechat/customer-auth"
import { init } from "@livechat/customer-sdk"

import "./chat.scss"

const chatConfig = {
  licenseId: 0, // TODO: ENTER LICENSE
  clientId: "" // TODO: ENTER CLIENT 
  // redirectUri: "http://localhost:8000",
}

class Chat extends React.Component {
  componentDidMount() {
    const customerSDK = init(chatConfig)
    customerSDK.auth.getToken().then(token => console.log(token))

    customerSDK.on("new_event", newEvent => {
      console.log(newEvent)
    })
  }

  render() {
    return <div>Hello from chat</div>
  }
}

export default Chat
