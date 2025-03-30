import React from 'react'
import DashboardStats from '../components/dashboard/DashboardStats'
import PatientStatistics from '../components/dashboard/PatientStatistics'
const Home = () => {
  return (
    <div>
     <DashboardStats/>
     <PatientStatistics/>
    </div>

  )
}

export default Home