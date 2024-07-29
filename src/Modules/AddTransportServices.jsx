import { useState } from "react";
const AddTransportServices = () => {
  const [tourId, setTourId] = useState("");
  const [priceIncludes, setPriceIncludes] = useState([]);
  const [priceExcludes, setPriceExcludes] = useState([]);
  const [activities, setActivities] = useState([]);
  const [daysServices, setDaysServices] = useState([
    { day: "", services: [""] },
  ]);

  const handleAddPriceInclude = () => setPriceIncludes([...priceIncludes, ""]);
  const handleAddPriceExclude = () => setPriceExcludes([...priceExcludes, ""]);
  const handleAddActivity = () => setActivities([...activities, ""]);
  const handleAddDayService = () =>
    setDaysServices([...daysServices, { day: "", services: [""] }]);

  const handleServiceChange = (index, serviceIndex, value) => {
    const updatedDaysServices = [...daysServices];
    updatedDaysServices[index].services[serviceIndex] = value;
    setDaysServices(updatedDaysServices);
  };

  //   const handleAddService = (index) => {
  //     const updatedDaysServices = [...daysServices];
  //     updatedDaysServices[index].services.push("");
  //     setDaysServices(updatedDaysServices);
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tourData = {
      tourId,
      priceIncludes,
      priceExcludes,
      activities,
      daysServices,
    };
    console.log(tourData);
    // Make API call to backend to save tourData
  };
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen space-y-6 landing-page ">
      <h1 className="p-4 text-5xl rounded-lg shadow-lg text-yellows font-joining bg-light-black bg-opacity-70 shadow-yellows">
        Add Transport Services
      </h1>
      <div className="container p-4 mx-auto">
        <form
          className="p-8 rounded-lg shadow-lg bg-fade-black"
          onSubmit={handleSubmit}
        >
          <h2 className="mb-4 text-2xl text-yellows">
            Add Transport Information
          </h2>

          <div className="mb-4">
            <label className="block mb-2 text-yellows">Transport ID</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              value={tourId}
              onChange={(e) => setTourId(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-yellows">Price Includes</label>
            {priceIncludes.map((item, index) => (
              <input
                key={index}
                type="text"
                className="w-full p-2 mb-2 border border-gray-300 rounded"
                value={item}
                onChange={(e) => {
                  const updatedIncludes = [...priceIncludes];
                  updatedIncludes[index] = e.target.value;
                  setPriceIncludes(updatedIncludes);
                }}
                required
              />
            ))}
            <button
              type="button"
              className="text-yellows"
              onClick={handleAddPriceInclude}
            >
              + Add
            </button>
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-yellows">Price Excludes</label>
            {priceExcludes.map((item, index) => (
              <input
                key={index}
                type="text"
                className="w-full p-2 mb-2 border border-gray-300 rounded"
                value={item}
                onChange={(e) => {
                  const updatedExcludes = [...priceExcludes];
                  updatedExcludes[index] = e.target.value;
                  setPriceExcludes(updatedExcludes);
                }}
                required
              />
            ))}
            <button
              type="button"
              className="text-yellows"
              onClick={handleAddPriceExclude}
            >
              + Add
            </button>
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-yellows">Services</label>
            {activities.map((item, index) => (
              <input
                key={index}
                type="text"
                className="w-full p-2 mb-2 border border-gray-300 rounded"
                value={item}
                onChange={(e) => {
                  const updatedActivities = [...activities];
                  updatedActivities[index] = e.target.value;
                  setActivities(updatedActivities);
                }}
                required
              />
            ))}
            <button
              type="button"
              className="text-yellows"
              onClick={handleAddActivity}
            >
              + Add
            </button>
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-yellows">Complete Info</label>
            {daysServices.map((dayService, index) => (
              <div key={index} className="mb-4">
                <input
                  type="text"
                  placeholder="Attribute"
                  className="w-full p-2 mb-2 border border-gray-300 rounded"
                  value={dayService.day}
                  onChange={(e) => {
                    const updatedDaysServices = [...daysServices];
                    updatedDaysServices[index].day = e.target.value;
                    setDaysServices(updatedDaysServices);
                  }}
                  required
                />
                {dayService.services.map((service, serviceIndex) => (
                  <input
                    key={serviceIndex}
                    type="text"
                    placeholder="Detail"
                    className="w-full p-2 mb-2 border border-gray-300 rounded"
                    value={service}
                    onChange={(e) =>
                      handleServiceChange(index, serviceIndex, e.target.value)
                    }
                    required
                  />
                ))}
              </div>
            ))}
            <button
              type="button"
              className="text-yellows"
              onClick={handleAddDayService}
            >
              + Add Attributes
            </button>
          </div>

          <button
            type="submit"
            className="w-full p-2 text-black rounded bg-yellows"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTransportServices;
