import React from 'react'
import DashboardStats from '../components/dashboard/DashboardStats'
import PatientStatistics from '../components/dashboard/PatientStatistics'
import Table from '../components/dashboard/Table'
const Home = () => {
  return (
    <div className='bg-gray-100'>
     <DashboardStats/>
     <PatientStatistics/>
     <Table/>
    </div>

  )
}

export default Home