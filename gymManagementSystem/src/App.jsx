import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Members from "./pages/Members";
import Trainers from "./pages/Trainers";
import Classes from "./pages/Classes";
import Payments from "./pages/Payments";
import { useContext, useEffect, useState } from "react";
import { sampleData } from "./data/sampleData";
import AddPerson from "./pages/AddPerson";
import LoginPage from "./pages/LoginPage";
import { DataContext } from "./context/DataContext";

export default function App() {

  const {login} = useContext(DataContext);

  const [data, setData] = useState(() => {
    const saved = localStorage.getItem("gym_data");
    return saved ? JSON.parse(saved) : sampleData;
  });

  useEffect(() => {
    localStorage.setItem("gym_data", JSON.stringify(data));
  }, [data]);

  return (
    <>
    {
      login ? 
      <div className="app">
      <Sidebar />
      <div className="main">
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard data={data} />} />
          <Route path="/members" element={<Members data={data} />} />
          <Route path="/trainers" element={<Trainers data={data} />} />
          <Route path="/classes" element={<Classes data={data} />} />
          <Route path="/payments" element={<Payments data={data} />} />
          <Route
            path="/add-member"
            element={<AddPerson type="member"  />}
            />
          <Route
            path="/add-trainer"
            element={<AddPerson type="trainer" />}
            />
        </Routes>
      </div>
    </div>:<LoginPage />}
    </>
    
  );
}
