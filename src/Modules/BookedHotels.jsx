import axios from "axios";
import { useEffect, useState } from "react";

const BookedHotels = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(
          "https://epic-explorer-backend.vercel.app/Admin/HotelBookings",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setBookings(response.data?.HotelBookings);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, []);
  return (
    <div className="flex flex-col w-full gap-y-10">
      <h1 className="mx-auto text-5xl rounded-lg shadow-lg text-yellows font-joining shadow-yellows">
        Hotel Bookings
      </h1>
      <div className="relative w-full ml-0 overflow-x-auto shadow-md sm:rounded-lg 2xl:ml-10">
        <table className="w-full text-sm text-left text-white rtl:text-right">
          <thead className="text-xs text-black uppercase bg-yellows ">
            <tr>
              <th scope="col" className="px-2 py-3 2xl:px-6 font-radios">
                Hotel-Id
              </th>
              <th scope="col" className="px-2 py-3 2xl:px-6 font-radios">
                Room-Id
              </th>
              <th scope="col" className="px-2 py-3 2xl:px-6 font-radios">
                Room-Name
              </th>
              <th scope="col" className="px-2 py-3 2xl:px-6 font-radios">
                Booking-Date
              </th>
              <th scope="col" className="px-2 py-3 2xl:px-6 font-radios">
                Booker-Name
              </th>
              <th scope="col" className="px-2 py-3 2xl:px-6 font-radios">
                Booker-Email
              </th>
              <th scope="col" className="px-2 py-3 2xl:px-6 font-radios">
                Amount
              </th>

              {/* <th scope="col" className="px-2 py-3 2xl:px-6 font-radios">
                Action
              </th> */}
            </tr>
          </thead>
          <tbody>
            {bookings.length > 0 ? (
              bookings.map((booking, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0
                      ? "even:bg-light-black"
                      : "odd:bg-fade-black"
                  } border-b dark:border-gray-700 font-radios`}
                >
                  <th
                    scope="row"
                    className="px-2 py-4 text-xs font-medium text-white 2xl:px-6 whitespace-nowrap font-radios"
                  >
                    <p className="text-white">{booking?.hotelId}</p>
                  </th>
                  <td className="px-2 py-4 text-xs 2xl:px-6">
                    {booking?.roomId}
                  </td>
                  <td className="px-2 py-4 text-xs 2xl:px-6">
                    {booking?.roomName}
                  </td>
                  <td className="px-2 py-4 text-xs 2xl:px-6">
                    {booking?.checkInDate}
                  </td>
                  <td className="px-2 py-4 text-xs 2xl:px-6">
                    {booking?.bookerName}
                  </td>
                  <td className="px-2 py-4 text-xs 2xl:px-6">
                    {booking?.bookerEmail}
                  </td>
                  <td className="px-2 py-4 text-xs 2xl:px-6">
                    {booking?.amount}
                  </td>
                  {/* <td className="px-2 py-4 text-xs 2xl:px-6">
                    <a
                      href="#"
                      className="font-medium text-red-600 hover:underline"
                    >
                      Delete
                    </a>
                  </td> */}
                </tr>
              ))
            ) : (
              <tr>
                {/* <td colSpan="6" className="py-4 text-center">
                  Loading...
                </td> */}
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookedHotels;
