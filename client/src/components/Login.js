import React, { useState } from "react";
import "./mix.css";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [passShow, setPassShow] = useState(false);
  const [inpval,setInpval] = useState({
    email:"",
    password:""
  })
  console.log(inpval);
  const setVal = (e)=>{
    const {name,value} = e.target;
    setInpval(()=>{
      return({
        ...inpval,
        [name]:value
      })
    });
  }
  const logIn = (e) =>{
    e.preventDefault();
  }

  const loginuser = (e) =>{
    e.preventDefault();
    const {email,password} = inpval;
    if(email===""){
      alert("please enter your email");
    }else if(!email.includes("@")){
      alert("enter valid email");
    }else if(password === ""){
      alert("enter your password");
    }else if(password.length<6){
      alert("enter correct password");
    }else{
      alert("login successfully");
    }
  }

  return (
    <>
      <section>

        <div className="form_data">
          <div className="form_heading">
            <h1>Welcome Back, Log In</h1>
            <p>Hi, we are you glad you are back. Please login.</p>
          </div>

          <form>
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={inpval.email}
                onChange={setVal}
                placeholder="Enter Your Email Address"
              />
            </div>

            <div className="form_input">
              <label htmlFor="password">Password</label>
              <div className="two">
                <input
                  type={!passShow ? "password" : "text"}
                  name="password"
                  id="password"
                  value={inpval.password}
                  onChange={setVal}
                  placeholder="Enter Your Password"
                />
                <div
                  className="showpass"
                  onClick={() => setPassShow(!passShow)}
                >
                  {!passShow ? "Show" : "Hide"}
                </div>
              </div>
            </div>

            <button className="btn" onClick={loginuser} >Login</button>

            <p>Don't have an Account? <NavLink to="/register" >Sign Up</NavLink></p>

          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
