import React from 'react'
import PublicNavbar from './PublicNavbar'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer'

const CommonLayout = () => {
  const location = useLocation()
  const hideNavbar = ['/auth/login', '/auth/register']
  const shouldHideNavbar = hideNavbar.some(route => location.pathname.startsWith(route))
  return (
    <>
   {!shouldHideNavbar && <PublicNavbar />}
    <main>
        <Outlet />
    </main>
  {!shouldHideNavbar &&  <Footer /> }
    </>
  )
}

export default CommonLayout
