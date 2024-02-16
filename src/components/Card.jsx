const Card = ({ item }) => {
  const { id, title, img, desc, price } = item;
  return (
    <div key={item.id} className="group relative bg-red-50 rounded p-2 ">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-80 lg:h-80">
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between px-2">
        <div>
          <h3 className="text-xl font-semibold capitalize mt-2  text-gray-700 flex flex-row justify-between ">
            {title}
          </h3>
          <p className="text-xl font-bold text-gray-600">₹ {price}</p>
          <p className="mt-1 text-sm font-sans">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
