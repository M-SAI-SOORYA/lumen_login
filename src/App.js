import { Route, Routes } from "react-router-dom";
import Register from "./login/Register";
import Login from "./login/Login";
function App() {
  return (
    <div>
       <Routes>
       <Route path="/" element={<Register />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login/>} />
      </Routes>

 
     
   
     
      
      
    </div>
  );
}

export default App;
