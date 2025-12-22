import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  loginSignupUser,
  setUserData,
  validate,
} from "../redux/userSlice";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { BeatLoader } from "react-spinners";


const Login = () => {
  const dispatch = useDispatch();
  const { loading, error, users} = useSelector((state) => state.user);
   const { pathname } = useLocation();
  const navigate=useNavigate();
  function handleUserData(e) {
    const { name, value } = e.target;
    dispatch(setUserData({ [name]: value }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    const errorMessage = validate(users);
    if (errorMessage) {
      toast.warn(errorMessage)
      return
    }
    dispatch(loginSignupUser({ ...users, type:pathname })).unwrap().then(()=>{
        if(pathname==="/signup"){
          navigate("/");
        }
      }).catch((err)=>{
        console.log(err);
        
      });
  }
  useEffect(()=>{
    if(error){
      toast.error(error);
    }
  },[error])
  return (
    <main>
      <form onSubmit={handleSubmit}>
        {pathname === "/signup" && (
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={handleUserData}
            autoComplete="name"
            value={users.name}
          />
        )}
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleUserData}
          autoComplete="email"
          value={users.email}
        />
        {pathname === "/signup" && (
          <input
            type="text"
            placeholder="Mobile"
            name="mobile"
            onChange={handleUserData}
            autoComplete="tel"
            value={users.mobile}
          />
        )}
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleUserData}
          autoComplete="current-password"
          value={users.password}
        />
        {loading?<BeatLoader /> :<button type="submit" disabled={loading}>{pathname === "/login" ? "Login" : "Sign Up"}</button>}
       {pathname==="/login" ? <p>Don't have an account? <Link to="/signup">Sign Up</Link></p> : <p>Already have an account? <Link to="/login">Login</Link></p>}
      </form>
    </main>
  );
};


export default Login;
