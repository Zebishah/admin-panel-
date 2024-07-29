import { useEffect, useState } from "react";
import image from "../images/man-user-circle-icon.png";
import axios from "axios";
const Messages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/Admin/messages",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setMessages(response.data.messages);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center w-full h-auto gap-y-8">
      <h1 className="text-5xl text-center text-yellows font-joining ">
        Messages Inbox
      </h1>
      <div className="flex flex-col justify-center items-center space-y-10 h-screen p-12 w-[100%] smd:w-[80%]">
        {messages.map((message) => (
          // eslint-disable-next-line react/jsx-key
          <div className="p-4 border-2 shadow-lg bg-fade-black border-yellows rounded-xl shadow-yellows">
            <div className="flex flex-col items-center mb-4 gap-y-4">
              <div className="mr-4 overflow-hidden rounded-full">
                <img src={image} alt="image" className="w-12 h-12" />
              </div>
              <div className="flex flex-col items-center justify-center gap-y-2">
                <h2 className="text-sm smd:text-xl text-yellows font-radios">
                  {message?.name}
                </h2>
                <p className="text-sm smd:text-xl text-yellows font-radios">
                  {message?.email}
                </p>
                {/* <h2 className="text-sm smd:text-xl text-yellows font-radios ">
                {message?.message}
              </h2> */}
              </div>
            </div>
            <p className="text-sm text-center text-white font-radios smd:text-lg">
              {message?.message}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages;
