import React from 'react'
import SideNav from '../components/SideNav'
import Layout from '../components/DashBoardLayout/Layout'
import Balance from './components/Balance'

function Dashbaord() {


  return (
    
      <Layout
      className='flex flex-col '
      >
        <Balance />
      </Layout>
    
  )
}

export default Dashbaord