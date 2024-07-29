import { useState, useEffect } from "react";
import axios from "axios";

const AllHotel = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.get(
          "https://epic-explorer-backend.vercel.app/Admin/hotels",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setHotels(response.data.hotels);
      } catch (error) {
        console.error("Error fetching hotels:", error);
      }
    };

    fetchHotels();
  }, []);

  return (
    <div className="flex flex-col w-full gap-y-10">
      <h1 className="mx-auto text-5xl rounded-lg shadow-lg text-yellows font-joining shadow-yellows">
        All Hotels
      </h1>
      <div className="relative w-full ml-0 overflow-x-auto shadow-md sm:rounded-lg 2xl:ml-10">
        <table className="w-full text-sm text-left text-white rtl:text-right">
          <thead className="text-xs text-black uppercase bg-yellows ">
            <tr>
              <th scope="col" className="px-2 py-3 2xl:px-6 font-radios">
                Hotel-Name
              </th>
              <th scope="col" className="px-2 py-3 2xl:px-6 font-radios">
                Hotel-Prices
              </th>
              {/* <th scope="col" className="px-2 py-3 2xl:px-6 font-radios">
                Hotel-Type
              </th> */}
              <th scope="col" className="px-2 py-3 2xl:px-6 font-radios">
                Room-Count
              </th>
              <th scope="col" className="px-2 py-3 2xl:px-6 font-radios">
                Location
              </th>
              <th scope="col" className="px-2 py-3 2xl:px-6 font-radios">
                Reviews-Count
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
            {hotels.map((hotel, index) => (
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
                  <p className="text-white">{hotel.name}</p>
                </th>
                <td className="px-2 py-4 text-xs 2xl:px-6">{hotel.prices}</td>
                {/* <td className="px-2 py-4 text-xs 2xl:px-6">{hotel.hotelType}</td> */}
                <td className="px-2 py-4 text-xs 2xl:px-6">
                  {hotel.roomCount}
                </td>
                <td className="px-2 py-4 text-xs 2xl:px-6">{hotel.location}</td>
                <td className="px-2 py-4 text-xs 2xl:px-6">
                  {hotel.ReviewsCount}
                </td>
                <td className="px-2 py-4 text-xs 2xl:px-6">
                  {hotel.available}
                </td>
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

export default AllHotel;
