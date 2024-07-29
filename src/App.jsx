import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AddTour from "./Modules/AddTour";
import AddHotel from "./Modules/AddHotel";
import AddRoom from "./Modules/AddRoom";
import Navbar from "./Modules/Navbar";
import SideBar from "./Modules/SideBar";
import Dashboard from "./Modules/Dashboard";
import CatalogOptions from "./Modules/CatalogOptions";
import AddTransport from "./Modules/AddTransport";
import PaymentRecord from "./Modules/PaymentRecord";
import PaymentOptions from "./Modules/PaymentOptions";
import HotelPaymentRecord from "./Modules/HotelPaymentRecord";
import TransportPaymentRecord from "./Modules/TransportPaymentRecord";
import Reviews from "./Modules/Reviews";
import Notifications from "./Modules/Notifications";
import BookingOptions from "./Modules/BookingOptions";
import BookedTours from "./Modules/BookedTours";
import BookedHotels from "./Modules/BookedHotels";
import BookedTransport from "./Modules/BookedTransport";
import DatabaseOptions from "./Modules/DatabaseOptions";
import AllTours from "./Modules/AllTours";
import TourDetails from "./Modules/TourDetails";
import AllHotel from "./Modules/AllHotel";
import AllHotels from "./Modules/AllHotels";
import AllTransport from "./Modules/AllTransport";
import Updates from "./Modules/Updates";
import Messages from "./Modules/Messages";
import AddServiceIternaries from "./Modules/AddServiceIternaries";
import ServicesOptions from "./Modules/ServicesOptions";
import AddHotelServices from "./Modules/AddHotelServices";
import AddTransportServices from "./Modules/AddTransportServices";
import ProfileSettings from "./Modules/ProfileSettings";
import ProfileInfo from "./Modules/ProfileInfo";
import ChangePassword from "./Modules/ChangePassword";
import LoginFrom from "./Modules/LoginFrom";
import EditTour from "./Modules/EditTour";

function App() {
  return (
    <div className="bg-[#252726] h-auto w-full overflow-x-hidden">
      <Router>
        <div className="flex flex-col w-full">
          <Navbar />
          <div className="flex w-full ">
            <div className="flex md:w-[15%]">
              <SideBar />
            </div>
            <div className=" -ml-20 xl:ml-10 w-[98%] xl:w-[78%] flex mr-4 md:mr-0">
              <Routes>
                <Route path="/AddHotel" element={<AddHotel />} />
                <Route path="/EditTour" element={<EditTour />} />
                <Route
                  path="/AddServiceIternaries"
                  element={<AddServiceIternaries />}
                />
                <Route
                  path="/AddHotelServices"
                  element={<AddHotelServices />}
                />
                <Route
                  path="/AddTransportServices"
                  element={<AddTransportServices />}
                />
                <Route path="/Services" element={<ServicesOptions />} />
                <Route path="/Login" element={<LoginFrom />} />
                <Route path="/ProfileSettings" element={<ProfileSettings />} />
                <Route path="/ProfileInfo" element={<ProfileInfo />} />
                <Route path="/ChangePassword" element={<ChangePassword />} />
                <Route path="/Messages" element={<Messages />} />
                <Route path="/Update" element={<Updates />} />
                <Route path="/TourDetails" element={<TourDetails />} />
                <Route path="/AllTours" element={<AllTours />} />
                <Route path="/AllTransport" element={<AllTransport />} />
                <Route path="/AllHotel" element={<AllHotel />} />
                <Route path="/AllHotels" element={<AllHotels />} />
                <Route path="/DatabaseOptions" element={<DatabaseOptions />} />
                <Route path="/BookingOptions" element={<BookingOptions />} />
                <Route path="/BookedTours" element={<BookedTours />} />
                <Route path="/BookedHotels" element={<BookedHotels />} />
                <Route path="/BookedTransport" element={<BookedTransport />} />
                <Route path="/Notification" element={<Notifications />} />
                <Route path="/Reviews" element={<Reviews />} />
                <Route path="/PaymentRecord" element={<PaymentRecord />} />
                <Route path="/AddRoom" element={<AddRoom />} />
                <Route path="/AddTransport" element={<AddTransport />} />
                <Route path="/PaymentOptions" element={<PaymentOptions />} />
                <Route
                  path="/HotelPaymentRecord"
                  element={<HotelPaymentRecord />}
                />
                <Route
                  path="/TransportPaymentRecord"
                  element={<TransportPaymentRecord />}
                />
                <Route path="/AddTour" element={<AddTour />} />
                <Route path="/" element={<Dashboard />} />
                <Route path="/CatalogOptions" element={<CatalogOptions />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
