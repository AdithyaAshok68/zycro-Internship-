import React, { useState } from 'react';
import './Signup.css';
function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [enterPassword, setEnterPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [validationFinished, setValidationFinished] = useState(false);
  const handlePassword = () => {
    setShowPassword(!showPassword);
  };

  const  handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (formSubmitted) {
        setPasswordMatch(enterPassword === e.target.value);
        setValidationFinished(true);
    }
};

const handleValidation = (e) => {
    e.preventDefault();
    if (enterPassword === confirmPassword) {
        setFormSubmitted(false);
        setPasswordMatch(true);
        e.target.reset();


    } else {
        setFormSubmitted(true);
        setPasswordMatch(false);
        setValidationFinished(false);
    }
}
const handleEnterPasswordChange = (e) => {
    setEnterPassword(e.target.value);
    setPasswordMatch(true);
};
  
  return (
    <div>
      <div className='main_container1'>
        <div className='image_container1'>
          <img src="/images/logo.svg" alt="" />
        </div>
        <div className='down_div1'>
          <div className='form_container1'>
            <h1 className='heading'>Welcome to Zycro!</h1>
            <div className='forms1'>
              <form onSubmit={handleValidation}>
                <input type="text" placeholder='Enter full name' required />

                <input type="email" placeholder='Email Address' required />
                
                <input className='enter_password1' type={showPassword ? 'text' : 'password'}
                  placeholder='Enter password'
                  onChange={handleEnterPasswordChange}
                  required
                />

                <input className='enter_password2' type={showPassword ? 'text' : 'password'} placeholder='Confirm password'
                  required
                  onChange={handleConfirmPasswordChange}

                />
                {!passwordMatch && formSubmitted && 
                (<label className='passd_match'>Password do not match</label>)}

                <img onClick={handlePassword} className='eyeicon1' src="/images/atoms.svg" alt="" />
                <input className={   passwordMatch && validationFinished ? 'valid_subb' : 'normal_subb'}  type="submit" value="Signup" />
              </form>
            </div>
          <div className='link_div1'>
            <div className='old_user'>Already have an Account</div>
            <div className='login_link'>
              <a href='/'>Login</a>
            </div>
          </div>
          </div>
        </div>
        <div className='copyright1'>
          <img src="/images/text.svg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Signup