import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";

export default function Payments() {
  const {data} = useContext(DataContext)
  const [selectedMonth, setSelectedMonth] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");

  // Extract unique years from payments
  const years = [
    ...new Set(
      data.payments.map(p => new Date(p.date).getFullYear())
    )
  ];

  // Filter payments by month & year
  const filteredPayments = data.payments.filter(payment => {
    const date = new Date(payment.date);
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();

    return (
      (selectedMonth === "All" || month === selectedMonth) &&
      (selectedYear === "All" || year === Number(selectedYear))
    );
  });

  // Group filtered payments by month
  const paymentsByMonth = filteredPayments.reduce((acc, payment) => {
    const month = new Date(payment.date).toLocaleString("default", {
      month: "long",
      year: "numeric"
    });

    if (!acc[month]) acc[month] = [];
    acc[month].push(payment);

    return acc;
  }, {});

  return (
    <div className="page">
      <h1>Payments</h1>

      {/* Filters */}
      <div className="filters">
        <select
          value={selectedMonth}
          onChange={e => setSelectedMonth(e.target.value)}
        >
          <option value="All">All Months</option>
          {[
            "January","February","March","April","May","June",
            "July","August","September","October","November","December"
          ].map(month => (
            <option key={month} value={month}>{month}</option>
          ))}
        </select>

        <select
          value={selectedYear}
          onChange={e => setSelectedYear(e.target.value)}
        >
          <option value="All">All Years</option>
          {years.map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>

      {/* Payments Table */}
      {Object.keys(paymentsByMonth).length === 0 ? (
        <p>No payments found.</p>
      ) : (
        Object.keys(paymentsByMonth).map(month => (
          <div key={month}>
            <h2 className="month-title">{month}</h2>

            <table className="table">
              <thead>
                <tr>
                  <th>Member</th>
                  <th>Amount ($)</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {paymentsByMonth[month].map(payment => (
                  <tr key={payment.id}>
                    <td>{payment.member}</td>
                    <td className="text-green-700 font-semibold">
                      ${payment.amount}
                    </td>
                    <td>
                      {new Date(payment.date).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))
      )}
    </div>
  );
}
