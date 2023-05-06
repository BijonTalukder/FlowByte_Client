import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Register = () => {
    const {createUser,updateUser,googleProvider} = useContext(AuthContext) 
    const navigate=useNavigate()
    const location=useLocation();
    const from=location.state?.from?.pathname || '/';
    const providergoogle=new GoogleAuthProvider();
    const handleRegistation = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const role= form.type.value;
        console.log(name,email,password,role)
        createUser(email,password)
        .then(res=>{
            const user=res.user;
            console.log(user)
            
           
            const userInfo={
                displayName:name,
                role
            }
            form.reset()
            toast.success('Registation Success!!')
            

        
            navigate(from,{replace: true})

            
            updateUser(userInfo)
            .then(res=>{
                // const user=res.user;
                // console.log(user)
                saveUser(email,name,role)
               
                

            })
            .catch(error=>console.error(error))
         


        })
        .catch(error=>console.error(error))


        const saveUser=(email,name,role)=>{
            const user={
                email,
                name,
                role
            }

            fetch('https://used-products-resale-server-bijontalukder.vercel.app/users',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(user)
            })
            .then(res=>res.json())
            .then(data=>console.log(data))
         
        }

    }
    const  handleGoogle=()=>{
        googleProvider(providergoogle)
        .then(result=>{
            const user=result.user;
            navigate(from,{replace: true})
        })
        .catch(error=>console.error(error))

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register Now!</h1>

                    <div >
                        <img className='max-h-96 my-6' src='https://www.qrcrypher.com/frontend/images/Mobile%20login.gif' />
                        {/* <button className="btn glass mx-5" onClick={handleGoogle}><FaGoogle className='text-yellow-500 mx-1'/>   continue with google </button>
            <button className="btn glass" onClick={handleGitHub}><FaGithub className='text-yellow-500 mx-1'/>   continue with github</button> */}

                    </div>

                    <Link to='/login' className="btn btn-outline btn-success mt-3">Already sign in</Link>


                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegistation} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" required name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <select name='type' className="select select-bordered w-full max-w-xs">
                            
                            <option selected value='buyer'>Buyer</option>
                            <option value='saller'> Saller</option>
                            
                        </select>
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
                            <button type='submit' className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <button onClick={handleGoogle} className="btn btn-outline btn-success mt-3">Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Register;