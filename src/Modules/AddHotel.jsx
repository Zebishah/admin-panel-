import axios from "axios";
import { useState } from "react";

const AddHotel = () => {
  const [formData, setFormData] = useState({
    name: "",
    image: null,
    imageUrl: null,
    prices: "",
    roomCount: "",
    location: "",
    description: "",
    features: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({
        ...formData,
        image: file,
        imageUrl: reader.result,
      });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission, e.g., send formData to the server
    try {
      const response = await axios.post(
        `https://epic-explorer-backend.vercel.app/Hotel/addHotel`,
        {
          name: formData.name,
          prices: formData.prices,
          roomCount: formData.roomCount,
          description: formData.description,
          image: formData.imageUrl,
          features: formData.features,
          location: formData.location,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.data;
      console.log(data.success);

      // if (data.success === false) {
      //   toast.error(data.message);
      // }
      if (data.success && data.success === true) {
        console.log("hotel added");
        setFormData({
          name: "",
          image: null,
          imageUrl: null,
          prices: "",
          roomCount: "",
          location: "",
          description: "",
          features: "",
        });
      }

      console.log("Successful");
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      features: value.split(",").map((feature) => feature.trim()),
    });
  };

  return (
    <div className="flex flex-col items-center justify-center w-full mt-8 overflow-hidden space-y-14 py-9 landing-page">
      <h1 className="p-3 text-5xl rounded-lg shadow-lg text-yellows font-joining shadow-yellows">
        Add Hotel Form
      </h1>
      <section className="bg-white dark:bg-fade-black flex w-[90%] mt-8">
        <div className="py-8 px-4 mx-auto lg:py-16 w-[90%] ">
          <h2 className="mb-4 text-xl font-bold text-yellows dark:text-yellows">
            Add a new Hotel
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Hotel Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type tour name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="roomCount"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  RoomCount
                </label>
                <input
                  type="text"
                  name="roomCount"
                  id="roomCount"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Hotel Room Count"
                  value={formData.roomCount}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="prices"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Prices
                </label>
                <input
                  type="number"
                  name="prices"
                  id="prices"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="$2999"
                  value={formData.prices}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="location"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  location
                </label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="image"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Image
                </label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  onChange={handleImageChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Upload image"
                />
              </div>
              <div>
                <label
                  htmlFor="features"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Features (separate each feature with a comma)
                </label>
                <textarea
                  name="features"
                  id="features"
                  rows="3"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="e.g. Free WiFi, Breakfast included, Swimming pool"
                  value={formData.features}
                  onChange={handleInputChange}
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  rows={8}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="description"
                  defaultValue={""}
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-yellows text-black inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
            >
              Add Hotel
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddHotel;
