import { useState, useEffect } from "react";
import axios from "axios";

const AllTransport = () => {
  const [transports, setTransports] = useState([]);

  useEffect(() => {
    const fetchTransports = async () => {
      try {
        const response = await axios.get(
          "https://epic-explorer-backend.vercel.app/Admin/transports",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setTransports(response.data.transports);
      } catch (error) {
        console.error("Error fetching transports:", error);
      }
    };

    fetchTransports();
  }, []);

  return (
    <div className="flex flex-col w-full gap-y-10">
      <h1 className="mx-auto text-5xl rounded-lg shadow-lg text-yellows font-joining shadow-yellows">
        All Transport
      </h1>
      <div className="relative w-full ml-0 overflow-x-auto shadow-md sm:rounded-lg 2xl:ml-10">
        <table className="w-full text-sm text-left text-white rtl:text-right">
          <thead className="text-xs text-black uppercase bg-yellows ">
            <tr>
              <th scope="col" className="px-2 py-3 2xl:px-6 font-radios">
                Car-Name
              </th>
              <th scope="col" className="px-2 py-3 2xl:px-6 font-radios">
                Car-Prices
              </th>
              <th scope="col" className="px-2 py-3 2xl:px-6 font-radios">
                Car-seats
              </th>
              <th scope="col" className="px-2 py-3 2xl:px-6 font-radios">
                Car-Type
              </th>
              <th scope="col" className="px-2 py-3 2xl:px-6 font-radios">
                Seats Limit
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
            {transports.map((transport, index) => (
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
                  <p className="text-white">{transport.carName}</p>
                </th>
                <td className="px-2 py-4 text-xs 2xl:px-6">
                  {transport.prices}
                </td>
                <td className="px-2 py-4 text-xs 2xl:px-6">
                  {transport.seats}
                </td>
                <td className="px-2 py-4 text-xs 2xl:px-6">{transport.type}</td>
                <td className="px-2 py-4 text-xs 2xl:px-6">
                  {transport.allowedGuests}
                </td>
                <td className="px-2 py-4 text-xs 2xl:px-6">
                  {transport.bookedCount}
                </td>
                <td className="px-2 py-4 text-xs 2xl:px-6">
                  {transport.available}
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

export default AllTransport;
