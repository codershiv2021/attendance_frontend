import React, { useState,useRef } from "react";
import axios from "axios";
import styled from "styled-components";
import Navbar from "./Navbar";

const Back = styled.div`
      background-color: darksalmon;

`
const Down = styled.div`
      background-color: lightcyan;
      margin-top: 20px;
`
const Tutton = styled.button`
      margin-top: 40px;
      margin-bottom: 40px;
      padding: 15px 32px;
      text-align: center;
      font-size: 16px;
`
const Container = styled.div`
      display:flex; flex:1;
      align-items: center;
      justify-content: center;
`
const A = styled.div`
flex:1; margin: 15px;
`
const Title = styled.h1`
      display:flex; flex:1;
      align-items: center;
      justify-content: center;
      padding: 20px;
`

const Tit = styled.h2`
display:flex; flex:1;
align-items: center;
justify-content: center;

`

const Intervalreport = () =>{
      const startDateRef = useRef('Enter your start Date')
    const endDateRef = useRef('Enter you end Date')
      const [records,setRecords] = useState([]);
      
      const fetchRecords = async () =>{
            try{
                  const response = await axios.get('https://attendance-rfz6.onrender.com/api/report/records',{
                        params:{
                              startDate: startDateRef.current.value, 
                              endDate: endDateRef.current.value
                        }
                  })
                  setRecords(response.data)

            }
            catch(err){
                  console.log('Error',err);
            }
    }
return(
      <div>
            <Navbar/>
            <Back>
            <Title>ATTENDANCE RECORDS </Title>
            <div>
            <Tit>START DATE</Tit>
            <Container>
            <input type = "date" ref={startDateRef}/>
            </Container>
            </div>
            <div>
            <Tit>END DATE</Tit>
            <Container>
            <input type = "date" ref = {endDateRef}/>
            </Container>
            </div>
            <Container>
            <Tutton onClick = {fetchRecords}>Fetch Records</Tutton>
            </Container>
            </Back>
            <Down>
            <div>
                  {records.length>0 ?(
                        records.map((record)=>(
                              <Container key={record._id} style={{ marginBottom: '10px' }}>
                              <A><strong>Employee ID:</strong> {record.Emp_id}</A>
                              <A><strong>Name:</strong> {record.Name}</A>
                               <A><strong>Date:</strong> {new Date(record.Date).toLocaleDateString()}</A>
                              <A><strong>In Time:</strong> {record.In_time}</A>
                              <A><strong>Out Time:</strong> {record.Out_time}</A>  

                          </Container>
                        ))
                  ):(<p>No records found</p>)
                  }
            </div>
            </Down>
      </div>
)
};

export default Intervalreport;
