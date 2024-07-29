import axios from "axios";
import { useState } from "react";

const AddTransport = () => {
  const [formData, setFormData] = useState({
    image: null,
    imageUrl: null,
    carName: "",
    prices: "",
    seats: "",
    type: "",
    description: "",
    allowedGuests: "",
    available: "",
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
        `http://localhost:5000/Transport/addTransport`,
        {
          carName: formData.carName,
          prices: formData.prices,
          seats: formData.seats,
          type: formData.type,
          description: formData.description,
          image: formData.imageUrl,
          allowedGuests: formData.allowedGuests,
          available: formData.available,
          features: formData.features,
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
        console.log("Transport added");
        setFormData({
          image: null,
          imageUrl: null,
          carName: "",
          prices: "",
          seats: "",
          type: "",
          description: "",
          allowedGuests: "",
          available: "",
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
    <div className="flex flex-col items-center justify-center w-full h-screen space-y-10 overflow-hidden landing-page ">
      <h1 className="text-5xl rounded-lg shadow-lg text-yellows font-joining shadow-yellows">
        Add Transport Form
      </h1>
      <section className="bg-white dark:bg-fade-black flex w-[90%] mt-8 rounded-lg shadow-lg shadow-black">
        <div className="py-8 px-4 mx-auto lg:py-16 w-[90%] ">
          <h2 className="mb-4 text-xl font-bold text-yellows dark:text-yellows">
            Add a new Transport
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Car Name
                </label>
                <input
                  type="text"
                  name="carName"
                  id="carName"
                  value={formData.carName}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type car name"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="seats"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Seats
                </label>
                <input
                  type="text"
                  name="seats"
                  id="seats"
                  value={formData.seats}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="seats"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Price
                </label>
                <input
                  type="number"
                  name="prices"
                  id="prices"
                  value={formData.prices}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="price"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="type"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  type
                </label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option value="">Select type</option>
                  <option value="Luxury">Luxury</option>
                  <option value="Normal">Normal</option>
                  <option value="Vip">Vip</option>
                </select>
              </div>
              <div className="w-full">
                <label
                  htmlFor="AllowedGuest"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Allowed Guest
                </label>
                <input
                  type="text"
                  name="allowedGuests"
                  id="allowedGuests"
                  value={formData.allowedGuests}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="AllowedGuest"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="Available"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Available
                </label>
                <input
                  type="text"
                  name="available"
                  id="available"
                  value={formData.available}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Availability"
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
              <div className="overflow-hidden md:col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={8}
                  value={formData.description}
                  onChange={handleChange}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Your description here"
                  defaultValue={""}
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-yellows text-black inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
            >
              Add transport
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddTransport;
