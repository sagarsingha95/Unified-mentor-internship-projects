import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

const TeacherDashboard = () => {
  const { currentUser, appointments,handleLogout } = useContext(AuthContext);

  const teacherAppointments = appointments.filter(
    (appt) => appt.teacherId === currentUser.id
  );
  useEffect(()=>{
    console.log(currentUser);
  },[currentUser])

  return (
 
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="bg-white rounded-xl shadow p-6 mb-6 flex items-center justify-between gap-4 ">
          <div>
            <img
            src={currentUser.avatar}
            alt={currentUser.name}
            className="w-20 h-20 rounded-full"
          />
          <div>
            <h2 className="text-2xl font-bold">
              👩‍🏫 {currentUser.name}
            </h2>
            <p className="text-gray-500">
              {currentUser.specialty}
            </p>
          </div>
          </div>
           <button className="bg-red-600 p-2 text-white text-2xl font-bold cursor-pointer" onClick={handleLogout}>Logout</button>
        </div>

        {/* Appointments */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-semibold mb-4">
            📅 Booked Appointments
          </h3>

          {teacherAppointments.length === 0 ? (
            <p className="text-gray-500">
              No appointments booked yet
            </p>
          ) : (
            <div className="space-y-4">
              {teacherAppointments.map((appt) => (
                <div
                  key={appt.id}
                  className="border rounded-lg p-4 flex items-center justify-between hover:bg-gray-50 transition"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={appt.studentAvatar}
                      alt={appt.studentName}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <p className="font-semibold">
                        {appt.studentName}
                      </p>
                      <p className="text-sm text-gray-500">
                        {appt.subject}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="font-medium">
                      {appt.date}
                    </p>
                    <p className="text-sm text-gray-500">
                      {appt.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default TeacherDashboard;
