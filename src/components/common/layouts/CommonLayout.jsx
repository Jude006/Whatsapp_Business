import React from 'react'
import PublicNavbar from './PublicNavbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const CommonLayout = () => {
  return (
    <>
    <PublicNavbar />
    <main>
        <Outlet />
    </main>
    <Footer /> 
    </>
  )
}

export default CommonLayout
