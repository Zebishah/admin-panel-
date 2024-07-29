const Updates = () => {
  const updates = [
    {
      title: "System Update",
      message: "The system will be down for maintenance at midnight.",
      date: "2023-06-01T14:48:00.000Z",
    },
    {
      title: "New Feature Released",
      message: "Check out the new dashboard feature now available.",
      date: "2023-06-02T09:30:00.000Z",
    },
    {
      title: "Reminder",
      message: "Don't forget to submit your quarterly report by Friday.",
      date: "2023-06-03T08:00:00.000Z",
    },
  ];
  return (
    <div className="flex flex-col gap-y-10 p-6 items-center w-[100%] ">
      <h1 className="p-4 text-lg rounded-lg shadow-lg text-yellows lg:text-4xl font-joining bg-light-black bg-opacity-60 shadow-yellows">
        Site Updates
      </h1>

      <div className="flex flex-col gap-y-6 flex-grow flex-wrap items-center min-h-screen smd:w-[85%] w-[90%]">
        {updates.length > 0 &&
          updates.map((Update, index) => (
            <div
              key={index}
              className="relative flex items-center w-full p-4 mx-auto rounded-lg shadow-xl bg-fade-black shadow-fade-black"
            >
              <span className="absolute top-0 right-0 px-2 mt-2 mr-2 text-xs font-bold text-green-900 uppercase bg-green-400 border rounded-full">
                New
              </span>
              <span className="absolute bottom-0 right-0 py-1 m-1 mr-3 text-xs font-bold text-white uppercase font-radios">
                {new Date(Update.date).toLocaleString()}
              </span>
              <img
                className="w-12 h-12 rounded-full"
                alt="John Doe's avatar"
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80"
              />
              <div className="ml-5">
                <h4 className="text-lg leading-tight font-radios text-yellows">
                  {Update.title}
                </h4>
                <p className="text-sm text-white">{Update.message}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Updates;
