
import styled from "styled-components";

const Container = styled.div`
display:flex; flex:1;
align-items: center;
justify-content: center;
background-color: lightskyblue;
`
const P = styled.div`
flex:1; margin: 15px;
font-size: 20px;
`

const Report = ({item}) =>{
      return(
            <div>
                  <Container key={item._id} style={{ marginBottom: '10px' }}>
                              <P><strong>Employee ID:</strong> {item.Emp_id}</P>
                              <P><strong>Name:</strong> {item.Name}</P>
                              <P><strong>Date:</strong> {new Date(item.Date).toLocaleDateString()}</P>
                              <P><strong>In Time:</strong> {item.In_time}</P>
                              <P><strong>Out Time:</strong> {item.Out_time}</P>
            </Container>
            </div>
      )
}
export default Report;