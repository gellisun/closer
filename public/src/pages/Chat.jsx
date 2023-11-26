import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { allUsersRoute } from "../utilities/APIRoutes";
import Contacts from "../components/Contacts";

export default function Chat() {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    if (!localStorage.getItem("closer-user")) {
      navigate("/login");
    } else {
      setCurrentUser(JSON.parse(localStorage.getItem("closer-user")));
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (currentUser) {
        if (currentUser.isAvatarImageSet) {
          try {
            const data = axios.get(`${allUsersRoute}/${currentUser._id}`);
            setContacts(data.data);
          } catch (err) {
            console.error("Error fetching data: ", err);
          }
        } else {
          navigate("/setavatar");
        }
      }
    };
    fetchData();
  }, [currentUser]);

  return (
    <Container>
      <div className="container">
        <Contacts contacts={contacts}/>
      </div>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #225378;
  .container {
    height: 85vh;
    width: 85vw;
    background-color: #0e2130;
    display: grid;
    grid-template-columns: 25% 75%;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }
  }
`;
