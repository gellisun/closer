import styled from "styled-components";
import Robot from "../assets/robot.gif";

export default function Welcome({currentUser}) {
  return (
    <Container>
        <img src={Robot} alt="robot" />
        <h1>Welcome, <span>{currentUser.username}</span>!</h1>
        <h3>Please select the chat you want to enter.</h3>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f3ffe2;
  flex-direction: column;
  img {
    height: 20rem;
  }
  span {
    color: #EB7F00;
  }
`;