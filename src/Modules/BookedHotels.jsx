import axios from "axios";
import { useEffect, useState } from "react";

const BookedHotels = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/Admin/HotelBookings",
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
    <div className="flex flex-col gap-y-10 w-full">
      <h1 className="text-yellows text-5xl font-joining mx-auto rounded-lg shadow-lg shadow-yellows">
        Hotel Bookings
      </h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg ml-0 2xl:ml-10 w-full">
        <table className="w-full text-sm text-left rtl:text-right text-white">
          <thead className="text-xs text-black uppercase bg-yellows  ">
            <tr>
              <th scope="col" className="px-2 2xl:px-6 py-3 font-radios">
                Hotel-Id
              </th>
              <th scope="col" className="px-2 2xl:px-6 py-3 font-radios">
                Room-Id
              </th>
              <th scope="col" className="px-2 2xl:px-6 py-3 font-radios">
                Room-Name
              </th>
              <th scope="col" className="px-2 2xl:px-6 py-3 font-radios">
                Booking-Date
              </th>
              <th scope="col" className="px-2 2xl:px-6 py-3 font-radios">
                Booker-Name
              </th>
              <th scope="col" className="px-2 2xl:px-6 py-3 font-radios">
                Booker-Email
              </th>
              <th scope="col" className="px-2 2xl:px-6 py-3 font-radios">
                Amount
              </th>

              {/* <th scope="col" className="px-2 2xl:px-6 py-3 font-radios">
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
                    className="text-xs px-2 2xl:px-6 py-4 font-medium whitespace-nowrap text-white font-radios"
                  >
                    <p className="text-white">{booking?.hotelId}</p>
                  </th>
                  <td className="text-xs px-2 2xl:px-6 py-4">
                    {booking?.roomId}
                  </td>
                  <td className="text-xs px-2 2xl:px-6 py-4">
                    {booking?.roomName}
                  </td>
                  <td className="text-xs px-2 2xl:px-6 py-4">
                    {booking?.checkInDate}
                  </td>
                  <td className="text-xs px-2 2xl:px-6 py-4">
                    {booking?.bookerName}
                  </td>
                  <td className="text-xs px-2 2xl:px-6 py-4">
                    {booking?.bookerEmail}
                  </td>
                  <td className="text-xs px-2 2xl:px-6 py-4">
                    {booking?.amount}
                  </td>
                  {/* <td className="text-xs px-2 2xl:px-6 py-4">
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
                {/* <td colSpan="6" className="text-center py-4">
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
