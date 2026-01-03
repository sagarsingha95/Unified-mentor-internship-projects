import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

export default function RevenueChart({ payments }) {

  const revenueByMonth = {};

  payments.forEach(p => {
    const month = new Date(p.date).toLocaleString("default", {
      month: "short",
      year: "numeric"
    });

    revenueByMonth[month] = (revenueByMonth[month] || 0) + p.amount;
  });

  const chartData = Object.keys(revenueByMonth).map(month => ({
    month,
    revenue: revenueByMonth[month]
  }));

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="revenue" stroke="#4CAF50" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
