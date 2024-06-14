import axios from "axios";
import React,{useState} from "react";

export const Reportcontext = React.createContext();

const ReportContextProvider = ({children}) =>{
      const [reports, setreports] = useState([])

      const getreport = async() =>{
            try{
                  const resp = await axios.get('https://attendance-rfz6.onrender.com/api/report')
//find kar lega this url me which matches .. if more than 1 then check post/get/put which matches 
//then uske properties can use here .. using Rapport
            console.log('Response postive',resp.data);
            setreports(resp.data.Report);  
                  return true;
            }
            catch(err){
                  console.log('Fetch Error:', err); 
                  setreports([]);
                  return false;
            }
      }

      const values = {
            reports,
            getreport
        };

        return (
            <Reportcontext.Provider value={values}>
                {children}
            </Reportcontext.Provider>
        );

}
export default ReportContextProvider;
 


