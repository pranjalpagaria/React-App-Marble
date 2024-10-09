import React from 'react'
import './Login.css'
import CloseIcon from '@mui/icons-material/Close';

export default function Login({handleClose}) {
    
    return (
    <div>
        <div  className="login">
            <div className="close-btn"> 
             <button onClick={handleClose}>
             <CloseIcon style={{ color: "black" , fontSize:"3rem" }} /></  button>
            </div> 
          
         <form action="">   
            <h3>sign in</h3>
            <span>username</span>
            <input type="email" className='box' placeholder='Enter your Email'/>
            <span>password</span>
            <input type="password"  className="box"  placeholder='Enter your Password' />
            <div className="checkbox">
                <input type="checkbox" name="" id="remember-me" />
                <label htmlFor="remember-me">remember-me</label>
            </div>

            <input type="submit" className='submit-btn'/>
            <p>forgot password? <a href="#">click here</a> </p>
            <p>don't have an account <a href="#">create one</a></p>
            
         </form>
        </div>
    </div>
  )
}
 