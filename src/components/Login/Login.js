
import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [checkPassword, setCheckPassword] = useState('');
  const [isValidationComplete, setIsValidationComplete] = useState(false);
  const [isLengthValid, setIsLengthValid] = useState(false);
  const [isUppercaseValid, setIsUppercaseValid] = useState(false);
  const [isNumberValid, setIsNumberValid] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  
 const navigate=useNavigate();

  const showPass = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setCheckPassword(newPassword);

    setIsLengthValid(newPassword.length >= 8);
    setIsUppercaseValid(/[A-Z]/.test(newPassword));
    setIsNumberValid(/\d/.test(newPassword));

    
    setIsValidationComplete(
      newPassword.length >= 8 &&
        /[A-Z]/.test(newPassword) &&
        /\d/.test(newPassword))

    
  };
 

  
  const handleFocus = () => {
    setPasswordFocused(true);
};

const handleBlur = () => {
    setPasswordFocused(false);
};

if (isValidationComplete) {
  console.log('Form submitted successfully!');
}

const handleClick =()=>{
  if (isValidationComplete) {

    navigate('/Dashboard')
  }
}

  return (
    <div className='main_container2'>
      <div className='image_container'>
        <img src="/images/logo.svg" alt="" />
      </div>
      <div className='down_div'>
        <div className='form_container'>
          <h1>Let's get to know each other</h1>
          <div className='forms'>
            <form  onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); e.target.reset(); }}>
              <input  type="text" placeholder='Enter full name' required />
              <div className='enter_passwordl'>
              <input 
                type={showPassword ? 'text' : 'password'}
                placeholder='Enter password'
                onChange={handlePasswordChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
              />
              <img onClick={showPass} className='images1' src="/images/atoms.svg" alt="" />
              </div>

              {(passwordFocused || checkPassword.length>0) && !formSubmitted && (
                <div className='rad'>
                  <label className='para1'>
                    <input type='radio' checked={isLengthValid} readOnly content='url' />

                    8+ characters</label>

                  <label className='para1'>
                    <input type='radio' checked={isNumberValid} readOnly />

                    1 number</label>
                  <label className='para1'>

                    <input type='radio' checked={isUppercaseValid} readOnly />
                    1 uppercase</label>
                </div>
              )}

              {!isValidationComplete && formSubmitted &&(<div>
                <p className='password_error'>Invalid password. Please check your input.</p>
                </div>)}

              
              <input className={isValidationComplete ? 'valid_sub' : 'normal_sub'} type="submit" value="Continue" onClick={handleClick}/>
            </form>
          </div>
          <div className='link_div'>
            <div className='new_user'>New User?</div>
            <div className='signup_link'>
              <a href='/Signup'>SignUp</a>
            </div>
          </div>
          
        </div>
      </div>
      <div className='images2'>
        <img src="/images/text.svg" alt="" />
      </div>
    </div>
  );
}

export default Login;

