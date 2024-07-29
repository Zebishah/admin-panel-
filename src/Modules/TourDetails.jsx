const TourDetails = () => {
  //  const location = useLocation();
  //  const dispatch = useDispatch();
  //  const { tourBookingDet } = useSelector((state) => state.userBookings);

  //  useEffect(() => {
  //    const searchParams = new URLSearchParams(location.search);
  //    const id = searchParams.get("id");

  //    if (id) {
  //      dispatch(tourBookingDetail(id));
  //    }
  //  }, [location.search, dispatch]);

  //  const [bookedTourNo, setBookedTourNo] = useState(0);

  //  const [tourName, setTourName] = useState("");
  //  const [tourPrice, setTourPrice] = useState(0);
  //  const [tourImage, setTourImage] = useState("");
  //  const [startDate, setStartDate] = useState("");
  //  const [endDate, setEndDate] = useState("");
  //  const [checkInDate, setCheckInDate] = useState("");
  //  const [travelers, setTravelers] = useState([]);
  //  const [bookerName, setBookerName] = useState("");
  //  const [bookerEmail, setBookerEmail] = useState("");
  //  const [bookerPhone, setBookerPhone] = useState("");
  //  const [bookerAddress, setBookerAddress] = useState("");
  //  const [suggestion, setSuggestion] = useState("");
  //  const [members, setMembers] = useState("");
  //  const [booksCount, setBooksCount] = useState(0);
  //  const resetState = () => {
  //    setBookedTourNo(0);
  //    setTourName("");
  //    setTourPrice(0);
  //    setTourImage("");
  //    setStartDate("");
  //    setEndDate("");
  //    setCheckInDate("");
  //    setTravelers([]);
  //    setBookerName("");
  //    setBookerEmail("");
  //    setBookerPhone("");
  //    setBookerAddress("");
  //    setSuggestion("");
  //    setMembers("");
  //    setBooksCount(0);
  //  };
  //  useEffect(() => {
  //    if (
  //      tourBookingDet &&
  //      tourBookingDet.tours &&
  //      tourBookingDet.tours.length > 0
  //    ) {
  //      const tour = tourBookingDet.tours[0];
  //      resetState();
  //      setBookedTourNo(tour.bookedTourNo);

  //      setTourName(tour.name);
  //      setTourPrice(tour.price);
  //      setTourImage(tour.image);
  //      setStartDate(tour.startDate);
  //      setEndDate(tour.endDate);
  //      setCheckInDate(tour.checkInDate);
  //      setTravelers(tour.travelers);
  //      setBookerName(tour.bookerName);
  //      setBookerEmail(tour.bookerEmail);
  //      setBookerPhone(tour.bookerPhone);
  //      setBookerAddress(tour.bookerAddress);
  //      setSuggestion(tour.suggestion);
  //      setMembers(tour.members);
  //      setBooksCount(tour.BooksCount);
  //    }
  //  }, [tourBookingDet]);

  return (
    <div className="flex flex-col justify-center gap-y-10 p-6 items-center w-[80%]">
      <h1 className="p-4 my-10 text-4xl font-bold text-yellows bg-fade-black rounded-xl">
        Tour Bookings
      </h1>
      <div className="bg-fade-black shadow-yellows rounded-lg shadow overflow-hidden sm:rounded-lg w-[80%]">
        <div className="w-full px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-yellows">
            Tours Database
          </h3>
          <p className="mt-1 text-sm text-white">
            Details and information about Tour.
          </p>
        </div>
        <div className="flex items-center justify-center w-full border-t border-gray-200">
          <dl className="flex flex-col">
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-yellows font-radios">
                Tour-Id
              </dt>
              <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2 font-radios">
                6672a31fa476fa011d178533
                {/* {bookedTourNo || "Not Provided"} */}
              </dd>
            </div>
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-yellows font-radios">
                Tour Name
              </dt>
              <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2 font-radios">
                Swaat Summer
                {/* {tourName || "Not Provided"} */}
              </dd>
            </div>
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-yellows font-radios">
                Tour Price
              </dt>
              <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2 font-radios">
                20000pkr
                {/* {tourPrice || "Not Provided"} */}
              </dd>
            </div>
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-yellows font-radios">
                Start Date
              </dt>
              <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2 font-radios">
                2020-09-10
                {/* {startDate || "Not Provided"} */}
              </dd>
            </div>
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-yellows font-radios">
                End Date
              </dt>
              <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2 font-radios">
                2020-09-10
                {/* {endDate || "Not Provided"} */}
              </dd>
            </div>
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-yellows font-radios">
                Category
              </dt>
              <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2 font-radios">
                Tour Packages
                {/* {checkInDate || "Not Provided"} */}
              </dd>
            </div>
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-yellows font-radios">
                Description
              </dt>
              <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2 font-radios">
                its a very amazing tour and i love working in this tour
                {/* {travelers.length > 0 ? travelers.join(", ") : "Not Provided"} */}
              </dd>
            </div>
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-yellows font-radios">
                Tour-Type
              </dt>
              <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2 font-radios">
                HoneyMoon Tour
                {/* {bookerName || "Not Provided"} */}
              </dd>
            </div>
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-yellows font-radios">
                Departure-Time
              </dt>
              <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2 font-radios">
                4pm
                {/* {bookerEmail || "Not Provided"} */}
              </dd>
            </div>
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-yellows font-radios">
                Departure-ReturnLoc
              </dt>
              <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2 font-radios">
                islamabad-Rawalpindi
                {/* {bookerPhone || "Not Provided"} */}
              </dd>
            </div>
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-yellows font-radios">
                Tour Availability
              </dt>
              <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2 font-radios">
                Available
                {/* {bookerAddress || "Not Provided"} */}
              </dd>
            </div>
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-yellows font-radios">
                Books-Count
              </dt>
              <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2 font-radios">
                05
                {/* {suggestion || "Not Provided"} */}
              </dd>
            </div>
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-yellows font-radios">
                Members-Limit
              </dt>
              <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2 font-radios">
                04
                {/* {members || "Not Provided"} */}
              </dd>
            </div>
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-yellows font-radios">
                Tours Location
              </dt>
              <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2 font-radios">
                Swaat
                {/* {members || "Not Provided"} */}
              </dd>
            </div>
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-yellows font-radios">
                Collection
              </dt>
              <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2 font-radios">
                Swaat
                {/* {booksCount} */}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default TourDetails;
