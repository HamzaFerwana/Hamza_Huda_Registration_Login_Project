import { useRef, useState } from "react"
import image from '../assets/img/register.jpg';
import '../Login.scss';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();
  return (
    <>
      <div className='log col-12'>
        <div className='login col-8  d-flex'>
          <div className='col-6 '>
            <div className='col-12'>
              <h2>We Missed You!</h2>
              <p>Login To Continue</p>
            </div>
            <div className='col-12'>
              <form>
                <label htmlFor="email" />
                <input className='col-10 p-2 m-3' type='email' id='email' placeholder='Enter Your Email' ref={email} />
                <label htmlFor="password" />
                <input className='col-10 p-2 m-3' type='password' id='password' placeholder='Enter Your Password' ref={password} />
                <button className='btn' onClick={(e) => {
                  e.preventDefault();
                  let registrations = JSON.parse(localStorage.getItem('localRegistrations'));
                  email.current.value;
                  let x = 0;
                  registrations.map((el) => {
                    if (el.email == email.current.value && el.password == password.current.value) {
                       x++;
                    }
                  })
                  if( x > 0 ) {
                    navigate('/home')
                  } else {
                    alert('These credentials do not match our records.');
                  }

                }}>Login</button>
              </form>
            </div>
            <div className="icons">
              <p>Don't have an account?</p>
              <Link to={'/registration'} id="link">Register</Link>
            </div>
          </div>
          <div>
            <img src={image} className='col-12' />
          </div>
        </div>
      </div>

    </>
  )
}
