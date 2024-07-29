import axios from "axios";
import { useState } from "react";

const AddTour = () => {
  const [formData, setFormData] = useState({
    name: "",
    image: null,
    imageUrl: null,
    startDate: "",
    price: "",
    time: "",
    ReturnLoc: "",
    Available: "",
    category: "",
    ParentCategory: "",
    MembersLimit: "",
    Location: "",
    endDate: "",
    description: "",
    days: "",
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
    console.log(formData.image);
    // Handle form submission, e.g., send formData to the server
    try {
      const response = await axios.post(
        `http://localhost:5000/Tour/addTour`,
        {
          name: formData.name,
          price: formData.price,
          days: formData.days,
          startDate: formData.startDate,
          endDate: formData.endDate,
          parentCategory: formData.ParentCategory,
          description: formData.description,

          type: formData.category,
          departureTime: formData.time,
          available: formData.Available,
          Departure_ReturnLocation: formData.ReturnLoc,
          membersLimit: formData.MembersLimit,
          tourLocation: formData.Location,
          image: formData.imageUrl,
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
        console.log("tour added");
        setFormData({
          name: "",
          image: null,
          imageUrl: null,
          startDate: "",
          price: "",
          time: "",
          ReturnLoc: "",
          Available: "",
          category: "",
          ParentCategory: "",
          MembersLimit: "",
          Location: "",
          endDate: "",
          description: "",
          days: "",
        });
      }

      console.log("Successful");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="landing-page flex flex-col space-y-8 justify-center items-center w-[100%] overflow-hidden py-9">
      <h1 className="p-3 text-5xl rounded-lg shadow-lg text-yellows font-joining shadow-yellows ">
        Add Tour Form
      </h1>
      <section className="bg-white dark:bg-fade-black flex w-[100%] mt-8 rounded-xl shadow-lg shadow-black">
        <div className="py-8 px-4 mx-auto lg:py-16 w-[90%] ">
          <h2 className="mb-4 text-xl font-bold text-yellows dark:text-yellows">
            Add a new Tour
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Tour Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type tour name"
                  required
                />
              </div>
              <div className="sm:col-span-1">
                <label
                  htmlFor="days"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Days
                </label>
                <input
                  type="text"
                  name="days"
                  id="days"
                  value={formData.days}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type tour name"
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
              <div className="w-full">
                <label
                  htmlFor="startDate"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Start Date
                </label>
                <input
                  type="text"
                  name="startDate"
                  id="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Start Date"
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
                  name="price"
                  id="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="$2999"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="time"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Departure Time
                </label>
                <input
                  type="text"
                  name="time"
                  id="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Departure Time"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="ReturnLoc"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Departure Return Location
                </label>
                <input
                  type="text"
                  name="ReturnLoc"
                  id="ReturnLoc"
                  value={formData.ReturnLoc}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Departure Return Location"
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
                  value={formData.Available}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Tour Availability"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option value="">Select category</option>
                  <option value="Personal">Personal</option>
                  <option value="Family">Family</option>
                  <option value="HoneyMoon">HoneyMoon</option>
                  <option value="Cultural">Cultural</option>
                  <option value="Adventure">Adventure</option>
                </select>
              </div>
              <div className="w-full">
                <label
                  htmlFor="ParentCategory"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Parent Category
                </label>
                <input
                  type="text"
                  name="ParentCategory"
                  id="ParentCategory"
                  value={formData.ParentCategory}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Parent Category"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="MembersLimit"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Members Limit
                </label>
                <input
                  type="text"
                  name="MembersLimit"
                  id="MembersLimit"
                  value={formData.MembersLimit}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Members Limit"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="Location"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Location
                </label>
                <input
                  type="text"
                  name="Location"
                  id="Location"
                  value={formData.Location}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Location"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="endDate"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  End Date
                </label>
                <input
                  type="text"
                  name="endDate"
                  id="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="End Date"
                  required
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
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="8"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Tour Description"
                  required
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className=" inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center bg-yellows text-black rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
            >
              Add tour
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddTour;
