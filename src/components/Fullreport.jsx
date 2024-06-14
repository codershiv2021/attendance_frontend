import styled from "styled-components";
import Report from "./Report";
import { Reportcontext } from "../Contexts/reportcontext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
const Container = styled.div`
    margin: 40px;
`;

const Des = styled.div``;
const P = styled.h1``;
const Button = styled.button`
    margin: 5px;
    padding: 10px;
    cursor: pointer;
`;
const PaginationControls = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

const Fullreport = () => {
    const reportcontainer = useContext(Reportcontext);
    const [isloading, setisloading] = useState(true);
    const [reports,setreports] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalpages,settotalpages] = useState(0);
    const recordsPerPage = 5; // Number of records to display per page

    useEffect(()=>{
        const fetchReports = async() =>{
            setisloading(true);
            try{
                const response = await axios.get(`http://localhost:3001/api/report?page=${currentPage}&limit=${recordsPerPage}`);
                setreports(response.data.reports)
                settotalpages(response.data.totalpages)
            }
            catch(err){
                console.log("error",err);
            }finally{
                setisloading(false);
            }
        }
        fetchReports(); //tells that execute this function and have defined this function 
    },[currentPage]); //when currentPage value changes to useEffect gets to work else if kuch bhi render ho it won't execute

    const handleNextPage = () => {
        setCurrentPage((prev)=>Math.min(totalpages,prev+1));
    };
    const handlePrevPage = () =>{
        setCurrentPage((prev)=>Math.max(prev-1,1));
    };

//     useEffect(() => {
//         const getReport = async () => {
//             const isokay = await reportcontainer.getreport();
//             setisloading(false);
//         };
//         getReport();
//     }, [reportcontainer]);

//     useEffect(() => {   
//       console.log('Reports in context:', reportcontainer.reports);
//   }, [reportcontainer.reports]);

//     return (
//         <Des>
//             {isloading ? (
//                 <P>Your report is loading</P>
//             ) : (
//                 <Container>
//                     {reportcontainer.reports.length === 0 ? (
//                         <P>No reports available</P>
//                     ) : (
//                         reportcontainer.reports.map((item) => (
//                             <Report item={item} key={item.id} />
//                         ))
//                     )}
//                 </Container>
//             )}
//         </Des>
//     );
// };

return (
    <Des>
        {isloading ? (
            <P>Your report is loading</P>
        ) : (
            <Container>
                {reports.length === 0 ? (
                    <P>No reports available</P>
                ) : (
                    <>
                    {reports.map((item) => (
                        <Report item={item} key={item.id} />
                    ))}
                    <PaginationControls>
                    <Button onClick={handlePrevPage} disabled={currentPage===1}>
                    PREVIOUS
                    </Button>
                    <Button onClick={handleNextPage} disabled ={currentPage===totalpages}>
                    NEXT
                    </Button>
                    </PaginationControls>
                    </>
                )}
            </Container>
        )}
    </Des>
);
};

export default Fullreport;
