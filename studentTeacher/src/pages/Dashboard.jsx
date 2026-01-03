import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import StudentDashboard from '../components/StudentDashboard';
import TeacherDashboard from '../components/TeacherDashboard';

const Dashboard = () => {

  const {currentUser} = useContext(AuthContext);

  if(currentUser.role === 'student') return(<StudentDashboard />)

  return(
    <>
      <TeacherDashboard />
    </>
  )
}

export default Dashboard