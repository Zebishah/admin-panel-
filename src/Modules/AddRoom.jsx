import axios from "axios";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const AddRoom = () => {
  const [formData, setFormData] = useState({
    HotelId: "",
    name: "",
    image: null,
    imageUrl: null,
    price: "",
    type: "",
    noOfGuests: "",
    Available: "",
    Location: "",
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
        `http://localhost:5000/Room/addRoom`,
        {
          hotelId: formData.HotelId,
          name: formData.name,
          prices: formData.price,
          type: formData.type,
          description: formData.description,
          image: formData.imageUrl,
          features: formData.features,
          location: formData.Location,
          noOfGuests: formData.noOfGuests,
          available: formData.Available,
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
        console.log("room added");
        toast.success("room successfully added");
        setFormData({
          HotelId: "",
          name: "",
          image: null,
          imageUrl: null,
          price: "",
          type: "",
          noOfGuests: "",
          Available: "",
          Location: "",
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
    <div className="w-full">
      <ToastContainer />
      <div className="landing-page flex flex-col space-y-8 justify-center items-center w-[100%] overflow-hidden mt-10 p-4">
        <h1 className="p-3 text-5xl rounded-lg shadow-lg text-yellows font-joining shadow-yellows">
          Add Room Form
        </h1>
        <section className="bg-white dark:bg-fade-black flex w-[90%] mt-8 rounded-xl shadow-lg shadow-black">
          <div className="py-8 px-4 mx-auto lg:py-16 w-[90%] ">
            <h2 className="mb-4 text-xl font-bold text-yellows dark:text-yellows">
              Add a new Room
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="HotelId"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Hotel-Id
                  </label>
                  <input
                    type="text"
                    name="HotelId"
                    id="HotelId"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type HotelId"
                    value={formData.HotelId}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Room Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="type"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Room type
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  >
                    <option value="">Select type</option>
                    <option value="Suite rooms">Suite rooms</option>
                    <option value="Couple rooms">Couple rooms</option>
                    <option value="Vip rooms">Vip rooms</option>
                    <option value="Simple rooms">Simple rooms</option>
                    <option value="Heavy rooms">Heavy rooms</option>
                  </select>
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
                    name="price"
                    id="price"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Prices"
                    value={formData.price}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="w-full">
                  <label
                    htmlFor="noOfGuests"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    No of Guests
                  </label>
                  <input
                    type="text"
                    name="noOfGuests"
                    id="noOfGuests"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="noOfGuests"
                    value={formData.noOfGuests}
                    onChange={handleChange}
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
                    name="Available"
                    id="Available"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="yes"
                    value={formData.Available}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="Location"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Room Location
                  </label>
                  <input
                    type="text"
                    name="Location"
                    id="Location"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Room Location"
                    value={formData.Location}
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
                <div className="md:col-span-2">
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
                Add Room
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AddRoom;
