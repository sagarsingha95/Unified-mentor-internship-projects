import StatsCard from "../components/StatsCard";
import RevenueChart from "../charts/RevenueChart";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

export default function Dashboard() {
  const {data}= useContext(DataContext);
  const revenue = data.payments.reduce((s, p) => s + p.amount, 0);

  return (
    <div>
      <h1>Dashboard</h1>
      <div className="grid">
        <StatsCard title="Members" value={data.members.length} />
        <StatsCard title="Trainers" value={data.trainers.length} />
        <StatsCard title="Classes" value={data.classes.length} />
        <StatsCard title="Revenue" value={`$${revenue}`} />
      </div>
      <RevenueChart payments={data.payments} />
    </div>
  );
}
