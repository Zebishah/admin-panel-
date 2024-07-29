import { useState, useEffect } from "react";
import axios from "axios";

const AllRooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get("http://localhost:5000/Admin/rooms", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setRooms(response.data.rooms);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    };

    fetchRooms();
  }, []);

  return (
    <div className="flex flex-col w-full gap-y-10">
      <h1 className="mx-auto text-5xl rounded-lg shadow-lg text-yellows font-joining shadow-yellows">
        All Rooms
      </h1>
      <div className="relative w-full ml-0 overflow-x-auto shadow-md sm:rounded-lg 2xl:ml-10">
        <table className="w-full text-sm text-left text-white rtl:text-right">
          <thead className="text-xs text-black uppercase bg-yellows ">
            <tr>
              <th scope="col" className="px-2 py-3 2xl:px-6 font-radios">
                Hotel-Id
              </th>
              <th scope="col" className="px-2 py-3 2xl:px-6 font-radios">
                Room-Name
              </th>
              <th scope="col" className="px-2 py-3 2xl:px-6 font-radios">
                Room-Prices
              </th>
              <th scope="col" className="px-2 py-3 2xl:px-6 font-radios">
                Room-Type
              </th>
              <th scope="col" className="px-2 py-3 2xl:px-6 font-radios">
                Location
              </th>
              <th scope="col" className="px-2 py-3 2xl:px-6 font-radios">
                BookedCount
              </th>
              <th scope="col" className="px-2 py-3 2xl:px-6 font-radios">
                Availability
              </th>
              <th scope="col" className="px-2 py-3 2xl:px-6 font-radios">
                Actions
              </th>
              {/* <th scope="col" className="px-2 py-3 2xl:px-6 font-radios">
                Action
              </th> */}
            </tr>
          </thead>
          <tbody>
            {rooms.map((room, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "even:bg-light-black" : "odd:bg-fade-black"
                } border-b dark:border-gray-700 font-radios`}
              >
                <th
                  scope="row"
                  className="px-2 py-4 text-xs font-medium text-white 2xl:px-6 whitespace-nowrap font-radios"
                >
                  <p className="text-white">{room._id}</p>
                </th>
                <td className="px-2 py-4 text-xs 2xl:px-6">{room.name}</td>
                <td className="px-2 py-4 text-xs 2xl:px-6">{room.prices}</td>
                <td className="px-2 py-4 text-xs 2xl:px-6">{room.type}</td>
                <td className="px-2 py-4 text-xs 2xl:px-6">{room.location}</td>
                <td className="px-2 py-4 text-xs 2xl:px-6">
                  {room.bookedCount}
                </td>
                <td className="px-2 py-4 text-xs 2xl:px-6">{room.available}</td>
                <td className="px-2 py-4 text-xs 2xl:px-6">
                  <div className="flex gap-x-2">
                    <button className="text-sm text-yellows font-radios">
                      Edit
                    </button>
                    <button className="text-sm text-red-600 font-radios">
                      Delete
                    </button>
                  </div>
                </td>
                {/* <td className="px-2 py-4 text-xs 2xl:px-6">
                  <a
                    href="#"
                    className="mr-2 font-medium text-red-600 hover:underline"
                  >
                    Delete
                  </a>
                  <a
                    href="#"
                    className="font-medium text-red-600 hover:underline"
                  >
                    Edit
                  </a>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllRooms;
