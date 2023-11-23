import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { signinRoute } from "../utilities/APIRoutes";

export default function Signin() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      const { password, username, email } = values;
      const { data } = await axios.post(signinRoute, {
        username,
        email,
        password,
      });
      if (data.status === false) {
        toast.error(data.message, toastOptions)
      }
      if (data.status === true) {
        localStorage.setItem('closer-user', JSON.stringify(data.user));
      }
      navigate('/');
    }
  };

  const handleValidation = () => {
    const { password, confirmPassword, username, email } = values;
    if (password !== confirmPassword) {
      toast.error(
        "Password and confirm password do not match.",
        toastOptions,
        );
      return false;
    } else if (username.length < 3) {
      toast.error(
        "Username should be greater than three characters.",
        toastOptions,
      );
      return false;
    } else if (password.length < 8) {
      toast.error(
        "The passwordd lenght should be equal or greater greater than eight characters.",
        toastOptions,
      );
      return false;
    } else if (email==="") {
      toast.error(
        "The email is required.",
        toastOptions,
      )
    }
    return true;
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  return (
    <>
      <h1 className="app-name">closer</h1>
      <FormContainer>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="brand">
            <img src="" alt="" />
          </div>
          <h2 className="sign-up-heading">Sign up here</h2>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">Create Account</button>
          <span>
            Already have an account? <Link to="/login">Log In</Link>
          </span>
        </form>
      </FormContainer>
      <ToastContainer></ToastContainer>
    </>
  );
}

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  .sign-up-heading {
    color: #f3ffe2;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #0e2130;
    border-radius: 2rem;
    padding: 3rem 5rem;
  }
  input {
    background-color: transparent;
    padding: 1rem;
    border: 0.1rem solid #f3ffe2;
    border-radius: 0.4rem;
    color: white;
    font-size: 1rem;
    &:focus {
      border: 0.1rem solid #8d9780;
      outline: none;
    }
  }
  button {
    background-color: #eb7f00;
    color: #0e2130;
    width: 100%;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    transition: 0.5s ease-in-out;
    &:hover {
      background-color: #764000;
    }
  }
  span {
    color: white;
    text-transform: uppercase;
    a {
      color: #eb7f00;
      font-weight: bold;
      text-decoration: none;
    }
  }
`;
