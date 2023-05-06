import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Login = () => {
    const {login}=useContext(AuthContext)
    const navigate=useNavigate()
    const location=useLocation();
    const from=location.state?.from?.pathname || '/';
    const handleLogin=(event)=>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email,password)
        .then(res=>{
            const user=res.user;
            console.log(user)
           
            navigate(from,{replace: true})
            form.reset()
            toast.success('Login Success!!')
        })
        .catch(error=>console.error(error))
    }
    return (
        <div>

        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>        
              
              <div >
                <img className='max-h-96 my-6' src='https://www.qrcrypher.com/frontend/images/Mobile%20login.gif'/>
              {/* <button className="btn glass mx-5" onClick={handleGoogle}><FaGoogle className='text-yellow-500 mx-1'/>   continue with google </button>
              <button className="btn glass" onClick={handleGitHub}><FaGithub className='text-yellow-500 mx-1'/>   continue with github</button> */}
              
              </div>
        
              <Link to='/register' className="btn btn-outline btn-success mt-3">Create New Account</Link>
        
           
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" required name='email' placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password" name='password' placeholder="password" className="input input-bordered" />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button type='submit' className="btn btn-primary">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
                    
                </div>
    );
};

export default Login;