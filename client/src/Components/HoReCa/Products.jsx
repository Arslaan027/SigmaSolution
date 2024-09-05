import React from "react";
import {
  FiCoffee,
  FiPackage,
  FiBox,
  FiShoppingBag,
  FiCheckSquare,
  FiTruck,
} from "react-icons/fi";

const Products = () => {
  const products = [
    {
      title: "Coffee Beans",
      description: "Premium Arabica coffee beans.",
      icon: <FiCoffee className="text-red-500 text-2xl mr-3" />,
      imageUrl:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSxPeUp-FeNpODI9a9bIkTDduBgzW5aUaNJaqEOafp21el_uugZvhZlvLbFe68DxhcoX4mW4LxiEgFQTDOArPX_qiWu8leRa3fZxjdac2PV&usqp=CAE",
    },
    {
      title: "Tea Bags",
      description: "Organic green tea bags.",
      icon: <FiPackage className="text-red-500 text-2xl mr-3" />,
      imageUrl:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSrKwpzQuBmSVJmufqqfA40alQpwmotKBTfHLDQ0Qr3zR029qfUViJdpJMvjsc3Yniik-_VL-GTutATqKOEDZ6dqpGaRsS0YZq2QWtIcxqHKyS9LjTKcxZk&usqp=CAE",
    },
    {
      title: "Juice Concentrates",
      description: "Mixed fruit juice concentrates.",
      icon: <FiBox className="text-red-500 text-2xl mr-3" />,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTYqfDO4vavywgqXgcQ-co2eBGezO28SS-1wRc11FJe8BL_mTsBl2WKr25JgrAK8M4XyLUImT_TdG6k_Hkp18Zd9M8BZCc7_x6qkENGxeJf&usqp=CAE",
    },
    {
      title: "Frozen Vegetables",
      description: "Frozen mixed vegetables.",
      icon: <FiShoppingBag className="text-red-500 text-2xl mr-3" />,
      imageUrl:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTuLOkSuS48w5upWSfgBjxy3ICwc1whBXTm733FRfNTIgAqBKxNIRaWoqLlk6Vd43jzCqmMhyoi6R_HgCwiZpeHz2MJIDDBkw&usqp=CAE",
    },
    {
      title: "Baking Ingredients",
      description: "High-quality flour, yeast.",
      icon: <FiCheckSquare className="text-red-500 text-2xl mr-3" />,
      imageUrl:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTvlGDgkVL3wPtudqeVHP8xUW5NP0AWvoE6WVurHGCMcDaR9s9xEMRGejX8FOg48XL564VD4ut3WdS0ALvLR6cxOPdPf57TIPhdCSVd6WYO2cUidK13eZO7gg&usqp=CAE",
    },
    {
      title: "Dairy Products",
      description: "Fresh milk and cream.",
      icon: <FiTruck className="text-red-500 text-2xl mr-3" />,
      imageUrl:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSxPeUp-FeNpODI9a9bIkTDduBgzW5aUaNJaqEOafp21el_uugZvhZlvLbFe68DxhcoX4mW4LxiEgFQTDOArPX_qiWu8leRa3fZxjdac2PV&usqp=CAE",
    },
    {
      title: "Frozen Meats",
      description: "Chicken, beef, lamb.",
      icon: <FiShoppingBag className="text-red-500 text-2xl mr-3" />,
      imageUrl:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSxPeUp-FeNpODI9a9bIkTDduBgzW5aUaNJaqEOafp21el_uugZvhZlvLbFe68DxhcoX4mW4LxiEgFQTDOArPX_qiWu8leRa3fZxjdac2PV&usqp=CAE",
    },
    {
      title: "Cleaning Supplies",
      description: "Industrial cleaning chemicals.",
      icon: <FiCheckSquare className="text-red-500 text-2xl mr-3" />,
      imageUrl:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSxPeUp-FeNpODI9a9bIkTDduBgzW5aUaNJaqEOafp21el_uugZvhZlvLbFe68DxhcoX4mW4LxiEgFQTDOArPX_qiWu8leRa3fZxjdac2PV&usqp=CAE",
    },
    {
      title: "Cooking Oils",
      description: "Olive oil, sunflower oil.",
      icon: <FiPackage className="text-red-500 text-2xl mr-3" />,
      imageUrl:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSxPeUp-FeNpODI9a9bIkTDduBgzW5aUaNJaqEOafp21el_uugZvhZlvLbFe68DxhcoX4mW4LxiEgFQTDOArPX_qiWu8leRa3fZxjdac2PV&usqp=CAE",
    },
    {
      title: "Paper Products",
      description: "Napkins, towels, tissues.",
      icon: <FiBox className="text-red-500 text-2xl mr-3" />,
      imageUrl:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSxPeUp-FeNpODI9a9bIkTDduBgzW5aUaNJaqEOafp21el_uugZvhZlvLbFe68DxhcoX4mW4LxiEgFQTDOArPX_qiWu8leRa3fZxjdac2PV&usqp=CAE",
    },
    {
      title: "Spices & Seasonings",
      description: "Chili, oregano, salt.",
      icon: <FiCheckSquare className="text-red-500 text-2xl mr-3" />,
      imageUrl:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSxPeUp-FeNpODI9a9bIkTDduBgzW5aUaNJaqEOafp21el_uugZvhZlvLbFe68DxhcoX4mW4LxiEgFQTDOArPX_qiWu8leRa3fZxjdac2PV&usqp=CAE",
    },
    {
      title: "Canned Foods",
      description: "Tomatoes, beans, corn.",
      icon: <FiPackage className="text-red-500 text-2xl mr-3" />,
      imageUrl:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSxPeUp-FeNpODI9a9bIkTDduBgzW5aUaNJaqEOafp21el_uugZvhZlvLbFe68DxhcoX4mW4LxiEgFQTDOArPX_qiWu8leRa3fZxjdac2PV&usqp=CAE",
    },
    {
      title: "Non-Alcoholic Beverages",
      description: "Juices, soda, water.",
      icon: <FiTruck className="text-red-500 text-2xl mr-3" />,
      imageUrl:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSxPeUp-FeNpODI9a9bIkTDduBgzW5aUaNJaqEOafp21el_uugZvhZlvLbFe68DxhcoX4mW4LxiEgFQTDOArPX_qiWu8leRa3fZxjdac2PV&usqp=CAE",
    },
    {
      title: "Pasta & Grains",
      description: "Pasta, rice, quinoa.",
      icon: <FiCoffee className="text-red-500 text-2xl mr-3" />,
      imageUrl:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSxPeUp-FeNpODI9a9bIkTDduBgzW5aUaNJaqEOafp21el_uugZvhZlvLbFe68DxhcoX4mW4LxiEgFQTDOArPX_qiWu8leRa3fZxjdac2PV&usqp=CAE",
    },
    {
      title: "Sugar & Sweeteners",
      description: "White and brown sugar.",
      icon: <FiShoppingBag className="text-red-500 text-2xl mr-3" />,
      imageUrl:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSxPeUp-FeNpODI9a9bIkTDduBgzW5aUaNJaqEOafp21el_uugZvhZlvLbFe68DxhcoX4mW4LxiEgFQTDOArPX_qiWu8leRa3fZxjdac2PV&usqp=CAE",
    },
    {
      title: "Disposable Cutlery",
      description: "Plastic forks, spoons, knives.",
      icon: <FiCheckSquare className="text-red-500 text-2xl mr-3" />,
      imageUrl:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSxPeUp-FeNpODI9a9bIkTDduBgzW5aUaNJaqEOafp21el_uugZvhZlvLbFe68DxhcoX4mW4LxiEgFQTDOArPX_qiWu8leRa3fZxjdac2PV&usqp=CAE",
    },
    {
      title: "Packaging Materials",
      description: "Food-grade containers.",
      icon: <FiPackage className="text-red-500 text-2xl mr-3" />,
      imageUrl:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSxPeUp-FeNpODI9a9bIkTDduBgzW5aUaNJaqEOafp21el_uugZvhZlvLbFe68DxhcoX4mW4LxiEgFQTDOArPX_qiWu8leRa3fZxjdac2PV&usqp=CAE",
    },
    {
      title: "Sauces & Condiments",
      description: "Ketchup, mustard, sauces.",
      icon: <FiBox className="text-red-500 text-2xl mr-3" />,
      imageUrl:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSxPeUp-FeNpODI9a9bIkTDduBgzW5aUaNJaqEOafp21el_uugZvhZlvLbFe68DxhcoX4mW4LxiEgFQTDOArPX_qiWu8leRa3fZxjdac2PV&usqp=CAE",
    },
    {
      title: "Bakery Products",
      description: "Bread, cakes, pastries.",
      icon: <FiShoppingBag className="text-red-500 text-2xl mr-3" />,
      imageUrl:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSxPeUp-FeNpODI9a9bIkTDduBgzW5aUaNJaqEOafp21el_uugZvhZlvLbFe68DxhcoX4mW4LxiEgFQTDOArPX_qiWu8leRa3fZxjdac2PV&usqp=CAE",
    },
    {
      title: "Frozen Desserts",
      description: "Ice cream, sorbets.",
      icon: <FiPackage className="text-red-500 text-2xl mr-3" />,
      imageUrl:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSxPeUp-FeNpODI9a9bIkTDduBgzW5aUaNJaqEOafp21el_uugZvhZlvLbFe68DxhcoX4mW4LxiEgFQTDOArPX_qiWu8leRa3fZxjdac2PV&usqp=CAE",
    },
    {
      title: "Frozen Seafood",
      description: "Shrimp, salmon, tuna.",
      icon: <FiTruck className="text-red-500 text-2xl mr-3" />,
      imageUrl:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSxPeUp-FeNpODI9a9bIkTDduBgzW5aUaNJaqEOafp21el_uugZvhZlvLbFe68DxhcoX4mW4LxiEgFQTDOArPX_qiWu8leRa3fZxjdac2PV&usqp=CAE",
    },
    {
      title: "Meat Substitutes",
      description: "Tofu, tempeh, soy-based products.",
      icon: <FiCheckSquare className="text-red-500 text-2xl mr-3" />,
      imageUrl:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSxPeUp-FeNpODI9a9bIkTDduBgzW5aUaNJaqEOafp21el_uugZvhZlvLbFe68DxhcoX4mW4LxiEgFQTDOArPX_qiWu8leRa3fZxjdac2PV&usqp=CAE",
    },
    {
      title: "Wine & Spirits",
      description: "Red wine, vodka, whiskey.",
      icon: <FiBox className="text-red-500 text-2xl mr-3" />,
      imageUrl:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSxPeUp-FeNpODI9a9bIkTDduBgzW5aUaNJaqEOafp21el_uugZvhZlvLbFe68DxhcoX4mW4LxiEgFQTDOArPX_qiWu8leRa3fZxjdac2PV&usqp=CAE",
    },
    {
      title: "Bottled Water",
      description: "Still and sparkling water.",
      icon: <FiTruck className="text-red-500 text-2xl mr-3" />,
      imageUrl:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSxPeUp-FeNpODI9a9bIkTDduBgzW5aUaNJaqEOafp21el_uugZvhZlvLbFe68DxhcoX4mW4LxiEgFQTDOArPX_qiWu8leRa3fZxjdac2PV&usqp=CAE",
    },
    {
      title: "Snacks & Chips",
      description: "Potato chips, nuts, crackers.",
      icon: <FiCoffee className="text-red-500 text-2xl mr-3" />,
      imageUrl:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSxPeUp-FeNpODI9a9bIkTDduBgzW5aUaNJaqEOafp21el_uugZvhZlvLbFe68DxhcoX4mW4LxiEgFQTDOArPX_qiWu8leRa3fZxjdac2PV&usqp=CAE",
    },
    {
      title: "Frozen Dough",
      description: "Pre-made dough for pizza, bread.",
      icon: <FiShoppingBag className="text-red-500 text-2xl mr-3" />,
      imageUrl:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSxPeUp-FeNpODI9a9bIkTDduBgzW5aUaNJaqEOafp21el_uugZvhZlvLbFe68DxhcoX4mW4LxiEgFQTDOArPX_qiWu8leRa3fZxjdac2PV&usqp=CAE",
    },
    {
      title: "Cheese Varieties",
      description: "Cheddar, mozzarella, brie.",
      icon: <FiPackage className="text-red-500 text-2xl mr-3" />,
      imageUrl:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSxPeUp-FeNpODI9a9bIkTDduBgzW5aUaNJaqEOafp21el_uugZvhZlvLbFe68DxhcoX4mW4LxiEgFQTDOArPX_qiWu8leRa3fZxjdac2PV&usqp=CAE",
    },
    {
      title: "Cooking Utensils",
      description: "Knives, spatulas, tongs.",
      icon: <FiCheckSquare className="text-red-500 text-2xl mr-3" />,
      imageUrl:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSxPeUp-FeNpODI9a9bIkTDduBgzW5aUaNJaqEOafp21el_uugZvhZlvLbFe68DxhcoX4mW4LxiEgFQTDOArPX_qiWu8leRa3fZxjdac2PV&usqp=CAE",
    },
    {
      title: "Frozen Fruits",
      description: "Frozen berries, mangoes.",
      icon: <FiBox className="text-red-500 text-2xl mr-3" />,
      imageUrl:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSxPeUp-FeNpODI9a9bIkTDduBgzW5aUaNJaqEOafp21el_uugZvhZlvLbFe68DxhcoX4mW4LxiEgFQTDOArPX_qiWu8leRa3fZxjdac2PV&usqp=CAE",
    },
    {
      title: "Organic Produce",
      description: "Fresh organic vegetables and fruits.",
      icon: <FiTruck className="text-red-500 text-2xl mr-3" />,
      icon: <FiBox className="text-red-500 text-2xl mr-3" />,
      imageUrl:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSxPeUp-FeNpODI9a9bIkTDduBgzW5aUaNJaqEOafp21el_uugZvhZlvLbFe68DxhcoX4mW4LxiEgFQTDOArPX_qiWu8leRa3fZxjdac2PV&usqp=CAE",
    },
  ];

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      <div className="mb-12 text-center">
        <h3 className="text-4xl font-bold text-blue-800 mb-2">
          Horeca Product <span className="text-red-500">Showcase</span>
        </h3>
        <h1 className="text-xl text-gray-700">
          Discover a variety of products for the Hospitality, Restaurant, and
          Catering industries.
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col"
          >
            <div className="relative flex-shrink-0 h-56 mb-8">
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-full object-cover rounded-t-3xl"
              />
              <div className="absolute top-4 right-4 p-2 bg-white rounded-lg shadow-lg flex items-center">
                {product.icon}
              </div>
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                {product.title}
              </h3>
              <p className="text-gray-600 mb-4 flex-grow">
                {product.description}
              </p>
              {/* Remove Add to Cart button */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
