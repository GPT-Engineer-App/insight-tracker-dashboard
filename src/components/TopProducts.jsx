import { FaShoppingCart } from "react-icons/fa";

function TopProducts() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-4 flex items-center">
        <FaShoppingCart className="mr-2" /> Top Products
      </h2>
      {}
    </div>
  );
}

export default TopProducts;
