function Shop() {
  const products = [
    {
      id: 1,
      name: "Nike Shoes",
      price: "$120",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    },
    {
      id: 2,
      name: "Luxury Watch",
      price: "$250",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    },
    {
      id: 3,
      name: "Men's Jacket",
      price: "$90",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
    },
    {
      id: 4,
      name: "Ladies Handbag",
      price: "$180",
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500",
    },
    {
      id: 5,
      name: "Headphones",
      price: "$80",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    },
    {
      id: 6,
      name: "Smart Watch",
      price: "$199",
      image:
        "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=500",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-10">

      <h1 className="text-5xl font-bold text-center mb-10">
        Our Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-72 object-cover"
            />

            <div className="p-5">

              <h2 className="text-2xl font-bold">
                {item.name}
              </h2>

              <p className="text-pink-600 text-xl font-bold mt-2">
                {item.price}
              </p>

              <button className="mt-5 w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700">
                Add To Cart
              </button>

            </div>
          </div>
        ))}

      </div>

    </div>
  );
}

export default Shop;