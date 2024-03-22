function RecentOrders() {
  const orders = [
    { id: 1, date: "2023-03-01", total: "$250.00", status: "Shipped" },
    { id: 2, date: "2023-03-02", total: "$150.00", status: "Processing" },
    { id: 3, date: "2023-03-03", total: "$350.00", status: "Delivered" },
    { id: 4, date: "2023-03-04", total: "$210.00", status: "Shipped" },
    { id: 5, date: "2023-03-05", total: "$95.00", status: "Cancelled" },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">Recent Orders</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Date</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>#{order.id}</td>
                <td>{order.date}</td>
                <td>{order.total}</td>
                <td>
                  <span className={`badge ${order.status === "Shipped" ? "badge-info" : order.status === "Delivered" ? "badge-success" : order.status === "Cancelled" ? "badge-error" : ""}`}>{order.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentOrders;
