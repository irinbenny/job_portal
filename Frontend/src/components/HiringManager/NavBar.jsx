import  { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { IoMdLogOut  } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { MdLibraryAdd } from "react-icons/md";
import { SiTicktick } from "react-icons/si";
import { useNavigate } from 'react-router-dom';
import '../../style/style.css'; 

const NavBar = () => {
  const navigateByUrl=useNavigate()
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index, url) => {
    setActiveIndex(index);
    navigateByUrl(url);
  };

  return (
    <nav className="navbar-container">
      <ul className="list">
        <div style={{ "--position": activeIndex }} data-indicator className="indicator">
         
        </div>
        <li>
        <a href="#" className={activeIndex === 0 ? 'active' : ''} onClick={() => handleItemClick(0,'/hiringdashboard')} >
            <div className="icon">
            <IoHome />
            </div>
            <div className="text">Home</div>
          </a>
        </li>
        <li>
          <a href="#" className={activeIndex === 1 ? "active" : ""} onClick={() => handleItemClick(1,'/add')}>
            <div className="icon">
                <MdLibraryAdd size={30}/>
            </div>
            <div className="text">Add</div>
          </a>
        </li>
        <li>
        <a href="#" className={activeIndex === 2 ? 'active' : ''} onClick={() => handleItemClick(2,'/ResumeRequest')}>
            <div className="icon">
            <SiTicktick />
            </div>
            <div className="text">Requests</div>
          </a>
        </li>
        <li>
        <a href="#" className={activeIndex === 3 ? 'active' : ''} onClick={() => handleItemClick(3,'/hiringaccount')}>
          <div className="icon">
            <FaRegUser />
          </div>
          <div className="text">Account</div>
        </a>
      </li>
        <li>
          <a href="#" className={activeIndex === 4 ? "active" : ""} onClick={() => handleItemClick(4)}>
            <div className="icon">
                <IoMdLogOut />
            </div>
            <div className="text">Logout</div>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
