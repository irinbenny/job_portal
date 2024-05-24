import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';

function Otp() {
  // State to store the timer for code expiration
  const [timer, setTimer] = useState(120); // Initial value for timer (in seconds)
  const [otpDigits, setOtpDigits] = useState(['', '', '', '']); // State to store OTP digits

  // Function to handle change in OTP input
  const handleOtpChange = (index, value) => {
    const newOtpDigits = [...otpDigits];
    newOtpDigits[index] = value;
    setOtpDigits(newOtpDigits);
  };

  // Function to handle resend OTP
  const handleResend = () => {
    // Code to resend OTP
    // You can add your logic here to resend the OTP
    // For now, let's reset the timer to 60 seconds
    setTimer(60);
  };

  // Effect to decrement timer every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevTimer => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    // Cleanup function to clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className='text-center mt-5'>
        <h3>Check your phone</h3>
        <p style={{fontSize:'18px'}}>We've sent the code to your phone</p>
      </div>

      <Row className="justify-content-center mt-5">
  {otpDigits.map((digit, index) => (
    <Col key={index} md={2}>
      <input
        type="text"
        maxLength={1}
        value={digit}
        style={{ width: '180px', height: '80px',border:'2px solid #000' }} // Inline styles to set width and height
        onChange={e => handleOtpChange(index, e.target.value)}
        className="form-control text-center"
      />
    </Col>
  ))}
</Row>
      <div className="text-center mt-4">
        <p>Code expires in {timer} seconds</p>
        <button className="btn btn-primary" style={{padding:'0.5rem 3rem'}}>Verify</button>
        <button className="btn btn-secondary ms-5" onClick={handleResend} style={{padding:'0.5rem 2rem'}}>Send again</button>
      </div>
    </>
  );
}

export default Otp;
