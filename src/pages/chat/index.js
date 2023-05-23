import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import ListChat from "../../components/chat/list-chat";

export class Chat extends Component {
  state = {
    chat: [
      { id: 1, name: "Jessica", message: "Salut" },
      { id: 2, name: "Francia", message: "Je te vois demain" },
      { id: 3, name: "Melanie", message: "N'oublie pas" },
      { id: 4, name: "Naomie", message: "OK" },
    ],
  };

  render() {
    const { chat } = this.state;
    return (
      <div>
        <h3>CHAT PAGE</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <div>
            <ListChat chats={chat} />
          </div>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
