import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Authentication from './pages/Authentication'
import Otp from './pages/Otp'
import Home from './pages/Home'
import About from './pages/User/About'
import JobList  from './pages/User/JobList';
import Events from './pages/User/Events'
import Blog from './pages/User/Blog'
import Blog1 from './components/User/Blog1'
import Contact from './pages/User/Contact'
import UserDashboard from './pages/User/UserDashboard'
import HiringHome from './pages/HiringManager/HiringHome'
import HiringDashboard from './components/HiringManager/HiringDashboard'
import Add from './pages/HiringManager/Add'
import AddJobDetails from './components/HiringManager/AddJobDetails'
import ResumeRequest from './components/HiringManager/ResumeRequest'
import HiringAccount from './components/HiringManager/HiringAccount'
import AdminPage from './pages/Admin/AdminPage'
import AdminAccept from './components/Admin/AdminAccept'
import ReportContainer from './components/Admin/ReportContainer'
import JobPostingManagment from './components/Admin/JobPostingManagement'
import AdminDashBoard from './components/Admin/AdminDashBoard'

function App() {


  return (
    <>
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/login' element={<Authentication />} />
        <Route path='/register' element={<Authentication register />} />
        <Route path="/otp" element={<Otp/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/JobList" element={<JobList/>} />
        <Route path="/events" element={<Events/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/blog1" element={<Blog1/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/userdashboard" element={<UserDashboard/>} />
        <Route path="/hiringHome" element={<HiringHome/>} />
        <Route path="/hiringdashboard" element={<HiringDashboard/>} />
        <Route path="/add" element={<Add/>} />
        <Route path="/addjobdetails" element={<AddJobDetails/>} />
        <Route path="/hiringAccount" element={<HiringAccount/>} />
        <Route path="/AdminAccount" element={<AdminPage/>} />
        <Route path="/admindashboard" element={<AdminDashBoard/>} />
        <Route path="/adminaccept" element={<AdminAccept/>} />
        <Route path="/ResumeRequest" element={<ResumeRequest/>} />
        <Route path="/jobmanagment" element={<JobPostingManagment/>} />
        <Route path="/report" element={<ReportContainer/>} />
     </Routes>
    </div>
    </>
  )
}



export default App
