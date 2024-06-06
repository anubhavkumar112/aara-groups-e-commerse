

const RecentlyBoughtItems = () => {
  // Dummy data for recently bought items
  const recentlyBoughtItems = [
    {
      id: 1,
      name: "Phone A",
      image: "path/to/image1.jpg",
    },
    {
      id: 2,
      name: "Phone B",
      image: "path/to/image2.jpg",
    },
    {
      id: 3,
      name: "Phone C",
      image: "path/to/image3.jpg",
    },
  ];

  return (
    <div className="lg:w-[30%] md:w-[50%] w-[80%] h-[450px] border-2 border-gray-300 rounded-lg m-auto mt-5 lg:mt-0">
      <h2 className="font-bold text-xl px-3 mt-3">Recently Bought Items</h2>
      <div className="flex flex-col items-center mt-3">
        {recentlyBoughtItems.map((item) => (
          <div key={item.id} className="my-2 w-3/4">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-auto rounded-lg"
            />
            <p className="text-center mt-2 font-semibold">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyBoughtItems;
