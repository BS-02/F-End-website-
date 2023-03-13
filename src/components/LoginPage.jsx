import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUpstyles.css";

const Login = () => {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    email: "",
    password: ""
  });

  // const [data, setData] = useState([]);
  // console.log(inpval);

  const getdata = (e) => {
    const { value, name } = e.target; //object destructuring

    setInpval(() => {
      return {
        //return call-back fn
        ...inpval, //spread operator
        [name]: value
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();

    const getuserArr = localStorage.getItem("user");
    console.log(getuserArr);

    const { email, password } = inpval; //data validation block
    if (email === "") {
      alert("Email is required");
    } else if (!email.includes("@")) {
      alert("Email is not valid");
    } else if (password === "") {
      alert("Password is required");
    } else {
      if (getuserArr && getuserArr.length) {
        const userdata = JSON.parse(getuserArr);
        const userlogin = userdata.filter((el, k) => {
          return el.email === email && el.password === password;
        });

        if (userlogin.length === 0) {
          alert("Invalid details, check your id and password");
        } else {
          console.log("Logged in successfully");

          localStorage.setItem("user_login", JSON.stringify(userlogin));

          history("/details");
        }
      }
    }
  };

  return (
    <div className="form-sign">
      <h1> Sign In </h1>
      <form>
        <input placeholder="Email" name="email" onChange={getdata} required />
        <input
          placeholder="Password"
          type="password"
          name="password"
          onChange={getdata}
          required
        />

        <button onClick={addData}> Sign In </button>
      </form>
    </div>
  );
};
export default Login;
