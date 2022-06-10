import './CSS/App.css';
import './CSS/park.css';
import './CSS/lakes.css';
import './CSS/App-mobile.css';
import Homepage from './Components/Homepage';
import ParkMenu from './Components/Park-menu';
import LakeMenu from './Components/Lake-menu';
import { BrowserRouter as Router , Route, Routes } from "react-router-dom"
                                   
function App() {
  return (
<Router>
  <Routes>
    <Route path='/' element= {<Homepage />} />
    <Route path='/Parks' element= {<ParkMenu />} />
    <Route path='/Lakes' element= {<LakeMenu />} />
    </Routes> 
</Router>
    
    
  );
}

export default App;
