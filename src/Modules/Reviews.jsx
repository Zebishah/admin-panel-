import { useState, useEffect } from "react";
import axios from "axios";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/Admin/reviews",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setReviews(response.data.reviews);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []); // Empty dependency array means this effect runs only once on msount

  return (
    <div className="flex flex-col items-center justify-center w-full h-auto gap-y-8">
      <h1 className="text-5xl text-center text-yellows font-joining">
        Reviews
      </h1>
      <div className="flex flex-col justify-center items-center space-y-10 p-12 w-full sm:w-80%">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="w-full p-4 border-2 shadow-lg bg-fade-black border-yellows rounded-xl shadow-yellows"
          >
            <div className="flex flex-col items-center mb-4 gap-y-4">
              <div className="mr-4 overflow-hidden rounded-full">
                {/* Assuming 'image' field is a base64 encoded image */}
                <img
                  src={review?.image}
                  alt="user-avatar"
                  className="w-12 h-12"
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-y-2">
                <h2 className="text-sm sm:text-xl text-yellows font-radios">
                  {review?.name}
                </h2>
                <h2 className="text-sm sm:text-xl text-yellows font-radios">
                  {review?.reviewedService}
                </h2>
              </div>
            </div>
            <p className="text-sm text-center text-white font-radios sm:text-lg">
              {review?.words}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
