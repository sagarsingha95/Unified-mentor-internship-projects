import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const StudentDashboard = () => {
  const { currentUser, users,handleLogout } = useContext(AuthContext);

  const [speciality, setSpeciality] = useState("");
  const [appointments, setAppointments] = useState({});

  const teachers = users.filter((u) => u.role === "teacher");

  const filteredTeachers = speciality
    ? teachers.filter((t) => t.specialty === speciality)
    : teachers;

  const handleChange = (teacherId, field, value) => {
    setAppointments({
      ...appointments,
      [teacherId]: {
        ...appointments[teacherId],
        [field]: value,
      },
    });
  };

  const bookAppointment = (teacher) => {
    const slot = appointments[teacher.id];

    if (!slot?.date || !slot?.time) {
      alert("Please select date & time");
      return;
    }

    alert(`
Appointment Booked 🎉
Teacher: ${teacher.name}
Subject: ${teacher.specialty}
Date: ${slot.date}
Time: ${slot.time}
    `);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white p-6 rounded-xl shadow mb-6 flex justify-between sticky top-0">
          <div>
            {" "}
            <h2 className="text-2xl font-bold">🎓 Student Dashboard</h2>
            <p className="text-gray-500">Welcome, {currentUser.name}</p>
          </div>
          <button className="bg-red-600 p-2 text-white text-2xl font-bold cursor-pointer" onClick={handleLogout}>Logout</button>
        </div>

        {/* Specialty Filter */}
        <div className="mb-6">
          <select
            onChange={(e) => setSpeciality(e.target.value)}
            className="border p-2 rounded-lg w-full md:w-64"
          >
            <option value="">All Specialities</option>
            {[...new Set(teachers.map((t) => t.specialty))].map((spec) => (
              <option key={spec} value={spec}>
                {spec}
              </option>
            ))}
          </select>
        </div>

        {/* Teachers */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTeachers.map((teacher) => (
            <div
              key={teacher.id}
              className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition"
            >
              {/* Profile */}
              <div className="flex items-center gap-4">
                <img
                  src={teacher.avatar}
                  alt={teacher.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg">{teacher.name}</h3>
                  <p className="text-sm text-gray-500">{teacher.specialty}</p>
                  <p className="text-sm text-gray-500">{teacher.Experience}+ years</p>
                </div>
              </div>

              {/* Date & Time */}
              <div className="mt-4 space-y-3">
                <input
                  type="date"
                  className="w-full border rounded-lg p-2"
                  onChange={(e) =>
                    handleChange(teacher.id, "date", e.target.value)
                  }
                />
                <input
                  type="time"
                  className="w-full border rounded-lg p-2"
                  onChange={(e) =>
                    handleChange(teacher.id, "time", e.target.value)
                  }
                />
              </div>

              {/* Button */}
              <button
                onClick={() => bookAppointment(teacher)}
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Book Appointment
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
