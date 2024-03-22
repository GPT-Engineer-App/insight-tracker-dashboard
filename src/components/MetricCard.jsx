function MetricCard({ icon: Icon, label, value }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
      <div className="bg-primary text-white p-3 rounded-full mr-4">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <div className="text-gray-500 text-sm">{label}</div>
        <div className="text-2xl font-bold">{value}</div>
      </div>
    </div>
  );
}

export default MetricCard;
