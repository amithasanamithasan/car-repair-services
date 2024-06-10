import { Link } from 'react-router-dom';
import login from'../../assets/login.svg'
import { useContext } from 'react';
import { Authcontext } from '../../Providers/AuthProviders';

const Login = () => {
const{signIn}=useContext(Authcontext)

 const handellogin=event=>{
    event.preventDefault()
    const form=event.target;
    const email=form.email.value
    const password=form.password.value
    console.log(email,password);
    signIn(email.password)
    .then(result=>{
      const user=result.user
      console.log(user)
      alert('user created successfully')
      })
      .catch(error=>{
        console.log(error)
      })

 }


    return (
        <div className="hero min-h-screen bg-teal-400 ">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left  mr-12 ">
      <h1 className="text-4xl font-bold text-center text-emerald-800">Login now!</h1>
    

<img className='w-60' src={login} alt="" />
    </div>
    <div className="card shrink-0 w-1/2  shadow-2xl bg-base-100">

      <form onSubmit={handellogin} className="card-body">
      <h1 className="text-2xl text-center font-bold">Login now!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email'  placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">

          <input   className="btn bg-orange-800 text-white" type="submit" value="Sign In"  />
        </div>
      </form>

    <p className='text-center'>Have an account?  <Link to='/signup'><span className='text-red-500'> Sign In</span></Link> </p>
    </div>
  </div>
</div>
    );
};

export default Login;