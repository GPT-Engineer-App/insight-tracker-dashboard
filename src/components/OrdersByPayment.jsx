import { FaChartPie } from "react-icons/fa";

function OrdersByPayment() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-4 flex items-center">
        <FaChartPie className="mr-2" /> Orders by Payment Method
      </h2>
      {}
    </div>
  );
}

export default OrdersByPayment;
