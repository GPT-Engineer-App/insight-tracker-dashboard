import { FaChartBar, FaChartLine, FaChartPie, FaDollarSign, FaShoppingCart, FaUser, FaGlobeAmericas, FaStar, FaCreditCard } from "react-icons/fa";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MetricCard from "./components/MetricCard";
import RecentOrders from "./components/RecentOrders";
import DailyRevenue from "./components/DailyRevenue";
import RevenueByCat from "./components/RevenueByCat";
import OrdersByPayment from "./components/OrdersByPayment";
import SalesByRegion from "./components/SalesByRegion";
import KeyPerformance from "./components/KeyPerformance";
import TopProducts from "./components/TopProducts";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8">
          <h1 className="text-4xl font-bold mb-8">Business Dashboard</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <MetricCard icon={FaChartBar} label="Sales" value="$10,450" />
            <MetricCard icon={FaDollarSign} label="Revenue" value="$75,200" />
            <MetricCard icon={FaUser} label="Customers" value="1,584" />
            <MetricCard icon={FaShoppingCart} label="Orders" value="4,209" />
            <MetricCard icon={FaDollarSign} label="Total Profit" value="$25,754" />
            <MetricCard icon={FaShoppingCart} label="Avg Order Value" value="$88.25" />
            <MetricCard icon={FaUser} label="Customer Acquisition Cost" value="$9.50" />
            <MetricCard icon={FaUser} label="Customer Lifetime Value" value="$437.81" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <DailyRevenue />
            <RevenueByCat />
            <OrdersByPayment />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <SalesByRegion />
            <KeyPerformance />
            <TopProducts />
          </div>

          <RecentOrders />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
