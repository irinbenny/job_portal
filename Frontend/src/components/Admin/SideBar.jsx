import  { useState } from 'react';
import {  Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { RiHome7Fill, RiAddCircleFill, RiGroupFill, RiStackFill, RiQuestionFill, RiLogoutCircleRLine, RiDashboardFill } from 'react-icons/ri';
import '../../style/style.css'; 



function Sidebar() {
    const navigateByUrl=useNavigate()

    const [sidebarActive, setSidebarActive] = useState(false);
  

    const handleToggleClick = () => {
        setSidebarActive(!sidebarActive);
    };

    return (
            <div className={`sidebar ${sidebarActive ? 'activeBar' : ''}`}>
            <Nav className="flex-column">
                    <Nav.Item href="#" className="nav-links" onClick={()=> navigateByUrl('/admindashboard')}>
                        <RiHome7Fill className="ri" /> 
                </Nav.Item>
            </Nav>
            <div className="bottomList">
                <Nav className="flex-column">
                <Nav.Item href="#" className="nav-links" onClick={()=> navigateByUrl('/adminaccept')}>
                            <RiQuestionFill className="ri" /> 
                    </Nav.Item>
                    <Nav.Item className="nav-links" onClick={()=> navigateByUrl('/report')}>
                            <RiAddCircleFill className="ri" /> 
                    </Nav.Item>
                    <Nav.Item className="nav-links" onClick={()=> navigateByUrl('/jobmanagment')}>
                            <RiGroupFill className="ri" /> 
                    </Nav.Item>
                    <Nav.Item className="nav-links" onClick={()=> navigateByUrl('/jobmanagment')}>
                            <RiStackFill className="ri" /> 
                    </Nav.Item>
                    <Nav.Item className='nav-links'>
                            <RiLogoutCircleRLine className="ri" /> 
                    </Nav.Item>
                </Nav>
            </div>
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
