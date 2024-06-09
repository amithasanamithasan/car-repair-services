
import { Link } from "react-router-dom";
import logo from"../../../assets/7885857.jpg"
const Navbar = () => {
  const navlink=<>
      <li><Link to="/"> Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/contact">Contact</Link></li>
  </>
    return (
        <div>
       <div className="navbar bg-black">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn bg-slate-300 lg:hidden">

      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3
       z-[1] p-2 shadow bg-base-200 rounded-box w-52">
        
      {navlink}
      </ul>
    </div>
    
    <Link to="/">

  <img className="w-20 h-20 rounded-2xl" src={logo} alt=""></img></Link> 
  </div> 
  
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-rose-800">
    {navlink}
    </ul>
  </div>
  
  <div className="navbar-end">
  <button className="btn btn-outline btn-warning">Appoinment</button>
  </div>
</div>

      </div>
    );
};

export default Navbar;