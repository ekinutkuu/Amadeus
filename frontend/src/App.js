import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";

function App() {
   return (
      <Router>
         <div className="App">
            <Routes>
               <Route path="/" element={<Login />} />
               <Route path="/login" element={<Login />} />
            </Routes>
         </div>
      </Router>
   );
}

export default App;
