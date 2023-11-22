import styled from "styled-components";
import {Link} from "react-router-dom";

export default function Signin() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("form");
  };
  const handleChange = (event) => {
    console.log("changed")
  }
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
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">Create Account</button>
          <span>
            Already have an account? <Link to="/login">Log In</Link>
          </span>
        </form>
      </FormContainer>
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
        color: #F3FFE2;
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
        border: 0.1rem solid #F3FFE2;
        border-radius: 0.4rem;
        color: white;
        font-size: 1rem;
        &:focus {
            border: 0.1rem solid #8d9780;
            outline: none;
        }
    }
    button {
        background-color: #EB7F00;
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
            color: #EB7F00;
            font-weight: bold;
            text-decoration: none;
        }
    }
    `;
