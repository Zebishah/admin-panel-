import { faCar, faHotel, faMap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const ServicesOptions = () => {
  return (
    <div className="flex flex-col justify-center gap-y-10 p-6 items-center w-[100%] ">
      <h1 className="p-4 text-5xl rounded-lg shadow-lg text-yellows font-joining bg-light-black bg-opacity-70 shadow-yellows ">
        Services Options
      </h1>
      <section className="benefits-container grid grid-cols-1 md:grid-cols-3 gap-4 px-4 py-16 w-[80%]">
        <Link to={"/AddServiceIternaries"}>
          <div className="flex flex-col items-center p-4 rounded-md shadow-lg benefit-card bg-fade-black gap-y-3 ">
            <FontAwesomeIcon
              icon={faMap}
              className="items-center text-4xl text-yellows"
            ></FontAwesomeIcon>
            <div className="flex flex-col items-center justify-center gap-y-0">
              <h3 className="mb-2 text-xl font-semibold text-yellows ">
                Tours Services{" "}
              </h3>
              <p className="text-center text-white ">
                Thrilling adventures await! Join us for adrenaline-pumping
                journeys experiences worldwide.
              </p>
            </div>
          </div>
        </Link>
        <Link to={"/AddHotelServices"}>
          <div className="flex flex-col items-center p-4 rounded-md shadow-lg benefit-card bg-fade-black gap-y-3">
            <FontAwesomeIcon
              icon={faHotel}
              className="items-center text-4xl text-yellows"
            ></FontAwesomeIcon>
            <div className="flex flex-col items-center justify-center gap-y-0">
              <h3 className="mb-2 text-xl font-semibold text-center text-yellows">
                Hotel Services
              </h3>
              <p className="text-center text-white">
                Thrilling adventures await! Join us for adrenaline-pumping
                journeys experiences worldwide.
              </p>
            </div>
          </div>
        </Link>
        <Link to={"/AddTransportServices"}>
          <div className="flex flex-col items-center p-4 rounded-md shadow-lg benefit-card bg-fade-black gap-y-3 ">
            <FontAwesomeIcon
              icon={faCar}
              className="items-center text-4xl text-yellows"
            ></FontAwesomeIcon>
            <div className="flex flex-col items-center justify-center gap-y-0">
              <h3 className="mb-2 text-xl font-semibold text-center text-yellows">
                transport Services
              </h3>
              <p className="text-center text-white">
                Thrilling adventures await! Join us for adrenaline-pumping
                journeys experiences worldwide.
              </p>
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
};

export default ServicesOptions;
