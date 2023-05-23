import React, { Component } from "react";
import withRouter from "../../hocs/withRouter";

class Message extends Component {
  state = {
    chat: [
      { id: 1, name: "Jessica", message: "Salut" },
      { id: 2, name: "Francia", message: "Je te vois demain" },
      { id: 3, name: "Melanie", message: "N'oublie pas" },
      { id: 4, name: "Naomie", message: "OK" },
    ],
    selectedChat: {},
  };
  // id = useParams().id;

  componentDidMount = () => {
    console.log("props", this.props);
    this.setState({
      selectedChat: { ...this.state.chat.find((c) => c.id === 2) },
    });
    console.log(this.state.selectedChat);
  };

  render() {
    const { selectedChat } = this.state;
    return (
      <div>
        <h4>Message component</h4>
        {selectedChat && <p>{selectedChat.messsage}</p>}
      </div>
    );
  }
}

export default withRouter(Message);

// import { useLoaderData } from "react-router-dom";

// const chat = [
//   { id: 1, name: "Jessica", message: "Salut" },
//   { id: 2, name: "Francia", message: "Je te vois demain" },
//   { id: 3, name: "Melanie", message: "N'oublie pas" },
//   { id: 4, name: "Naomie", message: "OK" },
// ];

// export const Message = () => {
//   const selectedChat = useLoaderData();

//   return (
//     <div>
//       <h4>{selectedChat && selectedChat.name}</h4>
//       {selectedChat && selectedChat.message}
//     </div>
//   );
// };

// // LOADER METHOD
// export const getMessage = async ({ params }) => {
//   const { id } = params;
//   return await chat.find((c) => c.id === parseInt(id));
// };

// export default Message;
