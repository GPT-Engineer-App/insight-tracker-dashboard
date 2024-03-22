import { FaChartBar, FaChartPie, FaChartLine, FaCog } from "react-icons/fa";

function Sidebar() {
  return (
    <div className="bg-white w-64 p-4">
      <ul className="menu bg-base-100 p-2 rounded-box">
        <li>
          <a>
            <FaChartBar />
            Dashboard
          </a>
        </li>
        <li>
          <a>
            <FaChartPie />
            Analytics
          </a>
        </li>
        <li>
          <a>
            <FaChartLine />
            Reports
          </a>
        </li>
        <li>
          <a>
            <FaCog />
            Settings
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
