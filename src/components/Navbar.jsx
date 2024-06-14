import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
      align-items: center;
      background-color : orange;
      display: flex;
      flex: 1;
      
`
const Text = styled.h1`
      font-size: 40px;
      padding: 10px;
`
const Butt= styled.button`
      font-size: 22px;
      margin-left: 800px;
      background-color: white;
      padding: 12px;
`


const Navbar = () =>{
      const navigate = useNavigate();
      const handleonclick = ()=>{
            navigate("/report");
      }
      return(
            <Container>
                  <Text>DAILY ATTENDANCE </Text>
                  <Butt onClick={handleonclick}>RECORDS</Butt>
            </Container>
      )
}

export default Navbar;  