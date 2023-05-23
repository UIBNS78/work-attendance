import React, { Component } from "react";
import { Link } from "react-router-dom";

export class ListChat extends Component {
  render() {
    const { chats } = this.props;
    return (
      <>
        <h4>List Chat component</h4>
        <ul>
          {chats.length > 0 &&
            chats.map((chat) => (
              <li key={chat.id}>
                <strong>
                  <Link to={"/chat/" + chat.id}>{chat.name}</Link>
                </strong>
                <small>{chat.message}</small>
              </li>
            ))}
        </ul>
      </>
    );
  }
}

export default ListChat;
