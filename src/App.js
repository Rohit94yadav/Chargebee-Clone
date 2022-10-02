import './App.css';
import AllRoutes from './Routes/AllRoutes';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import {Switch} from "react-router-dom";
import LoginAndSignupRoutes from './Routes/LoginAndSignupRoutes';


function App() {
  return (
    <div  className="App">
      
        <LoginAndSignupRoutes/>
<div>

      <Navbar />
     <AllRoutes />
     <Footer />
</div>
      </div>
   
  );
}

export default App;
