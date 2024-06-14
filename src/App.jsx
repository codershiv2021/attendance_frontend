// import Home from "./pages/Home"

// const App = () =>{
//   return <Home/>
  
// };

// export default App;
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Home from "./pages/Home"
import Intervalreport from "./components/Intervalreport";

const App = () =>{
  return(
<Router>
  <Routes>
    <Route path="/" element = {<Home/>}/>
    <Route path="/report" element ={<Intervalreport/>}/>
  </Routes>
</Router>
  )
}
export default App;