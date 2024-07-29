import axios from "axios";
import { useEffect, useState } from "react";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/Admin/notifications",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setNotifications(response.data.notifications);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchNotifications();
  }, []);

  const handleClearNotifications = async () => {
    try {
      await axios.delete("http://localhost:5000/Admin/notifications/delete");
      setNotifications([]);
    } catch (error) {
      console.error("Error clearing notifications:", error);
    }
  };

  // const [notification, setNotifications] = useState([]);
  // useEffect(() => {
  //   dispatch(userNotifications());
  //   const socket = io("http://localhost:5000");
  //   console.log("Attempting to connect to server...");

  //   socket.on("connect", () => {
  //     console.log("Connected to server");
  //   });

  //   socket.on("notification", (data) => {
  //     console.log("Notification received:", data);
  //     setNotifications((prev) => [...prev, data]);
  //   });

  //   socket.on("connect_error", (error) => {
  //     console.error("Connection error:", error);
  //   });

  //   socket.on("error", (error) => {
  //     console.error("Socket error:", error);
  //   });

  //   return () => {
  //     socket.disconnect();
  //     console.log("Disconnected from server");
  //   };
  // }, [dispatch]);
  // useEffect(() => {
  //   if (notifications) {
  //     setNotifications(notifications.userNotifications || []);
  //   }
  // }, [notifications]);
  return (
    <div className="flex flex-col gap-y-10 p-6 items-center w-[100%] ">
      <h1 className="p-4 text-lg rounded-lg shadow-lg text-yellows lg:text-4xl font-joining bg-light-black bg-opacity-60 shadow-yellows">
        Notifications
      </h1>

      <div className="flex flex-col gap-y-6 flex-grow flex-wrap items-center min-h-screen smd:w-[85%] w-[90%]">
        <button
          onClick={handleClearNotifications}
          className="px-4 py-2 font-bold text-white bg-red-500 rounded-lg hover:bg-red-700"
        >
          Clear All Notifications
        </button>
        {notifications.length > 0 &&
          notifications.map((Notification, index) => (
            <div
              key={index}
              className="relative flex items-center w-full p-4 mx-auto rounded-lg shadow-xl bg-fade-black shadow-fade-black"
            >
              <span className="absolute top-0 right-0 px-2 mt-2 mr-2 text-xs font-bold text-green-900 uppercase bg-green-400 border rounded-full">
                New
              </span>
              <span className="absolute bottom-0 right-0 py-1 m-1 mr-3 text-xs font-bold text-white uppercase font-radios">
                {new Date(Notification.date).toLocaleString()}
              </span>
              <img
                className="w-12 h-12 rounded-full"
                alt="John Doe's avatar"
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80"
              />
              <div className="ml-5">
                <h4 className="text-lg leading-tight font-radios text-yellows">
                  {Notification.title}
                </h4>
                <p className="text-sm text-white">{Notification.message}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Notifications;
