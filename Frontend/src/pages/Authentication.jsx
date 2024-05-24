import  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginAPI, registerAPI } from '../services/allAPI';

function Authentication({ register }) {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: ""
  });
  const navigate = useNavigate();
  const RegisterForm = register ? true : false;

  const handleRegister = async (e) => {
    e.preventDefault();
    const { username, email, password } = userData;

    if (!username || !email || !password) {
      toast.info('Please fill the form completely');
    } else {
      try {
        const result = await registerAPI(userData);
        console.log(result);

        if (result.status === 201) {
          toast.success('Registration successful');
          setUserData({
            username: "",
            email: "",
            password: ""
          });
          navigate('/login');
        } else {
          toast.error('Registration failed');
        }
      } catch (error) {
        console.error(error);
        toast.error('Registration request failed');
      }
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = userData;

    if (!email || !password) {
      toast.info("Please fill the form completely");
    } else {
      try {
        const result = await loginAPI(userData);
        console.log(result);

        if (result && result.data && result.status === 200) {
          sessionStorage.setItem("existingUser", JSON.stringify(result.data.existinguser));
          sessionStorage.setItem("token", result.data.token);
          toast.success('Login Successful');
          setUserData({
            username: '',
            email: '',
            password: ''
          });
          // Redirect based on user role
          if (result.data.role === 'user') {
            navigate('/');
          } else if (result.data.role === 'admin') {
            navigate('/AdminPage');
          } else if (result.data.role === 'manager') {
            navigate('/HiringHome');
          } else {
            // Handle unknown role
            navigate('/');
          }
        } else {
          toast.error('Login failed');
        }
      } catch (error) {
        console.error(error);
        toast.error('Login request failed');
      }
    }
  };




  return (
    <>

    <div className='w-100 d-flex justify-content-center align-items-center mb-5'>

     <div className=' w-75 '>
       <Link to={'/'} style={{textDecoration:'none',color:'white'}}> <h5 className='mb-3'>Back to Home</h5></Link>
        <div className=' p-md-5 rounded shadow bg-primary' >
            <div className="row align-items-center">
                <div className="col-md-6">
                    <img className='w-100 p-4' src="http://elitetechnocrats.com/images/software_devlopment.gif" height={'300px'} alt="" />
                </div>
                <div className="col-md-6 mt-4 mt-md-0 d-flex justify-content-center align-items-center flex-column">
        <h2>Project Fair</h2>

        <h5 className='mt-3 '>
            {
                RegisterForm?'Sign Up to Your Account':'Sign In to Your Account'
            }
        </h5>

        <form className='mt-5 w-100 p-5'>
       { RegisterForm && <input type="text" placeholder='Enter Username' className='form-control' value={userData.username} onChange={(e)=>setUserData({...userData,username:e.target.value})}/>}
            <input type="text" placeholder='Enter Email id' className='form-control mt-3' value={userData.email}  onChange={(e)=>setUserData({...userData,email:e.target.value})}/>
            <input type="text" placeholder='Enter Password' className='form-control mt-3'  value={userData.password}  onChange={(e)=>setUserData({...userData,password:e.target.value})}/>

            { RegisterForm? <div>
               <button onClick={handleRegister} className='btn btn-warning mt-4 w-100'>Register</button>
                <p  className=' mt-2'>Already a User? click Here to <Link to={'/login'} style={{color:'red',textDecoration:'none'}}    >Login</Link></p>
           </div>:
           <div>
                <button className='btn btn-warning mt-4 w-100' onClick={handleLogin}>Login</button>
                <p className=' mt-2'>New User? click Here to <Link to={'/register'} style={{color:'red',textDecoration:'none'}}>Register</Link></p>
           </div> }
        </form>
                </div>
            </div>

        </div>

     </div>
    </div>
    <ToastContainer theme='colored' position='top-center' autoClose={2000}/>
    </>
  )
}

export default Authentication