import { FaChartBar, FaChartLine, FaChartPie, FaDollarSign, FaShoppingCart, FaUser } from "react-icons/fa";

function App() {
  const metrics = [
    { icon: FaChartBar, label: "Sales", value: "$10,450" },
    { icon: FaDollarSign, label: "Revenue", value: "$75,200" },
    { icon: FaUser, label: "Customers", value: "1,584" },
    { icon: FaShoppingCart, label: "Orders", value: "4,209" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8">Business Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map(({ icon: Icon, label, value }, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 flex items-center">
            <div className="bg-blue-500 text-white p-3 rounded-full mr-4">
              <Icon className="w-6 h-6" />
            </div>
            <div>
              <div className="text-gray-500 text-sm">{label}</div>
              <div className="text-2xl font-bold">{value}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <FaChartLine className="mr-2" /> Sales Trend
          </h2>
          {/* Add sales trend chart */}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <FaChartPie className="mr-2" /> Revenue Breakdown
          </h2>
          {/* Add revenue breakdown chart */}
        </div>
      </div>
    </div>
  );
}

export default App;
