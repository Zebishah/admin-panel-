import { FaTruckPlane } from "react-icons/fa6";
import { MdEmojiTransportation } from "react-icons/md";
import { FaHotel } from "react-icons/fa6";
import { MdPayments } from "react-icons/md";
import { ImUsers } from "react-icons/im";
import { SiGooglemessages } from "react-icons/si";
import { PiAirplaneTiltFill } from "react-icons/pi";
import { RiHotelFill } from "react-icons/ri";
import { FaBed } from "react-icons/fa6";
import { FaCar } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import image from "../images/man-user-circle-icon.png";
import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [counts, setCounts] = useState({
    toursBooked: 0,
    transportBooked: 0,
    hotelBooked: 0,
    transactions: 0,
    totalUsers: 0,
    totalReviews: 0,
    totalTours: 0,
    totalTransport: 0,
    totalHotels: 0,
    totalRooms: 0,
    toursCustomers: 0,
  });
  const [percentages, setPercentages] = useState({
    toursBookedPercentage: 0,
    transportBookedPercentage: 0,
    hotelBookedPercentage: 0,
    tourBillPercentage: 0,
    transportBillPercentage: 0,
    roomBillPercentage: 0,
    totalUsersPercentage: 0,
    totalReviewsPercentage: 0,
  });

  useEffect(() => {
    const fetchDashboardCounts = async () => {
      try {
        const response = await axios.post(
          "https://epic-explorer-backend.vercel.app/Admin/dashboard-counts",
          // If you need to send any data in the request body, add it here
          // Example: { someData: 'value' }
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        // Assuming your API response returns an object with these keys
        setCounts({
          toursBooked: response.data.data.counts.toursBooked || 0,
          transportBooked: response.data.data.counts.transportBooked || 0,
          hotelBooked: response.data.data.counts.hotelBooked || 0,
          transactions: response.data.data.counts.transactions || 0,
          totalUsers: response.data.data.counts.totalUsers || 0,
          totalReviews: response.data.data.counts.totalReviews || 0,
          totalTours: response.data.data.counts.totalTours || 0,
          totalTransport: response.data.data.counts.totalTransport || 0,
          totalHotels: response.data.data.counts.totalHotels || 0,
          totalRooms: response.data.data.counts.totalRooms || 0,
          toursCustomers: response.data.data.counts.toursCustomers || 0,
        });

        setPercentages({
          toursBookedPercentage:
            response.data.data.percentages.toursBookedPercentage || 0,
          transportBookedPercentage:
            response.data.data.percentages.transportBookedPercentage || 0,
          hotelBookedPercentage:
            response.data.data.percentages.hotelBookedPercentage || 0,
          tourPercentage: response.data.data.percentages.tourPercentage || 0,
          transportPercentage:
            response.data.data.percentages.transportPercentage || 0,
          roomPercentage: response.data.data.percentages.roomPercentage || 0,
          totalUsersPercentage:
            response.data.data.percentages.totalUsersPercentage || 0,
          totalReviewsPercentage:
            response.data.data.percentages.totalReviewsPercentage || 0,
        });
      } catch (error) {
        console.error("Error fetching dashboard counts:", error);
      }
    };

    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://epic-explorer-backend.vercel.app/Admin/users",
          // If you need to send any data in the request body, add it here
          // Example: { someData: 'value' }
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        // Assuming your API response returns an object with these keys
        setUsers(response.data.users);
      } catch (error) {
        console.error("Error fetching dashboard counts:", error);
      }
    };
    fetchDashboardCounts();
    fetchUsers();
  }, []); // Empty dependency array means this effect runs once after initial render

  return (
    <div className="flex flex-col items-start justify-start w-full p-4 gap-y-10">
      <h1 className="p-4 text-lg rounded-lg shadow-lg text-yellows lg:text-4xl font-joining bg-light-black bg-opacity-60 shadow-yellows">
        Business Stats
      </h1>
      <div className="flex flex-row flex-wrap items-start justify-start w-full gap-x-8 2xl:gap-x-32 gap-y-8">
        <div className="flex gap-x-8 justify-center items-center bg-fade-black p-6 rounded-xl shadow-lg shadow-black w-auto 2xl:w-[18%]">
          <FaTruckPlane className="text-lg text-yellows" size={50} />
          <div className="flex flex-col items-center justify-center gap-y-1">
            <h1 className="text-3xl font-extrabold text-yellows font-radios">
              {counts.toursBooked}
            </h1>
            <h3 className="text-lg text-yellows font-radios">Tours Booked</h3>
          </div>
        </div>

        <div className="flex gap-x-4 justify-center items-center bg-fade-black p-6 rounded-xl shadow-lg shadow-black w-auto 2xl:w-[18%]">
          <MdEmojiTransportation className="text-lg text-yellows" size={50} />
          <div className="flex flex-col items-center justify-center gap-y-2">
            <h1 className="text-3xl font-extrabold text-yellows font-radios">
              {counts.transportBooked}
            </h1>
            <h3 className="text-lg  text-yellows font-radios">
              Transport Booked
            </h3>
          </div>
        </div>

        <div className="flex gap-x-4 justify-center items-center bg-fade-black p-6 rounded-xl shadow-lg shadow-black w-auto 2xl:w-[18%]">
          <FaHotel className="text-lg text-yellows" size={50} />
          <div className="flex flex-col items-center justify-center gap-y-2">
            <h1 className="text-3xl font-extrabold text-yellows font-radios">
              {counts.hotelBooked}
            </h1>
            <h3 className="text-lg  text-yellows font-radios">Hotel Booked</h3>
          </div>
        </div>

        <div className="flex gap-x-4 justify-center items-center bg-fade-black p-6 rounded-xl shadow-lg shadow-black w-auto 2xl:w-[18%]">
          <MdPayments className="text-lg text-yellows" size={50} />
          <div className="flex flex-col items-center justify-center gap-y-2">
            <h1 className="text-3xl font-extrabold text-yellows font-radios">
              {counts.transactions}
            </h1>
            <h3 className="text-lg  text-yellows font-radios">Transactions</h3>
          </div>
        </div>

        <div className="flex gap-x-4 justify-center items-center bg-fade-black p-6 rounded-xl shadow-lg shadow-black w-auto 2xl:w-[18%]">
          <ImUsers className="text-lg text-yellows" size={50} />
          <div className="flex flex-col items-center justify-center gap-y-2">
            <h1 className="text-3xl font-extrabold text-yellows font-radios">
              {counts.totalUsers}
            </h1>
            <h3 className="text-lg  text-yellows font-radios">Total Users</h3>
          </div>
        </div>

        <div className="flex gap-x-4 justify-center items-center bg-fade-black p-6 rounded-xl shadow-lg shadow-black w-auto 2xl:w-[18%]">
          <SiGooglemessages className="text-lg text-yellows" size={50} />
          <div className="flex flex-col items-center justify-center gap-y-2">
            <h1 className="text-3xl font-extrabold text-yellows font-radios">
              {counts.totalReviews}
            </h1>
            <h3 className="text-lg  text-yellows font-radios">Total Reviews</h3>
          </div>
        </div>

        <div className="flex gap-x-4 justify-center items-center bg-fade-black p-6 rounded-xl shadow-lg shadow-black w-auto 2xl:w-[18%]">
          <PiAirplaneTiltFill className="text-lg text-yellows" size={50} />
          <div className="flex flex-col items-center justify-center gap-y-2">
            <h1 className="text-3xl font-extrabold text-yellows font-radios">
              {counts.totalTours}
            </h1>
            <h3 className="text-lg  text-yellows font-radios">Total Tours</h3>
          </div>
        </div>

        <div className="flex gap-x-4 justify-center items-center bg-fade-black p-6 rounded-xl shadow-lg shadow-black w-auto 2xl:w-[18%]">
          <FaCar className="text-lg text-yellows" size={50} />
          <div className="flex flex-col items-center justify-center gap-y-2">
            <h1 className="text-3xl font-extrabold text-yellows font-radios">
              {counts.totalTransport}
            </h1>
            <h3 className="text-lg  text-yellows font-radios">
              Total Transport
            </h3>
          </div>
        </div>

        <div className="flex gap-x-4 justify-center items-center bg-fade-black p-6 rounded-xl shadow-lg shadow-black w-auto 2xl:w-[18%]">
          <RiHotelFill className="text-lg text-yellows" size={50} />
          <div className="flex flex-col items-center justify-center gap-y-2">
            <h1 className="text-3xl font-extrabold text-yellows font-radios">
              {counts.totalHotels}
            </h1>
            <h3 className="text-lg  text-yellows font-radios">Total Hotels</h3>
          </div>
        </div>

        <div className="flex gap-x-4 justify-center items-center bg-fade-black p-6 rounded-xl shadow-lg shadow-black w-auto 2xl:w-[18%]">
          <FaBed className="text-lg text-yellows" size={50} />
          <div className="flex flex-col items-center justify-center gap-y-2">
            <h1 className="text-3xl font-extrabold text-yellows font-radios">
              {counts.totalRooms}
            </h1>
            <h3 className="text-lg  text-yellows font-radios">Total Rooms</h3>
          </div>
        </div>

        <div className="flex gap-x-4 justify-center items-center bg-fade-black p-6 rounded-xl shadow-lg shadow-black w-auto 2xl:w-[18%]">
          <FaPeopleGroup className="text-lg text-yellows" size={50} />
          <div className="flex flex-col items-center justify-center gap-y-2">
            <h1 className="text-3xl font-extrabold text-yellows font-radios">
              {counts.toursCustomers}
            </h1>
            <h3 className="text-lg  text-yellows font-radios">
              Tours Customers
            </h3>
          </div>
        </div>

        <div className="flex gap-x-4 justify-center items-center bg-fade-black p-6 rounded-xl shadow-lg shadow-black w-auto 2xl:w-[18%]">
          <FaPeopleGroup className="text-lg text-yellows" size={50} />
          <div className="flex flex-col items-center justify-center gap-y-2">
            <h1 className="text-3xl font-extrabold text-yellows font-radios">
              {counts.toursCustomers}
            </h1>
            <h3 className="text-lg  text-yellows font-radios">
              Tours Customers
            </h3>
          </div>
        </div>
      </div>
      {/* <h1 className="p-4 text-lg rounded-lg shadow-lg text-yellows lg:text-4xl font-joining bg-light-black bg-opacity-60 shadow-yellows">
        Growth Rate This months
      </h1>
      <div className="flex justify-center w-full gap-x-20">
        <div className={`flex flex-col mt-5 w-[45%] bg-fade-black p-4 rounded-lg shadow-lg shadow-black`}>
          <div className="flex justify-between">
            <div className="mb-1 text-base font-medium dark:text-white">
              Booked Tours
            </div>
            <div className="mb-1 text-base font-medium dark:text-white">
              {percentages.toursBookedPercentage}%
            </div>
          </div>

          <div className="w-full h-5 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
            <div className={`bg-gray-600 h-5 rounded-full dark:bg-gray-300 w-[${percentages.toursBookedPercentage}%]`}></div>
          </div>
          <div className="flex justify-between">
            <div className="mb-1 text-base font-medium text-blue-700 dark:text-blue-700">
              Booked Hotels
            </div>
            <div className="mb-1 text-base font-medium text-blue-700 dark:text-blue-700">
              {percentages.hotelBookedPercentage}%
            </div>
          </div>

          <div className="w-full h-5 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
            <div className={`bg-blue-600 h-5 rounded-full w-[${percentages.hotelBookedPercentage}%]`}></div>
          </div>

          <div className="flex justify-between">
            <div className="mb-1 text-base font-medium text-red-700 dark:text-red-500">
              Booked Transport
            </div>
            <div className="mb-1 text-base font-medium text-red-700 dark:text-red-500">
              {percentages.transportBookedPercentage}%
            </div>
          </div>
          <div className="w-full h-5 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
            <div className={`bg-red-600 h-5 rounded-full dark:bg-red-500 w-[${percentages.transportBookedPercentage}%]`}></div>
          </div>

          <div className="flex justify-between">
            <div className="mb-1 text-base font-medium text-green-700 dark:text-green-500">
              Tours
            </div>
            <div className="mb-1 text-base font-medium text-green-700 dark:text-green-500">
              {percentages.tourPercentage}%
            </div>
          </div>
          <div className="w-full h-5 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
            <div className={`bg-green-600 h-5 rounded-full dark:bg-green-500 w-[${percentages.tourPercentage}%]`}></div>
          </div>
        </div>

        <div className="flex flex-col mt-5 w-[40%] bg-fade-black p-4 rounded-lg shadow-lg shadow-black">
          <div className="flex justify-between">
            <div className="mb-1 text-base font-medium text-yellow-700 dark:text-yellow-500">
              Rooms
            </div>
            <div className="mb-1 text-base font-medium text-yellow-700 dark:text-yellow-500">
              {percentages.roomPercentage}%
            </div>
          </div>
          <div className="w-full h-5 mb-4 bg-gray-200 rounded-full dark:bg-gray-700 ">
            <div className={`bg-yellow-400 h-5 rounded-full w-[${percentages.roomPercentage}%]`}></div>
          </div>

          <div className="flex justify-between">
            <div className="mb-1 text-base font-medium text-indigo-700 dark:text-indigo-500">
              Transports
            </div>
            <div className="mb-1 text-base font-medium text-indigo-700 dark:text-indigo-500">
              {percentages.transportPercentage}%
            </div>
          </div>
          <div className="w-full h-5 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
            <div className={`bg-indigo-600 h-5 rounded-full dark:bg-indigo-500 w-[${percentages.transportPercentage}%]`}></div>
          </div>
          <div className="flex justify-between">
            <div className="mb-1 text-base font-medium text-red-700 dark:text-red-500">
              Customers Arrival
            </div>
            <div className="mb-1 text-base font-medium text-red-700 dark:text-red-500">
              {percentages.totalUsersPercentage}%
            </div>
          </div>
          <div className="w-full h-5 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
            <div className={`bg-red-600 h-5 rounded-full dark:bg-red-500 w-[${percentages.totalUsersPercentage}%]`}></div>
          </div>

          <div className="flex justify-between">
            <div className="mb-1 text-base font-medium text-green-700 dark:text-green-500">
              User Interactions
            </div>
            <div className="mb-1 text-base font-medium text-green-700 dark:text-green-500">
              {percentages.totalReviewsPercentage}%
            </div>
          </div>
          <div className="w-full h-5 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
            <div className={`bg-green-600 h-5 rounded-full dark:bg-green-500 w-[${percentages.totalReviewsPercentage}%]`}></div>
          </div>
        </div>
      </div> */}
      <h1 className="p-4 text-lg rounded-lg shadow-lg text-yellows lg:text-4xl font-joining bg-light-black bg-opacity-60 shadow-yellows">
        Active Users
      </h1>
      {/* table */}
      <div className="relative w-full ml-0 overflow-x-auto shadow-md sm:rounded-lg 2xl:ml-2">
        <table className="w-full text-sm text-left text-white rtl:text-right">
          <thead className="text-xs text-black uppercase bg-yellows ">
            <tr>
              <th scope="col" className="px-2 py-3 2xl:px-6 font-radios">
                UserName
              </th>
              <th scope="col" className="px-2 py-3 2xl:px-6 font-radios">
                Email
              </th>
              <th scope="col" className="px-2 py-3 2xl:px-6 font-radios">
                Address
              </th>
              <th scope="col" className="px-2 py-3 2xl:px-6 font-radios">
                Phone
              </th>
              <th scope="col" className="px-2 py-3 2xl:px-6 font-radios">
                To-Booked
              </th>
              <th scope="col" className="px-2 py-3 2xl:px-6 font-radios">
                Tr-Booked
              </th>
              <th scope="col" className="px-2 py-3 2xl:px-6 font-radios">
                Ho-Booked
              </th>
              {/* <th scope="col" className="px-2 py-3 2xl:px-6 font-radios">
                Action
              </th> */}
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user._id}
                className={`${
                  index % 2 === 0 ? "even:bg-light-black" : "odd:bg-fade-black"
                } border-b dark:border-gray-700 font-radios`}
              >
                <td className="px-2 py-4 text-xs font-medium text-white 2xl:px-6 whitespace-nowrap font-radios">
                  <div className="flex items-center gap-x-2">
                    <img
                      src={image}
                      alt="User Avatar"
                      className="hidden w-8 h-8 xl:flex"
                    />
                    <p className="text-white">{user.userName}</p>
                  </div>
                </td>
                <td className="px-2 py-4 text-xs 2xl:px-6">{user.email}</td>
                <td className="px-2 py-4 text-xs 2xl:px-6">{`${user.address}, ${user.city}`}</td>
                <td className="px-2 py-4 text-xs 2xl:px-6">{user.phone}</td>
                <td className="px-2 py-4 text-xs 2xl:px-6">
                  {user.bookedTour.length}
                </td>
                <td className="px-2 py-4 text-xs 2xl:px-6">
                  {user.bookedTransport.length}
                </td>
                <td className="px-2 py-4 text-xs 2xl:px-6">
                  {user.bookedHotels.length}
                </td>
                {/* <td className="px-2 py-4 text-xs 2xl:px-6">
                <a
                  href="#"
                  className="font-medium text-red-600 hover:underline"
                  // onClick={() => handleDelete(user._id)} // Replace with your delete logic
                >
                  Delete
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

export default Dashboard;
