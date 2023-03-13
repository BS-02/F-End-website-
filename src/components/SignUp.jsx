import React, { useState } from "react";
import "./SignUpstyles.css";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    mobile: "",
    password: ""
  });

  const [data] = useState([]);
  console.log(inpval);

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

    const { name, email, mobile, password } = inpval; //data validation block

    if (name === "") {
      alert("Name is required");
    } else if (email === "") {
      alert("Email is required");
    } else if (!email.includes("@")) {
      alert("Email is not valid");
    } else if (mobile === "") {
      alert("Mobile is required");
    } else if (password === "") {
      alert("Password is required");
    } else {
      console.log("Data saved succesfully");

      localStorage.setItem("user", JSON.stringify([...data, inpval]));
    }
  };

  return (
    <div className="form-sign">
      <h1> Register </h1>
      <form>
        <input placeholder="Name" name="name" onChange={getdata} required />
        <input placeholder="Email" name="email" onChange={getdata} required />
        <input placeholder="Mobile" name="mobile" onChange={getdata} required />
        <input
          placeholder="Password"
          type="password"
          name="password"
          onChange={getdata}
          required
        />

        <button onClick={addData}> Sign Up </button>
      </form>
      <p>
        Already have an account?{" "}
        <span>
          {" "}
          <NavLink to="/login"> Sign In </NavLink>
        </span>
      </p>
    </div>
  );
};

export default SignUp;
