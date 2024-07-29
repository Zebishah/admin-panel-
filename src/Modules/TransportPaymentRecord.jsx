import axios from "axios";
import { useEffect, useState } from "react";

const PaymentRecord = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const fetchTransportPayments = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/Admin/TransportPayments",
          // If you need to send any data in the request body, add it here
          // Example: { someData: 'value' }
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        // Assuming your API response returns an object with these keys
        setPayments(response.data.payments);
      } catch (error) {
        console.error("Error fetching payments:", error);
      }
    };
    fetchTransportPayments();
  }, []);

  return (
    <div className="flex flex-col w-full gap-y-10">
      <h1 className="mx-auto text-5xl text-yellows font-joining">
        Transport Payments
      </h1>
      <div className="relative w-full ml-0 overflow-x-auto shadow-md sm:rounded-lg 2xl:ml-10">
        <table className="w-full text-sm text-left text-white rtl:text-right">
          <thead className="text-xs text-black uppercase bg-yellows">
            <tr>
              <th scope="col" className="px-2 py-3 2xl:px-6 font-radios">
                Booker
              </th>
              <th scope="col" className="px-2 py-3 2xl:px-6 font-radios">
                Booking
              </th>
              <th scope="col" className="px-2 py-3 2xl:px-6 font-radios">
                Sender-AccId
              </th>
              <th scope="col" className="px-2 py-3 2xl:px-6 font-radios">
                Delivery-Charges
              </th>
              <th scope="col" className="px-2 py-3 2xl:px-6 font-radios">
                Amount
              </th>
              <th scope="col" className="px-2 py-3 2xl:px-6 font-radios">
                BookedTransport
              </th>
              {/* <th scope="col" className="px-2 py-3 2xl:px-6 font-radios">
                Payment-Date
              </th>
              <th scope="col" className="px-2 py-3 2xl:px-6 font-radios">
                Action
              </th> */}
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "even:bg-light-black" : "odd:bg-fade-black"
                } border-b dark:border-gray-700 font-radios`}
              >
                <td className="px-2 py-4 text-xs font-medium text-white 2xl:px-6 whitespace-nowrap font-radios">
                  {payment?.booker}
                </td>
                <td className="px-2 py-4 text-xs 2xl:px-6">
                  {payment?.booking}
                </td>
                <td className="text-[9px] px-2 2xl:px-6 py-4">
                  {payment?.senderAccountId}
                </td>
                <td className="px-2 py-4 text-xs 2xl:px-6">
                  {payment?.deliveryCharges}
                </td>
                <td className="px-2 py-4 text-xs 2xl:px-6">
                  {payment?.totalPrice}
                </td>
                <td className="px-2 py-4 text-xs 2xl:px-6">
                  {payment?.transportName}
                </td>
                {/* <td className="px-2 py-4 text-xs 2xl:px-6">{payment.paymentDate}</td>
                <td className="px-2 py-4 text-xs 2xl:px-6">
                  <a href="#" className="font-medium text-red-600 hover:underline">
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

export default PaymentRecord;
