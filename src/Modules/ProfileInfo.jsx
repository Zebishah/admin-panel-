import { useState } from "react";
import sub from "../images/man-user-circle-icon.png";
const ProfileInfo = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userCity, setUserCity] = useState("");
  const [userAccountId, setUserAccId] = useState("");
  const [userBalance, setUserBalance] = useState(0);
  const [userVerified, setUserVerified] = useState("");
  const [imageReal, setImage] = useState("");
  return (
    <div className="flex flex-col gap-y-10 justify-center items-center w-full">
      <h1 className="text-yellows text-lg font-joining lg:text-4xl bg-light-black bg-opacity-60 p-4 rounded-lg shadow-lg shadow-yellows">
        User Personal Information
      </h1>
      <div className="bg-fade-black shadow-yellows rounded-lg shadow overflow-hidden sm:rounded-lg w-[80%]">
        <div className="px-4 py-5 sm:px-6 w-full">
          <h3 className="text-lg leading-6 font-medium text-yellows">
            User database
          </h3>
          <p className="mt-1 text-sm text-white">
            Details and informations about user.
          </p>
        </div>
        <div className="border-t border-gray-200 w-full flex justify-center items-center">
          <dl className="flex flex-col">
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm mt-4 font-medium text-yellows font-radios">
                Image
              </dt>
              <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2 font-radios">
                <img
                  src={imageReal !== " " ? imageReal : sub}
                  alt="User Profile"
                  className="h-8 w-8 md:h-14 md:w-14 rounded-full object-cover"
                />
              </dd>
            </div>
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-yellows font-radios">
                User-Name
              </dt>
              <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2 font-radios">
                {userName ? userName : "Not Provided"}
              </dd>
            </div>
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-yellows font-radios">
                User-Email
              </dt>
              <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2 font-radios">
                {userEmail !== " " ? userEmail : "Not Provided"}
              </dd>
            </div>
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-yellows font-radios">
                User-Phone
              </dt>
              <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2 font-radios">
                {userPhone !== " " ? userPhone : "Not Provided"}
              </dd>
            </div>
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-yellows font-radios">
                User-Address
              </dt>
              <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2 font-radios">
                {userAddress !== " " ? userAddress : "Not Provided"}
              </dd>
            </div>
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-yellows font-radios">
                User-City
              </dt>
              <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2 font-radios">
                {userCity !== " " ? userCity : "Not Provided"}
              </dd>
            </div>
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-yellows font-radios">
                User-Balance
              </dt>
              <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2 font-radios">
                {userBalance ? userBalance : "Not Provided"}
              </dd>
            </div>
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-yellows font-radios">
                User-Verified
              </dt>
              <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2 font-radios">
                {userVerified ? userVerified : "Not Provided"}
              </dd>
            </div>
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-yellows font-radios">
                userAccountId
              </dt>
              <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2 font-radios">
                {userAccountId ? userAccountId : "Not Verified"}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
