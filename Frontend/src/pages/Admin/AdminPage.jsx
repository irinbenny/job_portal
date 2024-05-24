import  { useState } from 'react'
import SideBar from '../../components/Admin/SideBar'
import Footer from '../../components/Footer'
function AdminPage() {
    const [sidebarActive] = useState(false);

  return (
    <>
     <SideBar active={sidebarActive} />
     
    </>
  )
}

export default AdminPage