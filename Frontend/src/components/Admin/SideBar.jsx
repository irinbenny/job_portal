import  { useState } from 'react';
import {  Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import '../../style/style.css'; 



function Sidebar() {
    const navigateByUrl=useNavigate()

    const [sidebarActive, setSidebarActive] = useState(false);
  

    const handleToggleClick = () => {
        setSidebarActive(!sidebarActive);
    };

    return (
            <div className={`sidebar ${sidebarActive ? 'activeBar' : ''}`}>
       
            </div>
    );
}

function ToggleBtn({ toggleSidebar }) {
    return (
        <div className="toggleBtn" onClick={toggleSidebar}>
            <RiDashboardFill className="ri" />
        </div>
    );
}

   

export default function App() {
    return (
        <div>
            <Sidebar />
            <ToggleBtn />
        </div>
    );
}
