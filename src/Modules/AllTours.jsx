import axios from "axios";
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router";

const AllTours = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await axios.get(
          "https://epic-explorer-backend.vercel.app/Admin/tours",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setTours(response.data.tours);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchTours();
  }, []);
  // const navigate = useNavigate();
  // const openView = () => {
  //   navigate("/TourDetails");
  // };
  return (
    <div className="flex flex-col w-full gap-y-10">
      <h1 className="mx-auto text-5xl rounded-lg shadow-lg text-yellows font-joining shadow-yellows">
        All Tours
      </h1>
      <div className="relative w-full ml-0 overflow-x-auto shadow-md sm:rounded-lg 2xl:ml-10">
        <table className="w-full text-sm text-left text-white rtl:text-right">
          <thead className="text-xs text-black uppercase bg-yellows ">
            <tr>
              <th scope="col" className="px-2 py-3 2xl:px-6 font-radios">
                Tour-Id
              </th>
              <th scope="col" className="px-2 py-3 2xl:px-6 font-radios">
                Tour-Name
              </th>
              <th scope="col" className="px-2 py-3 2xl:px-6 font-radios">
                Start-Date
              </th>
              <th scope="col" className="px-2 py-3 2xl:px-6 font-radios">
                End-Date
              </th>
              <th scope="col" className="px-2 py-3 2xl:px-6 font-radios">
                Category
              </th>
              <th scope="col" className="px-2 py-3 2xl:px-6 font-radios">
                Departure-Time
              </th>
              <th scope="col" className="px-2 py-3 2xl:px-6 font-radios">
                Tour-Price
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
            {tours.map((tour, index) => (
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
                  <p className="text-white">{tour._id}</p>
                </th>
                <td className="px-2 py-4 text-xs 2xl:px-6">{tour.name}</td>
                <td className="px-2 py-4 text-xs 2xl:px-6">{tour.startDate}</td>
                <td className="px-2 py-4 text-xs 2xl:px-6">{tour.endDate}</td>
                <td className="px-2 py-4 text-xs 2xl:px-6">
                  {tour.parentCategory}
                </td>
                <td className="px-2 py-4 text-xs 2xl:px-6">
                  {tour.departureTime}
                </td>
                <td className="px-2 py-4 text-xs 2xl:px-6">{tour.price}</td>
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
                    className="mr-2 font-medium text-red-600 hover:underline"
                    onClick={openView}
                  >
                    View
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

export default AllTours;
